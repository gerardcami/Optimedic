import { useEffect, useState } from 'react'

const API_URL = import.meta.env.APi

const getPosts = async () => {
	const res = await fetch(`http://localhost:1337/api/posts?populate[cover][fields][0]=url`)
	if (!res.ok) {
		throw new Error('Something went wrong')
	}
	const { data } = await res.json()
	return data
}

const PostList = () => {
	const [posts, setPosts] = useState<any[]>([])

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await getPosts()
				console.log('Fetched data:', response)
				setPosts(response)
			} catch (error) {
				console.error(error)
			}
		}

		fetchPosts()
	}, [])

	return (
		<div>
			{posts.length > 0 ? (
				<div>
					<p>Post ID: {posts[0].id}</p>
					{/* Aquí puedes agregar más contenido basado en los posts */}
				</div>
			) : (
				<p>No posts available.</p>
			)}
		</div>
	)
}

export { PostList }
