const buildQuery = (endpoint, search = "", limit = 20) => {
	return `${endpoint}?search=${search}&limit=${limit}`;
};

export default buildQuery;
