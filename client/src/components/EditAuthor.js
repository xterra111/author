import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditAuthor = () => {
	const [authorname, setAuthorName] = useState([]);
	const [error, setError] = useState({});
	const { id } = useParams();

	const navigate = useNavigate();

	const onUpdateHandler = (e) => {
		e.preventDefault();
		axios
			.put(`http://localhost:8000/api/editauthor/${id}`, {
				authorname,
			})
			.then((res) => {
				console.log(res.data);
				//setListAllPets([...listAllPets, res.data]);
				navigate("/");
			})
			.catch((err) => {
				console.log(err);
				setError(err.response.data.errors);
			});
	};

	//Get the current value of the id being referenced
	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/oneauthor/${id}`)
			.then((res) => {
				console.log(res.data);
				setAuthorName(res.data.authorname);
			})
			.catch((err) => {
				console.log(err);
				//If Error Display the Error Page
				navigate("/error");
			});
	}, [id, navigate]);

	return (
		<div>
			<div>
				<h1>Favorite authors</h1>
				<p> add a link here </p>
				<p>Add a new author</p>
			</div>
			<div>
				<div>
					<form onSubmit={onUpdateHandler}>
						<div>
							<label>Name:</label>
							<input
								type="text"
								value={authorname}
								onChange={(e) => setAuthorName(e.target.value)}
							/>
							{error.authorname ? (
								<span style={{ color: "red" }}>{error.authorname.message}</span>
							) : null}
						</div>
						<button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 m-2 hover:border-transparent rounded">
							Edit Author
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditAuthor;
