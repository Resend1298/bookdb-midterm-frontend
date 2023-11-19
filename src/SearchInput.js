import React, {useState} from 'react';
import './SearchInput.css';

function SearchInput({onSearch}) {
	const [searchTerm, setSearchTerm] = useState('');
	const [fields, setFields] = useState(['name']);

	const handleSearchTermChange = event => {
		setSearchTerm(event.target.value);
		onSearch(event.target.value, fields);
	};

	const handleFieldChange = event => {
		const field = event.target.value;
		const isChecked = event.target.checked;

		setFields(prevFields => {
			return isChecked ? [...prevFields, field] : prevFields.filter(f => f !== field);
		});

		onSearch(searchTerm, isChecked ? [...fields, field] : fields.filter(f => f !== field));
	};

	const searchIconPath = "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"

	return (<div className="SearchInput">
		<div className="SearchBox">
			<svg className="SearchIcon" width="24" height="24" viewBox="0 0 24 24">
				<path d={searchIconPath} fill="#666"/>
			</svg>
			<input
				className="SearchField"
				type="text"
				value={searchTerm}
				onChange={handleSearchTermChange}
			/>
		</div>
		<div>
			<label>
				<input
					type="checkbox"
					value="name"
					checked={fields.includes('name')}
					onChange={handleFieldChange}
				/>
				Name
			</label>
			<label>
				<input
					type="checkbox"
					value="author"
					checked={fields.includes('author')}
					onChange={handleFieldChange}
				/>
				Author
			</label>
			<label>
				<input
					type="checkbox"
					value="publisher"
					checked={fields.includes('publisher')}
					onChange={handleFieldChange}
				/>
				Publisher
			</label>
			<label>
				<input
					type="checkbox"
					value="isbn"
					checked={fields.includes('isbn')}
					onChange={handleFieldChange}
				/>
				ISBN
			</label>
		</div>
	</div>);
}

export default SearchInput;