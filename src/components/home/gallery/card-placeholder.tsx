const CardPlaceholder = () => {
	return (
		<div className="overflow-hidden border bg-white transition-all duration-200 hover:shadow-lg md:rounded-lg">
			<div className="p-0">
				{/* Placeholder para la imagen */}
				<div className="relative aspect-square animate-pulse bg-gray-300"></div>

				<div className="p-4">
					{/* Placeholder para el texto de la descripción */}
					<div className="mb-2 h-4 w-3/4 animate-pulse rounded bg-gray-300"></div>

					<div className="mt-2 flex items-center justify-between">
						{/* Placeholder para los iconos y texto de "Me gusta" y comentarios */}
						<div className="flex items-center space-x-1 text-sm text-gray-600">
							<div className="h-4 w-20 animate-pulse rounded bg-gray-300"></div>
							<div className="h-4 w-16 animate-pulse rounded bg-gray-300"></div>
						</div>
						{/* Placeholder para el texto de los días */}
						<div className="h-4 w-12 animate-pulse rounded bg-gray-300"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { CardPlaceholder }
