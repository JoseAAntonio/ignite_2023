import { Post } from "./components/Post";
import { Header } from "./components/header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

export function App() {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post
						author='John Doe'
						content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat provident accusamus sit amet, magni laborum dignissimos, facere dolorem soluta optio ducimus cumque iste esse hic repellendus voluptatum veritatis incidunt iusto!'
					/>
				</main>
			</div>
		</>
	);
}
