import { Skeleton } from '@chakra-ui/react'
import { useState } from 'react'

interface ImageWithSkeleton {
	src?: string
	alt?: string
	skeletonHeight: string
}

export function ImageWithSkeleton({
	src,
	alt,
	skeletonHeight = '200px',
}: ImageWithSkeleton) {
	const [isLoaded, setIsLoaded] = useState(false)

	return (
		<div style={{ position: 'relative', display: 'inline-block' }}>
			{/* Skeleton Placeholder */}
			{!isLoaded && <Skeleton height={skeletonHeight} />}

			{/* Actual Image */}
			<img
				src={src}
				alt={alt}
				onLoad={() => setIsLoaded(true)}
				style={{
					display: isLoaded ? 'block' : 'none',
					width: '100%',
					height: 'auto',
					borderRadius: '8px',
				}}
			/>
		</div>
	)
}

export default ImageWithSkeleton
