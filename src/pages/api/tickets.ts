// src/pages/api/tickets.json.ts
import type { APIContext } from 'astro'

export async function POST({ request }: APIContext) {
	const body = await request.json()

	console.log(body)
	const apiResponse = await fetch('http://localhost:3000/api/tickets', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${import.meta.env.API_TOKEN}` // Solo disponible en el backend
		},
		body: JSON.stringify(body)
	})

	const data = await apiResponse.json()

	return new Response(JSON.stringify(data), {
		status: apiResponse.status,
		headers: { 'Content-Type': 'application/json' }
	})
}
