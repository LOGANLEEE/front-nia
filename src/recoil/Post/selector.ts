import { selector } from 'recoil';
import { postAtom, PostType } from 'recoil/Post/atom';
import { fetch } from 'utils/axiosClient';

export const postSelector = {
	get_posts: selector({
		key: 'post/postSelector/get_posts',
		get: () => fetch.get('post').then(({ data }) => data),
		set: ({ get, set }, val) => {
			val as PostType[];
			const { post } = get(postAtom);
			if (!val.every((value: PostType, idx: number) => value === post[idx])) {
				set(postAtom, { post: val });
			}
		},
	}),
};
