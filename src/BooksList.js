import React from 'react';
import './BooksList.css';

function BooksList({books}) {
	if (!Array.isArray(books) || books.length === 0) {
		return <div>No books found</div>;
	}

	return (<div className="BooksList">
		{books.map(book => (<div key={book.id} className="BookItem">
			<h2>{book.name}</h2>
			<p>{book.author}，{book.publisher}，￥{book.price}，{book.isbn}</p>
		</div>))}
	</div>);
}

export default BooksList;