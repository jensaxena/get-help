import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }; // constructor()
  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }; // handleChange()
  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }; // handleSubmit()
  render() {
    return (
      <div>
        <form
          action=""
          onSubmit={this.handleSubmit}
          role="search">
          <input
            id="search"
            name="q"
            onChange={this.handleChange}
            size="40"
            type="search"
            placeholder="Enter a word, receive a pearl of wisdom"
            value={this.state.searchTerm} />
          <button type="submit">Help Me</button>
        </form>
      </div>
    ); // return
  }; // render()
}; // class SearchForm
