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
    this.doSearch = this.doSearch.bind(this);
  }
  doSearch(word) {
    const apiURL = `http://api.adviceslip.com/advice/search/${word}`;

    axios.get(`${apiURL}`).then((res)=> {

      const responseData = res.data;

      if ('slips' in responseData) {
        const searchResult = res.data.slips;
        let i = 0;
        while (i < searchResult) {
          Math.floor(Math.random()*searchResult.length);
          i++;
        }

        const advice = searchResult[i].advice;

        this.setState({
          search: advice
        })
      } else if ('message' in responseData) {
        console.log('there');
        const dbRef = firebase.database().ref();
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Good Idea | Bad Idea</h1>
        <SearchForm submitForm={this.doSearch}/>
        <p>{this.state.search}</p>
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
            placeholder="Enter a word, receive a pearl of wisdom"
            value={this.state.searchTerm} />
          <button type="submit">Help Me</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
