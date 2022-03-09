import styled from 'styled-components';

export const Wrapper = styled.ul`
	.list {
		padding: 4px;
		display: flex;
		flex-direction: row;

		.from {
			font-size: 10px;
			width: 5%;
			align-self: center;
			padding-right: 3px;
			overflow: hidden;
		}
		.info {
			width: 95%;

			.title {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				font-size: 14px;
			}
			.bottom-detail {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				font-size: 12px;

				.date {
					width: 30%;
				}
				.author {
					width: 30%;
				}
				.hit {
					width: 20%;
				}
			}
		}
	}
`;
