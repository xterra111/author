import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate, useNavigate } from "react-router-dom";

const AddAuthor = (props) => {
	const [authorname, setAuthorname] = useState("");
	const [error, setError] = useState("{}");
	const [listAllAuthors, setListAllAuthors] = useState([]);

	const onCreateHandler = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8000/api/authors", {
				authorname,
			})
			.then((res) => {
				setListAllAuthors([...listAllAuthors, res.data]);
				setAuthorname("");
			})
			.catch((err) => {
				console.log(err);
				setError(err.response.data);
			});
	};

	return (
		<div>
			<div>
				<h1>Favorite authors</h1>
				<p> add a link here </p>
				<p>Add a new author</p>
			</div>
			<div>
				<div>
					<form onSubmit={onCreateHandler}>
						<div>
							<label>Name:</label>
							<input
								type="text"
								value={authorname}
								onChange={(e) => setAuthorname(e.target.value)}
							/>
						</div>
						<button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 m-2 hover:border-transparent rounded">
							Add Author
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddAuthor;
