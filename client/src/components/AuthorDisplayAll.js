import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const AuthorDisplayAll = (props) => {
	const [authors, setAuthors] = useState([]);
	const { removeFromDom, listAllAuthors, setListAllAuthors } = props;
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/allauthors")
			.then((res) => {
				console.log(res.data);
				setListAllAuthors(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div className="grid ">
			<div className="grid grid-cols-2 mt-15 ml-36 ">
				<div className="text-left ">
					<h1>Favorite authors</h1>
					<br />
					<Link to={"/addAuthor"}>Add an author</Link>
					<br />
					<h2>We have quotes by:</h2>
					<br />
				</div>
			</div>
			<div className="w-1/2 justify-start relative  shadow-md sm:rounded-lg">
				<table className="w-full table-auto ml-36 text-left">
					<thead
						style={{
							backgroundColor: "black",
							color: "white",
							border: "1px solid black",
						}}>
						<tr>
							<th>Author</th>
							<th>Actions Available</th>
						</tr>
					</thead>
					<tbody>
						{listAllAuthors
							? listAllAuthors.map((listAll, index) => (
									<tr key={index} value={listAll}>
										<td>
											<p>{listAll.authorname}</p>
										</td>
										<td>
											<Link to={"/editauthor/" + listAll._id}>
												<button className="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
													Edit
												</button>{" "}
											</Link>

											<DeleteButton
												listAllID={listAll._id}
												authorName={listAll.authorName}
												//successCallBack={() => navigate("/")}
												successCallBack={() => removeFromDom(listAll._id)}
											/>
										</td>
									</tr>
							  ))
							: null}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AuthorDisplayAll;
