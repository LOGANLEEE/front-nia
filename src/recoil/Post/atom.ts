import { atom } from 'recoil';

export interface PostType {
	title: string;
	author: string;
	hit: number;
	upload_date?: string;
	id?: number;
	from: string;
	content?: string;
	link: string;
	isnew?: boolean;
}

interface PostAtom {
	post: PostType[];
}

export const postAtom = atom<PostAtom>({
	key: 'postAtom',
	default: { post: [] },
});
