import React from 'react';
import { connect } from 'react-redux';
import { getBookPage, updateBook } from '../actions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class updateButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			updateBook: {
				title: '',
				user_id: localStorage.getItem('userID'),
				author: '',
				price: '',
				publisher: '',
				description: '',
				imageUrl: ''
			}
		};
	}
	componentDidUpdate(prevProps) {
		if (prevProps.isfetching && !this.props.isfetching && !this.props.error) {
			this.setState({
				...this.state,
				updateBook: {
					...this.state.updateBook,
					title: this.props.book.title,

					author: this.props.book.author,
					price: this.props.book.price,
					publisher: this.props.book.publisher,
					description: this.props.book.description,
					imageUrl: this.props.book.imageUrl
				}
			});
		}
	}

	updateBook = () => {
		this.props.updateBook(this.props.book.id, this.state.updateBook);
		this.handleClose();
	};
	handleTextFieldChange = (e) => {
		this.setState({
			updateBook: {
				...this.state.updateBook,
				[e.target.name]: e.target.value
			}
		});
	};

	handleClickOpen = () => {
		this.setState({
			open: true
		});
	};

	handleClose = () => {
		this.setState({ open: false });
	};
	render() {
		return (
			<div>
				<Button className="Modal-Btn" variant="outlined" color="primary" onClick={this.handleClickOpen}>
					Update Book
				</Button>
				<Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Update</DialogTitle>
					<DialogContent>
						<DialogContentText>Did we get something wrong? Update the information!</DialogContentText>

						{/* inputs */}
						<TextField
							autoFocus
							margin="dense"
							value={this.state.updateBook.title}
							id={JSON.stringify(this.props.book.id)}
							name="title"
							label="Title"
							type="text"
							fullWidth
							onChange={this.handleTextFieldChange}
						/>
						<TextField
							autoFocus
							margin="dense"
							id={JSON.stringify(this.props.book.id)}
							value={this.state.updateBook.author}
							label="Author"
							type="text"
							fullWidth
							name="author"
							onChange={this.handleTextFieldChange}
						/>

						<TextField
							autoFocus
							margin="dense"
							id={JSON.stringify(this.props.book.id)}
							value={this.state.updateBook.price}
							label="Price"
							type="text"
							name="price"
							fullWidth
							onChange={this.handleTextFieldChange}
						/>
						<TextField
							autoFocus
							margin="dense"
							id={JSON.stringify(this.props.book.id)}
							value={this.state.updateBook.publisher}
							label="Publisher"
							name="publisher"
							type="text"
							fullWidth
							onChange={this.handleTextFieldChange}
						/>
						<TextField
							autoFocus
							margin="dense"
							id={JSON.stringify(this.props.book.id)}
							value={this.state.updateBook.description}
							label="Description"
							name="description"
							type="text"
							fullWidth
							onChange={this.handleTextFieldChange}
						/>
						<TextField
							autoFocus
							margin="dense"
							id={JSON.stringify(this.props.book.id)}
							value={this.state.updateBook.imageUrl}
							label="Image URL"
							name="imageUrl"
							type="text"
							fullWidth
							onChange={this.handleTextFieldChange}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={this.updateBook} color="primary">
							Update
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}
const mapStateToProps = ({ book, isfetching, error }) => ({
	book,
	isfetching,
	error
});
export default connect(mapStateToProps, { getBookPage, updateBook })(updateButton);
