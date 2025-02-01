import { useEffect, useState } from 'react'

function useMediaQuery(query: string): boolean {
	const [matches, setMatches] = useState<boolean>(
		() => window.matchMedia(query).matches
	)

	useEffect(() => {
		const mediaQuery = window.matchMedia(query)

		const updateMatch = (event: MediaQueryListEvent) => {
			setMatches(event.matches)
		}

		mediaQuery.addEventListener('change', updateMatch)

		return () => {
			mediaQuery.removeEventListener('change', updateMatch)
		}
	}, [query])

	return matches
}

export default useMediaQuery
