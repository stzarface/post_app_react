import React from "react";

export default function Sidebar({ tags }) {
	const renderTags = () =>
		tags.map((tag, index) => {
			return (
				<li key={index} className="list-group-item">
					<button className="btn btn-info w-100">{tag}</button>
				</li>
			);
		});

	return <ul className="list-group list-group-flush">{renderTags()}</ul>;
}




