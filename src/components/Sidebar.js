import React from "react";

function Sidebar({ tags, selectedTag }) {
	const renderTags = () =>
		tags.map((tag, index) => {
			return (
				<li key={index} className="list-group-item">
					<button className="btn btn-info w-100" onClick={() => selectedTag(tag)}>{tag}</button>
				</li>
			);
		});

	return (
        <ul className="list-group list-group-flush">
            {renderTags()}
        </ul>
    )
}




export default Sidebar;