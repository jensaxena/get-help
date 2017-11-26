import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Footer from './footer';
import SearchForm from './search-form';

class App extends React.Component {
  constructor() {
    super();
    this.state = { error: '', header: '', search: '' };
    this.doSearch = this.doSearch.bind(this);
  } // constructor()
  componentDidMount() {
    const header = 'You need help.';
    this.setState({ header });
  }
  doSearch(word) {
    if (`${word}` < 1) {
      const error = 'Help only comes to those who ask!'
      this.setState({ error, search: '' });
    } // if()

    else {
      this.setState({ error: '', search: '' });
      const apiURL = `http://api.adviceslip.com/advice/search/${word}`;

      axios.get(`${apiURL}`).then((res)=> {
        const responseData = res.data;

        if ('slips' in responseData) {
          const searchResults = res.data.slips;
          let rando = Math.floor(Math.random()*searchResults.length);
          const goodAdvice = searchResults[rando].advice;
          const goodHeader = 'Good Idea.';
          this.setState({ search: goodAdvice });
          this.setState({ header: goodHeader });
        } // if ()

        else if ('message' in responseData) {
          const ideaList = [
            {
              id: "i001",
              value: "Tarantulas make great pets."
            },
            {
              id: "i002",
              value: "Smile. It makes people wonder what you're up to."
            },
            {
              id: "i003",
              value: "Just eat that, I'm sure it's fine."
            },
            {
              id: "i004",
              value: "Buying a motorcycle will make you feel young again."
            },
            {
              id: "i005",
              value: "Never look back. Never. NEVER."
            },
            {
              id: "i006",
              value: "Success is a journey. A long, slow, arduous... you know what, let's just stay home and watch T.V."
            },
            {
              id: "i007",
              value: "Revenge is sweet, so be sure to brush your teeth after every meal."
            },
            {
              id: "i008",
              value: "Never pay full retail price. I know a guy who'll meet us in the back lot. Wear something black."
            },
            {
              id: "i009",
              value: "You can totally have oatmeal cookies for breakfast, it's oatmeal, that's definitely healthy."
            },
            {
              id: "i010",
              value: "Don't feed the trolls. Dazzle them with your superior intellectual reasoning."
            },
            {
              id: "i011",
              value: "Salon cuts are a rip-off, you should trim your own hair."
            },
            {
              id: "i012",
              value: "Try everything at least twice. Just to be sure."
            },
            {
              id: "i013",
              value: "Getting arrested in a foreign country doesn't even count, and your government has to fly you home for free. It's the law."
            },
            {
              id: "i014",
              value: "You should go pet it, I'm sure it's friendly."
            },
            {
              id: "i015",
              value: "Just walk it off."
            }
          ]; // const ideaList

          let i = 0;
          while (i < ideaList.length) {
            let badAdvice = '';
            const badHeader = 'Bad Idea.';
            if (ideaList[i].value.toLowerCase().includes(`${word}`) === false) {
              let rando = Math.floor(Math.random()*ideaList.length);
              badAdvice = ideaList[rando].value;
            } // if ()

            else { badAdvice = ideaList[i].value };
            i++;
            this.setState({ search: badAdvice });
            this.setState({ header: badHeader });
          }; // while ()
        }; // else if ()
      }); // axios.get
    }; // else()
  }; // doSearch()
  render() {
    return (
      <div className="wrapper">
        <h1>{this.state.header}</h1>
        <SearchForm submitForm={this.doSearch}/>
        <div className="result">
          <p>{this.state.error}</p>
          <p className="idea">{this.state.search}</p>
        </div> {/* result */}
        <Footer />
      </div> // .wrapper
    ); // return
  }; // render()
}; // class App

ReactDOM.render(<App />, document.getElementById('app'));
