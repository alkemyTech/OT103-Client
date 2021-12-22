import { useEffect, useState } from "react";
import { Get } from "../../Services/privateApiService";

const SearchBar = ({ setSerachResult }) => {
	const [searchQuery, setSearchQuery] = useState("");

	const submitSearch = async () => {
		let response;
		if (searchQuery.length > 1) {
			response = await Get(
				`${process.env.REACT_APP_API_MEMBERS}?search=${searchQuery}`
			);
		} else {
			response = await Get(process.env.REACT_APP_API_MEMBERS);
		}

		if (response.success) {
			setSerachResult(response.data);
		}
	};

	useEffect(() => {
		submitSearch();
	}, [searchQuery]);
	return (
		<div>
			<input
				value={searchQuery}
				onChange={(e) => {
					setSearchQuery(e.currentTarget.value);
				}}
				placeholder="Buscar..."
			/>
		</div>
	);
};

export default SearchBar;
