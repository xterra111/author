import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
	const { listAllID, successCallBack } = props;

	const deleteAuthor = (e) => {
		axios
			.delete(`http://localhost:8000/api/deleteauthor/${listAllID}`)
			.then((res) => {
				successCallBack();
			})
			.catch((err) => console.log(err));
	};
	return (
		<button
			className="bg-red-500 text-white hover:bg-green-500  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
			type="button"
			onClick={deleteAuthor}>
			Delete
		</button>
	);
};

export default DeleteButton;
