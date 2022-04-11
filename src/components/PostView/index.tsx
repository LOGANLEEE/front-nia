import { format } from 'date-fns';
import React, { useCallback, useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { postAtom, PostType } from 'recoil/Post/atom';
import { getPosts } from 'recoil/Post/selector';

import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}

export const PostView = ({ className }: Props) => {
	const [{ post }, setPost] = useRecoilState(postAtom);
	const {
		state,
		contents: { data, isError },
	} = useRecoilValueLoadable(getPosts);

	useEffect(() => {
		if (state === 'hasValue' && !isError) setPost((prev) => ({ ...prev, post: data }));
	}, [state, isError, data, setPost]);

	const numberFormatter = useCallback((hit: number) => new Intl.NumberFormat('en-US').format(hit), []);

	// do virtualized list
	const PostRender = useCallback(
		({ post }: { post: PostType[] }): JSX.Element => (
			<ul>
				{post.map(({ author, from, hit, link, title, content, id, isnew, upload_date }: PostType) => (
					<li className='list' key={id} onClick={() => window.open(link, title)}>
						<div className='from'>{from}</div>
						<div className='info'>
							<div className='title'>{title}</div>
							<br />
							<div className='bottom-detail'>
								<div className='date'>{upload_date && format(new Date(upload_date), 'MM/dd yy:mm')}</div>
								<div className='author'>{author}</div>
								<div className='hit'>{`🔥${numberFormatter(hit)}`}</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		),

		[],
	);

	return (
		<Wrapper className={className}>
			{state === 'loading' && <Bars height='100' width='100' color='grey' ariaLabel='loading-indicator' />}
			{state === 'hasValue' && <PostRender post={post} />}
		</Wrapper>
	);
};
