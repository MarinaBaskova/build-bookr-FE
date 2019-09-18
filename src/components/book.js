import React from 'react';

const Book = (props) => {
	return (
		<div className="Books">
			<h3 className="BookTitleList">{props.name}</h3>
			<div className="Book-Top">
				<div className="BookImage">
					<img className="CoverImage" src={props.imageUrl} alt="Book Cover" />
				</div>
			</div>
			<div className="BookInfoWrapper">
				<ul className="BookInfo">
					<li>Author: {props.author}</li>
					<li>Price: $ {props.price}</li>
					<li>Publisher: {props.publisher}</li>
					{/* <li>Synopsis: {props.description}</li> */}
				</ul>
			</div>
		</div>
	);
};

export default Book;
