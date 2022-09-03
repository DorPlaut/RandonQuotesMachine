import React, { useState, useEffect } from 'react';
import { VscQuote, VscTwitter } from 'react-icons/vsc';

function Quote({ text, author }) {
  return (
    <>
      <div>
        <h3 id="text">
          <VscQuote className="icon" />
          {text}
        </h3>
      </div>
      <h4 id="author">-{author}</h4>
    </>
  );
}

export default Quote;
