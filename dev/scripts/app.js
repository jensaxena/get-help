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
            },
            {
              id: "i016",
              value: "Tell your teacher that the dog ate it."
            },
            {
              id: "i017",
              value: "Giving up is easy. Never starting is even easier."
            },
            {
              id: "i018",
              value: "Honesty is a virtue, so tell everyone what you really think of them."
            },
            {
              id: "i019",
              value: "Studying is a waste of time, you'll never use any of that stuff in the real world."
            },
            {
              id: "i020",
              value: "You have to bite the dog back to show dominance."
            },
            {
              id: "i021",
              value: "One more shot of tequila couldn't hurt."
            },
            {
              id: "i022",
              value: "There are no stupid questions, only stupid people."
            },
            {
              id: "i023",
              value: "Live like you might die tomorrow. Because you might. You could die. Tomorrow. Seriously."
            },
            {
              id: "i024",
              value: "Animals have better instincts than people. So, just don't eat anything the dog wouldn't."
            },
            {
              id: "i025",
              value: "If you often find yourself running late for important events, just stop making plans in the first place."
            },
            {
              id: "i026",
              value: "Just be yourself. If that doesn't work, you might be fundamentally unlikeable."
            },
            {
              id: "i027",
              value: "Death is the last great adventure. Start making preparations now, you wouldn't want to get left behind."
            },
            {
              id: "i028",
              value: "If you're going to lie to somebody, be sure to throw in a lot of unnecessary details to make your story more believable."
            },
            {
              id: "i029",
              value: "All cats love to have their bellies rubbed."
            },
            {
              id: "i030",
              value: "Wishing for a relaxing beach vacation? Try putting some sand in the bathtub."
            },
          ]; // const ideaList

          const badHeader = 'Bad Idea.';
          const badChoices = [];
          let badAdvice = '';

          let i = 0;
          while (i < ideaList.length) {
            if (ideaList[i].value.toLowerCase().includes(`${word}`) === true) {
              badChoices.push(ideaList[i].value);
            } // if()
            i++;
          }; // while ()

          if (badChoices.length !== 0) {
            let rando = Math.floor(Math.random()*badChoices.length);
            let badAdvice = badChoices[rando];
            this.setState({ search: badAdvice });
          } // if()
          else {
            let badAdvice = 'Sorry, we\'ve got nothing. Try being a little less weird next time, maybe.';
            this.setState({ search: badAdvice });
          } // else()

          this.setState({ header: badHeader });

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
