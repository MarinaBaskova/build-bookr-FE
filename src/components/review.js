import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Review = (props) => {
	return (
		<div className="Review">
			{/* <h3 className="Review-Title">Review:</h3> */}
			<div />
			<StarRatingComponent
				className="Star-Rating"
				name="Rating"
				starCount={5}
				editing={false}
				value={props.rating}
			/>
			<div className="ReviewTop">
				<div className="UserName">
					<h4>{props.username}</h4>
				</div>
				<div className="UserAvatar">
					<img className="Review-Image" src={props.thumbnailUrl} alt="useravatar" />
				</div>
			</div>

			<div className="Review-Text">
				<p>{props.review.review}</p>
			</div>
		</div>
	);
};

export default Review;
