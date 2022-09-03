import React from 'react';
import { VscQuote, VscTwitter } from 'react-icons/vsc';

function Nav({ text, author, getQuotes, changeColors }) {
  return (
    <nav>
      <button
        id="new-quote"
        className="btn"
        onClick={() => {
          getQuotes();
          changeColors();
        }}
      >
        new quote
      </button>
      <div className="links">
        <a
          href={`https://twitter.com/intent/tweet?text="${text}" -${author}&hashtags=quotes`}
          target="blank"
          id="tweet-quote"
        >
          <VscTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
