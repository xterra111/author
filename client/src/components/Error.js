import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Error = (props) => {
	return (
		<div>
			<p>
				The Author you were trying to view/review is not in the system. Would
				you like to add the Author?
			</p>
			<Link to={"/addAuthor"}> Add A New Author </Link>
			<br />
			<p>Click on the link below to view all of the Authors</p>

			<Link to={"/"}> Home </Link>
		</div>
	);
};

export default Error;
