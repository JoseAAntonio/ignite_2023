import { Trash } from "@phosphor-icons/react";

import styles from "./Comment.module.css";
import { ThumbsUp } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";

export const Comment = () => {
	return (
		<div className={styles.comment}>
			<Avatar
				hasBorder={false}
				src='https://github.com/allanhal.png'
				alt='avatar'
			/>

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>José Antonio</strong>
							<time dateTime='2023-06-05 12:30:30' title='Publicado há 1 hora'>
								Cerca de 1h atrás
							</time>
						</div>
						<button title='Deletar comentário'>
							<Trash size={24} />
						</button>
					</header>

					<p>Muito bom Devon, parabens!!!</p>
				</div>
				<footer>
					<button>
						<ThumbsUp size={20} />
						Aplaudir <span>52</span>
					</button>
				</footer>
			</div>
		</div>
	);
};
