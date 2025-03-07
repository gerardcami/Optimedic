import type { APIRoute } from 'astro'
import fetch from 'node-fetch'

export const GET: APIRoute = async ({ request }) => {
	try {
		const { INSTAGRAM_ACCOUNT_ID, INSTAGRAM_REFRESH_TOKEN } = import.meta.env

		// Obtener el token de acceso actualizado
		const authResponse = await fetch(
			`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${INSTAGRAM_REFRESH_TOKEN}`,
			{
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			}
		)

		const authData = await authResponse.json()
		const accessToken = authData.access_token

		// Hacer la solicitud a la API de Instagram para obtener los posts
		const response = await fetch(
			`https://graph.instagram.com/${INSTAGRAM_ACCOUNT_ID}/media?fields=id,shortcode,caption,media_type,media_url,thumbnail_url,like_count,comments_count,timestamp&access_token=${accessToken}&limit=9`
		)

		const data = await response.json()

		// Devuelve un Response con el status 200 y los datos
		return new Response(JSON.stringify(data), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		})
	} catch (error) {
		// En caso de error, devuelve un Response con status 500 y un mensaje de error
		return new Response(JSON.stringify(error), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}
}
