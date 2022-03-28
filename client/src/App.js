import "./App.css";
import React from "react";
import AddAuthor from "./components/AddAuthor";
import AuthorDisplayAll from "./components/AuthorDisplayAll";
import EditAuthor from "./components/EditAuthor";
import Error from "./components/Error";
import Main from "./views/Main";
import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	useParams,
} from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route element={<AddAuthor />} path="/addAuthor" />
					<Route element={<Main />} path="/" />
					<Route element={<EditAuthor />} path="/editauthor/:id" />
					<Route element={<Error />} path="/error" />
					{/* <AuthorDisplayAll /> */}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
