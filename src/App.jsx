import { Post } from "./components/Post";
import { Header } from "./components/header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

// author: {avatar_url: string, name: string, role: string}
//publishedAt: Date
//content: string

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/allanhal.png",
			name: "Allan Araujo",
			role: "Web Developer",
		},
		content: [
			{ type: "paragraph", content: "Fala galera 👍" },
			{
				type: "paragraph",
				content:
					"Acabei de subir o meu site. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/dkasjkasjdksl" },
		],
		publishedAt: new Date("2023-06-05 12:30:30"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/joseaantonio.png",
			name: "Jose Antonio",
			role: "Web Developer",
		},
		content: [
			{ type: "paragraph", content: "Fala galera 👍" },
			{
				type: "paragraph",
				content:
					"Acabei de subir o meu site. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/dkasjkasjdksl" },
		],
		publishedAt: new Date("2023-06-05 12:30:30"),
	},
];

export function App() {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</>
	);
}
