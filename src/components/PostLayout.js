// import { render } from "@testing-library/react";
import React from "react";
import Post from "./Post";

function PostLayout({ tag, allPosts, selectedTag }) {
	// const renderPost = () => posts.map((post, index) => {
	//     return <Post selectedTag={selectedTag} key={index} post={post}/>
	// });

	const renderPost = () =>
		allPosts.map((post, index) => {
			if (post.tags.includes(tag)) {
				return <Post selectedTag={selectedTag} key={index} post={post} />;
			}
		});

	return <div className="row">{renderPost()}</div>;
}

export default PostLayout;
