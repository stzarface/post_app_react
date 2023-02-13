import { useEffect, useState } from "react";
import "./App.css";
import PostLayout from "./components/PostLayout";
import Sidebar from "./components/Sidebar";
import API from "./services/API";

function App() {
	// Cim se ucita aplikacija - komponenta App.js (kaze se i mauntuje) trevbaju nam podaci
	// Prvi put se pokrece svakako, a ako imamo nesto na mestu uglastih zagrada ucitava se kad god se to promeni

	const [allTags, setAllTags] = useState([]);
	const [allPosts, setAllPosts] = useState([]);
	const [selectedTag, setSelectedTag] = useState("");
	const [filteredPost, setFilteredPost] = useState([]);

	useEffect(() => {
		API.getAllTags().then((data) => {
			// console.log(data);

			setAllTags(data);
		});

		API.getAllPosts().then((data) => {
			// console.log('Selected Tag ....', selectedTag);
			// console.log(data);
			setAllPosts(data);
			// setFilteredPost(data)
		});
	}, []);

	useEffect(() => {
		if (selectedTag) {
			let filtered = allPosts.filter((post) => {
				return post.tags.includes(selectedTag);
			});
			setFilteredPost(filtered);
		} else {
			setFilteredPost(allPosts);
		}

		// console.log(filtered);
	}, [selectedTag, allPosts]);

	return (
		<>
			<header className="container-fluid py-5 bg-dark bg-opacity-10 text-center">
				<h1>Blog Post App</h1>
			</header>

			<div className="container mt-5">
				<div className="row">
					<div className="col-2">
						{allTags.length > 0 && (
							<Sidebar
								tags={allTags}
								selectedTag={setSelectedTag}
								currentTag={selectedTag}
							/>
						)}
					</div>
					<div className="col-10">
						{filteredPost.length === 0 ? (
							<p className="my-5 text-center">Choose category from sidebar:</p>
						) : (
							<PostLayout posts={filteredPost} selectedTag={setSelectedTag} />
							// <PostLayout
							// 	tag={selectedTag}
							// 	allPosts={allPosts}
							// 	selectedTag={setSelectedTag}
							// />
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
