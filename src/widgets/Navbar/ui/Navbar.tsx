import { usePostsStore } from '@/pages/Home/store/posts.store'
import Logo from '@/shared/assets/search.svg?react'
import Search from '@/shared/assets/search_icon.svg?react'
import { Radio, RadioGroup } from '@/shared/components/ui/radio'
import useDebounce from '@/shared/hooks/useDebounce'
import useMediaQuery from '@/shared/hooks/useMediaQuery'
import { useScroll } from '@/shared/hooks/useScroll'
import {
	Button,
	Collapsible,
	Container,
	Group,
	Input,
	InputAddon,
	Stack,
	Text,
} from '@chakra-ui/react'
import cls from './Navbar.module.scss'

const COLOR_FILTERS = ['red', 'orange', 'green', 'none']

export const Navbar = () => {
	const { search_val, getPosts, per_page, current_page, color } =
		usePostsStore()
	const { isShrunk } = useScroll({ height: 100 })

	useDebounce(
		() => {
			if (search_val.length > 0) {
				getPosts(current_page, per_page, search_val, '')
			} else if (color.length > 0) {
				getPosts(current_page, per_page, '', color)
			}
		},
		500,
		[search_val, color]
	)

	const is750px = useMediaQuery('(max-width: 750px)')

	return (
		<div className={cls.container}>
			<div
				className={cls.content_row}
				style={{ flexDirection: is750px ? 'column' : 'row' }}
			>
				{!is750px ? (
					<Container
						display={'flex'}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<Logo width={isShrunk ? 40 : 80} height={isShrunk ? 40 : 80} />
						<Text fontSize={isShrunk ? '2rem' : '3rem'} fontWeight={'800'}>
							Fynpics
						</Text>
					</Container>
				) : (
					''
				)}
				<Container
					display={'flex'}
					flexDirection={!is750px ? '' : 'column'}
					justifyContent={'center'}
					alignItems={'center'}
					gap={'18px'}
					maxW={'900px'}
				>
					<Group attached>
						<InputAddon>
							<Search width={18} height={18} />
						</InputAddon>
						<Input
							value={search_val ?? ''}
							onChange={e =>
								usePostsStore.setState(() => ({ search_val: e.target.value }))
							}
							fontSize={'1rem'}
							maxW={'600px'}
							className={cls.search_input}
							bg={'#edeef0'}
							placeholder='Search'
							border={'none'}
							_focus={{ outline: 'none', backgroundColor: '#e4e5e9' }}
							_hover={{ backgroundColor: '#e4e5e9' }}
							_active={{ backgroundColor: '#dadce2' }}
						/>
					</Group>
					{!is750px ? (
						<Collapsible.Root>
							<Collapsible.Trigger paddingY='3' cursor={'pointer'}>
								<Button>Choose the pic color</Button>
							</Collapsible.Trigger>
							<Collapsible.Content>
								<RadioGroup
									defaultValue=' '
									value={color}
									onChange={(e: any) =>
										usePostsStore.setState(() => ({
											color: e.target.value,
										}))
									}
								>
									<Stack gap='6' flexDir='row'>
										{COLOR_FILTERS.map(i => (
											<Radio value={i === 'none' ? ' ' : i} key={i}>
												{i}
											</Radio>
										))}
									</Stack>
								</RadioGroup>
							</Collapsible.Content>
						</Collapsible.Root>
					) : (
						<RadioGroup
							defaultValue=' '
							value={color}
							onChange={(e: any) =>
								usePostsStore.setState(() => ({
									color: e.target.value,
								}))
							}
						>
							<Stack gap='6' flexDir='row'>
								{COLOR_FILTERS.map(i => (
									<Radio value={i === 'none' ? ' ' : i} key={i}>
										{i}
									</Radio>
								))}
							</Stack>
						</RadioGroup>
					)}
				</Container>
			</div>
		</div>
	)
}
