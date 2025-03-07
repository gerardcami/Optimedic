import { useEffect, useState } from 'react'
import { CardPlaceholder } from './card-placeholder'

const InstagramGallery = () => {
	const [posts, setPosts] = useState<
		{
			id: string
			shortcode: string
			caption: string
			media_url: string
			thumbnail_url: string
			media_type: string
			like_count: number
			comments_count: number
			timestamp: string
		}[]
	>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchLatestPosts = async () => {
			try {
				// Hacer la solicitud a tu API backend de Astro
				const response = await fetch('/instagram-api') // URL de la API del backend de Astro
				console.log(response)
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`)
				}

				const data = await response.json()

				if (data.data && data.data.length > 0) {
					const filteredPosts = data.data.filter((post: any) => post.media_url) // Filtramos las publicaciones que no tengan media_url
					setPosts(
						filteredPosts.map((post: any) => ({
							id: post.id,
							shortcode: post.shortcode,
							caption: post.caption,
							media_url: post.media_url,
							thumbnail_url: post.thumbnail_url,
							media_type: post.media_type,
							like_count: post.like_count,
							comments_count: post.comments_count,
							timestamp: post.timestamp
						}))
					)
				} else {
					setPosts([]) // Si no hay publicaciones, establecemos el estado como vacío
				}
				console.log(data)
			} catch (error) {
				console.error(error)
				setPosts([]) // Limpiamos el estado en caso de error
			} finally {
				setLoading(false)
			}
		}

		fetchLatestPosts()
	}, [])

	// Función para calcular los días desde la publicación
	const getDaysAgo = (timestamp: string) => {
		const postDate = new Date(timestamp)
		const today = new Date()
		const differenceInTime = today.getTime() - postDate.getTime()
		return Math.floor(differenceInTime / (1000 * 3600 * 24) + 1) // Devuelve los días transcurridos
	}

	if (loading) {
		return (
			<div className="grid w-full grid-cols-1 md:grid-cols-2 md:gap-4 md:px-10 lg:grid-cols-3 lg:gap-6 lg:px-40">
				<CardPlaceholder />
				<CardPlaceholder />
				<CardPlaceholder />
			</div>
		)
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-4 md:px-10 lg:grid-cols-3 lg:gap-6 lg:px-40">
			{posts.map((post) => (
				<article
					key={post.id}
					className="overflow-hidden border transition-all duration-200 hover:shadow-lg md:rounded-lg"
				>
					<a
						href={`https://www.instagram.com/p/${post.shortcode}`}
						target="_blank"
						rel="noreferrer"
					>
						<div className="p-0">
							<div className="relative aspect-square">
								{post.media_type === 'VIDEO' ? (
									<video
										controls
										poster={post.thumbnail_url}
										className="h-full w-full object-cover"
									>
										<source src={post.media_url} type="video/mp4" />
									</video>
								) : (
									<img
										src={post.media_url}
										alt={`Social media post ${post.id}`}
										className="h-full w-full object-cover"
									/>
								)}
							</div>
							<div className="p-4">
								<p className="line-clamp-2 text-sm text-gray-600">{post.caption}</p>
								<div className="mt-2 flex items-center justify-between">
									<div className="flex items-center space-x-1 text-sm text-gray-600">
										<span>{post.like_count} Me gusta</span>
										{post.comments_count > 0 && (
											<>
												<span>•</span>
												<span>
													{post.comments_count}{' '}
													{post.comments_count === 1 ? 'Comentario' : 'Comentarios'}
												</span>
											</>
										)}
									</div>
									<span className="text-xs text-gray-600">{getDaysAgo(post.timestamp)}d</span>
								</div>
							</div>
						</div>
					</a>
				</article>
			))}
		</div>
	)
}

export { InstagramGallery }
