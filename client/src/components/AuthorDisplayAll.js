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
		<div>
			<div>
				<h1>Favorite authors</h1>
				<h1>Add an author</h1>
				<h2>We have quotes by:</h2>
			</div>
			<table>
				<thead>
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
										<Link to={"/editauthor/" + listAll._id}>Edit </Link> |
										<Link to={"/editauthor/" + listAll._id}>Delete </Link>|
										Delete
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
	);
};

export default AuthorDisplayAll;
