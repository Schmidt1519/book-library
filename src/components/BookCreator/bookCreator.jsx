import React, { Component } from 'react';

class BookCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log("beginning handle change")
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log("end of handle change")
    }

    handleSubmit(event) {
        console.log(this.state.title);
        console.log(this.state.author);
        event.preventDefault();
        const book = {
            title: this.state.title,
            author: this.state.author
        }
        this.props.addNewBook(book);
        this.setState({
            title: '',
            author: ''
        });
        console.log(this.state.title);
        console.log(this.state.author);
    }

    render () {
        return (
            <div>
                <hr />
                <center>
                    <h3>Add a new book!</h3>
                </center>
                <form onSubmit={this.handleSubmit}>
                    <div className='row col-align'>
                        <div className='col-md-4'>
                            <label>Title:</label>
                            <input type='text' name='title' value={this.state.title}
                            onChange={this.handleChange} />
                        </div>
                        <div className='col-md-4'>
                            <label>Author:</label>
                            <input type='text' name='author' value={this.state.author}
                            onChange={this.handleChange} />
                        </div>
                        <div className='col-md-4'>
                            <input type='submit' value='Add' />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default BookCreator;
