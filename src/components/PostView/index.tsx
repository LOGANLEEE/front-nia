import React, { useEffect } from 'react';
import { useRecoilStateLoadable } from 'recoil';
import { PostType } from 'recoil/Post/atom';
import { postSelector } from 'recoil/Post/selector';

import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}

export const PostView = ({ className }: Props) => {
	const [post, setPost] = useRecoilStateLoadable(postSelector.get_posts);

	useEffect(() => {
		post.state === 'hasValue' && setPost(post.contents);
	}, [post.contents, post.state, setPost]);

	return (
		<Wrapper className={className}>
			{post.state === 'loading' && <div>loading...</div>}
			{post.state === 'hasError' && <div>Error...</div>}
			{post.state === 'hasValue' && (
				<ul>
					{post.contents.map(({ author, from, hit, link, title, content, id, isnew, upload_date }: PostType) => (
						<li key={id} onClick={() => window.open(link, title)}>
							{author}
							{from}
							{content}
							{isnew}
							{upload_date}
							{title}
							{hit}
						</li>
					))}
				</ul>
			)}
		</Wrapper>
	);
};
