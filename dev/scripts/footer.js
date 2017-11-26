import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component {
  render() {
    return(
      <footer>
        <div>
          <a href="https://codepen.io/jensaxena/">
            <i className="fa fa-codepen fa-fw" aria-hidden="true"></i>
          </a>
          <a href="mailto:jen@jensaxena.com">
            <i className="fa fa-envelope-o fa-fw" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/jensaxena">
            <i className="fa fa-github fa-fw" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/jensaxena/">
            <i className="fa fa-instagram fa-fw" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/jensaxena/">
            <i className="fa fa-linkedin fa-fw" aria-hidden="true"></i>
          </a>
          <a href="https://medium.com/@jensaxena/">
            <i className="fa fa-medium fa-fw" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/jensaxena">
            <i className="fa fa-twitter fa-fw" aria-hidden="true"></i>
          </a>
        </div>
        <div>
          <a href="http://www.jensaxena.com">
            &copy; 2017 Jen Saxena
          </a>
          <a href="http://api.adviceslip.com/">
            Good Advice courtesy of the Advice Slip JSON API
          </a>
        </div>
        <p>
          For entertainment purposes only: any resemblance to actual events is entirely coincidental, and extremely strange.
        </p>
      </footer>
    ); // return ();
  }; // render()
}; // class Footer
