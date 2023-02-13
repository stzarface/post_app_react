import React from "react";

function Post({post, selectedTag}) {

    const renderTags = () => post.tags.map((tag, index) => {
        return <button key={index} className="btn btn-sm btn-warning me-2 mt-2" onClick={() => selectedTag(tag)}>{tag}</button>
    })

	return (
		<div className="col-4">
			<div className="card">
				<div className="card-header">
                    <h4>{post.title}</h4>
                </div>
				<div className="card-body">
                    <p>{post.body}</p>
                </div>
				<div className="card-footer">
                    {renderTags()}
                </div>
			</div>
		</div>
	);
}

export default Post;
