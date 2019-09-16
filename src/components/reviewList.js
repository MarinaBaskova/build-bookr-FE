import React from 'react';
import Review from './review';
import { Link } from 'react-router-dom';

class ReviewList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="Review-Button">
					<Link className="Link" to={`${this.props.match.url}/reviewform`}>
						Add Review
					</Link>
				</div>
				{this.props.reviewList &&
					this.props.reviewList.map((review) => {
						return (
							<Review
								username={review.username}
								review={review}
								id={review.id}
								rating={review.rating}
								thumbnailUrl={review.thumbnailUrl}
								key={review.id}
							/>
						);
					})}

				<div />
			</div>
		);
	}
}

export default ReviewList;
