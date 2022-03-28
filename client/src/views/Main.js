import React, { useState } from "react";
import AuthorDisplayAll from "../components/AuthorDisplayAll";

const Main = (props) => {
	const [listAllAuthors, setListAllAuthors] = useState([]);

	const removeFromDom = (listAllid) => {
		setListAllAuthors(
			listAllAuthors.filter((listAll) => listAll._id !== listAllid)
		);
	};
	return (
		<div>
			<AuthorDisplayAll
				listAllAuthors={listAllAuthors}
				setListAllAuthors={setListAllAuthors}
				removeFromDom={removeFromDom}
			/>
		</div>
	);
};

export default Main;
