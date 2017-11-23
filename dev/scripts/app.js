import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBH7jfs364BmloMPsEsgdoSDPMe3H2bJZU",
  authDomain: "idea-b0dd9.firebaseapp.com",
  databaseURL: "https://idea-b0dd9.firebaseio.com",
  projectId: "idea-b0dd9",
  storageBucket: "idea-b0dd9.appspot.com",
  messagingSenderId: "46061894444"
};
firebase.initializeApp(config);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
    this.passSearch = this.passSearch.bind(this);
  }
  passSearch(word) {
    const search = word;
    this.setState({
      search
    })
  }
  render() {
    return (
      <div>
        <h1>Good Idea | Bad Idea</h1>
        <SearchForm submitForm={this.passSearch}/>
        <APIcall />
      </div>
    )
  }
}

class APIcall extends React.Component {
  constructor() {
    super();
    this.state = {
      goodAdvice: ''
    }
  }
  componentDidMount() {

    // returns random slip
    // add /search/{query} for search
    const apiURL = `http://api.adviceslip.com/advice`;

    axios.get(`${apiURL}`).then((res)=> {
      const goodAdvice = res.data.slip.advice;

      this.setState({
        goodAdvice
      })
    })
  }
  render() {
    return (
      <div>
        <p>
          {this.state.goodAdvice}
        </p>
      </div>
    )
  }
}

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();

    this.props.submitForm(this.state.searchTerm);

    this.setState({
      searchTerm: ''
    })
  }
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
            placeholder="State your problem in one word or less"
            value={this.state.searchTerm} />
          <button type="submit">Help Me</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
