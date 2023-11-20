import React from 'react';
import './BooksList.css';

function BooksList({books}) {
	if (!Array.isArray(books) || books.length === 0) {
		return <div>検索結果が見つかりません</div>;
	}

	return (<div className="BooksList">
		<hr style={{width: "40%"}}/>
		{books.map(book => (<div key={book.id} className="BookItem">
			<div className="BookText">
				<h2>{book.name}</h2>
				<h3 style={{textAlign: "right"}}>￥{book.price}</h3>
				<ul>
					<li>著者：{book.author}</li>
					<li>出版社：{book.publisher}</li>
					<li>ISBN: {book.isbn}</li>
				</ul>
			</div>
			<hr style={{width: "40%"}}/>
		</div>))}

	</div>);
}

export default BooksList;