import axios from 'axios'
import { create } from 'zustand'

interface IUsePostsStore {
	posts: any[]
	loading: boolean
	search_val: string
	color: string
	getPosts: (
		currPage: number,
		perPage: number,
		searchVal: string,
		color: string
	) => void
	current_page: number
	per_page: number
	total_results: number
}

export const usePostsStore = create<IUsePostsStore>(set => ({
	posts: [],
	loading: false,
	search_val: '',
	color: '',
	current_page: 1,
	per_page: 4,
	total_results: 0,
	getPosts: async (currPage, perPage, searchVal, color) => {
		try {
			set({ loading: true })
			const res = await axios(
				`${import.meta.env.VITE_BASE_URL}search?${searchVal != '' ? `query=${searchVal}&` : 'query='}page=${currPage}&per_page=${perPage}&color=${color}`,
				{
					headers: { Authorization: import.meta.env.VITE_API_KEY },
				}
			)
			set({
				posts: res.data.photos,
				loading: false,
				total_results: res.data.total_results,
			})
		} catch (e) {
			set({ loading: false })
			console.error(e)
		}
	},
}))
