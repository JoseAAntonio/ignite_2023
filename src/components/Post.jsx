/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import styles from "./Post.module.css";

import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { useState } from "react";

export const Post = ({ author, publishedAt, content }) => {
	const [comments, setComment] = useState([1, 2]);

	const formatedDate = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
		locale: ptBR,
	});

	const dateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	const handleCreateNewComment = (e) => {
		e.preventDefault();
		setComment([...comments, comments.length + 1]);
	};

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} alt='avatar' />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time dateTime={publishedAt.toISOString()} title={formatedDate}>
					{dateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((line) => {
					if (line.type === "paragraph") {
						return <p>{line.content}</p>;
					} else if (line.type === "link") {
						return (
							<p>
								<a href='#'>{line.content}</a>
							</p>
						);
					}
				})}
			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea placeholder='Deixe um comentário' />

				<footer>
					<button type='submit'>Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment) => {
					return <Comment />;
				})}
			</div>
		</article>
	);
};
