import React, {useState, useEffect} from 'react';
import SearchInput from './SearchInput';
import BooksList from './BooksList';
import './App.css';

function App() {
	const [books, setBooks] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchFields, setSearchFields] = useState([]);

	useEffect(() => {
		const queryParams = new URLSearchParams({
			search_string: searchTerm, fields: searchFields.join()
		});

		// fetch(`http://127.0.0.1:8000/query_books?${queryParams}`)
		fetch(`/api/query_books?${queryParams}`)
			.then(response => response.json())
			.then(data => {
				if (Array.isArray(data)) {
					setBooks(data);
				} else {
					console.error("Received data is not an array:", data);
					setBooks([]);
				}
			})
			.catch(error => {
				console.error("Error fetching data: ", error);
				setBooks([]);
			});
	}, [searchTerm, searchFields]);

	const handleSearch = (term, fields) => {
		setSearchTerm(term);
		setSearchFields(fields);
	};

	return (<div className="App">
		<header className="App-header">
			<img src="/logo.png" alt="logo"/>
		</header>
		<SearchInput onSearch={handleSearch}/>
		<BooksList books={books}/>
	</div>);
}

export default App;