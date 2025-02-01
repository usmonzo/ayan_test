import { Card } from '@chakra-ui/react'
import { ImageSkeleton } from '../../ImageSkeleton'
// import cls from './Post.module.scss'

interface PostProps {
	src: {
		medium: string
		small: string
		tiny: string
	}
	alt: string
	photographer_name: string
}

export const Post = (props: PostProps) => {
	const { src, alt, photographer_name } = props
	return (
		<Card.Root width='320px'>
			<Card.Body gap='2'>
				<ImageSkeleton skeletonHeight={'405px'} src={src.medium} />
				<Card.Title mt='2'>{photographer_name}</Card.Title>
			</Card.Body>
			<Card.Footer justifyContent='flex-end'>
				<Card.Description>{alt}</Card.Description>
			</Card.Footer>
		</Card.Root>
		// <div key={alt} className={cls.post_container}>
		// 	<div className={cls.post_content}>
		// 		<h1>{photographer_name}</h1>
		// 		<img src={src.tiny} />
		// 	</div>
		// </div>
	)
}
