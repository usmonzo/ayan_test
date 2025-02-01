import { useEffect, useState } from 'react'

interface useScrollProps {
	height: number
}

export const useScroll = ({ height }: useScrollProps) => {
	const [isShrunk, setIsShrunk] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > height) {
				setIsShrunk(true)
			} else {
				setIsShrunk(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return { isShrunk }
}
