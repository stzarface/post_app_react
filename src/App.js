import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import API from "./services/API";

function App() {
	// Cim se ucita aplikacija - komponenta App.js (kaze se i mauntuje) trevbaju nam podaci
	// Prvi put se pokrece svakako, a ako imamo nesto na mestu uglastih zagrada ucitava se kad god se to promeni

	const [allTags, setAllTags] = useState([]);

  

	useEffect(() => {
		API.getAllTags().then((data) => {
			// console.log(data);

			setAllTags(data);
		});
	}, []);

	return (
		<>
			<header className="container-fluid py-5 bg-dark bg-opacity-10 text-center">
				<h1>Blog Post App</h1>
			</header>

			<div className="container">
				<div className="row">
					<div className="col-2">{allTags.length > 0 && <Sidebar tags={allTags} />}</div>
					<div className="col-10"></div>
				</div>
			</div>
		</>
	);
}

export default App;


