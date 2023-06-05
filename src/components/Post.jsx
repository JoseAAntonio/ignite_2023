import styles from "./Post.module.css";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export const Post = () => {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src='https://github.com/allanhal.png' alt='avatar' />
					<div className={styles.authorInfo}>
						<strong>José Antonio</strong>
						<span>Web Developer</span>
					</div>
				</div>

				<time
					dateTime='2023-06-05 12:30:30'
					title='Publicado em 5 de junho de 2023'
				>
					Publicado há 1 hora
				</time>
			</header>

			<div className={styles.content}>
				<p>Fala galera 👍</p>
				<p>
					Acabei de subir o meu site. É um projeto que fiz no NLW Return, evento
					da Rocketseat. O nome do projeto é DoctorCare 🚀
				</p>
				<p>
					<a href='#'>jane.design/dkasjkasjdksl</a>
				</p>
				<p>
					<a href='#'>#novoprojetocketo</a> <a href='#'>#rocketseat</a>{" "}
					<a href='#'>#nlw</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea placeholder='Deixe um comentário' />

				<footer>
					<button type='submit'>Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
};
