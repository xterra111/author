import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate, useNavigate } from "react-router-dom";

const AddAuthor = (props) => {
	const [authorname, setAuthorname] = useState("");
	const [error, setError] = useState("{}");
	const [listAllAuthors, setListAllAuthors] = useState([]);
	const navigate = useNavigate();

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
		<div className="grid">
			<div className="grid grid-cols-2 mt-15 ml-36 ">
				<div className="text-left">
					<h1>Favorite authors</h1>
					<br />
					<Link to={"/"}>Home</Link>
					<br />
					<p>Add a new author:</p>
				</div>
			</div>
			<div>
				<div className=" w-1/2 shadow mt-2 grid ml-36 grid-cols-1 ">
					<form onSubmit={onCreateHandler}>
						<div className="grid grid-cols-2  ml-10">
							<div className="grid items-start  text-left">
								<div className="grid text-left">
									<label className="text-s font-semibold inline-block py-5 px-10 pl-0  rounded text-lightBlue-600 bg-lightBlue-200  last:mr-0 mr-1">
										Name:
									</label>
									<input
										className="px-2 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-blue.500 rounded text-sm border border-solid border-grey-800 shadow outline-none focus:outline-none focus:ring w-60"
										type="text"
										value={authorname}
										onChange={(e) => setAuthorname(e.target.value)}
									/>
								</div>
							</div>
						</div>
						<button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 m-2 ml-10 hover:border-transparent rounded">
							Submit
						</button>
						<button
							className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 m-2 hover:border-transparent rounded ml-16"
							onClick={(e) => navigate("/")}>
							Cancel
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddAuthor;
