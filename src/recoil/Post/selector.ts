import { selector } from 'recoil';
import { fetch } from 'utils/axiosClient';

export const getPosts = selector({
	key: 'selector/post/getPosts',
	get: async () => {
		const { data, status } = await fetch.get('post').catch(() => ({ data: [], status: -1 }));
		if (status === 200) {
			return { data, isError: false };
		}
		return { data: [], isError: true };
	},
});
