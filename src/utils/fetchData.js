
export const execrisesOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '87d2b3a494msh3013637e25b4b19p1be058jsn817dbeb5d748',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}