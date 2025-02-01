import {
	PaginationItems,
	PaginationNextTrigger,
	PaginationPrevTrigger,
	PaginationRoot,
} from '@/components/ui/pagination'
import { Post } from '@/shared/ui/Post/indext'
import { Container, HStack, Spinner } from '@chakra-ui/react'
import { useEffect } from 'react'
import { usePostsStore } from '../store/posts.store'
import cls from './Home.module.scss'

const Home = () => {
	const {
		getPosts,
		posts,
		loading,
		current_page,
		per_page,
		total_results,
		search_val,
		color,
	} = usePostsStore()

	useEffect(() => {
		getPosts(current_page, per_page, search_val, color)
		usePostsStore.setState(() => ({ loading: true }))
	}, [current_page])

	if (loading)
		return (
			<div className={cls.home_page_container}>
				<Spinner color={'#ffffff'} size={'xl'} />
			</div>
		)
	return (
		<div className={cls.home_page_container}>
			<Container w={'100%'} className={cls.home_page_container}>
				{posts?.map((i, idx) => (
					<Post
						src={i?.src}
						alt={i?.alt}
						photographer_name={i?.photographer}
						key={i?.alt + idx}
					/>
				))}
			</Container>
			<PaginationRoot
				count={total_results}
				pageSize={per_page}
				defaultPage={current_page}
				onPageChange={e =>
					usePostsStore.setState(() => ({ current_page: e.page }))
				}
				variant={'solid'}
			>
				<HStack backgroundColor={'#ffffff'}>
					<PaginationPrevTrigger style={{ backgroundColor: '#ffffff' }} />
					<PaginationItems style={{ margin: '0 4px' }} />
					{/* <PaginationPageText style={{ backgroundColor: '#ffffff' }} /> */}
					<PaginationNextTrigger style={{ backgroundColor: '#ffffff' }} />
				</HStack>
			</PaginationRoot>
		</div>
	)
}

export default Home
