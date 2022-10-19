import { useState, useEffect } from 'react';
import { VscQuote } from 'react-icons/vsc';
import reactLogo from './assets/react.svg';
import './App.css';
// components
import QuoteBox from './components/QuoteBox';
import Quote from './components/Quote';
import Nav from './components/Nav';
import Background from './components/Background';
// three fiber
import { OrbitControls, Stars, ArcballControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

let threeDcolor;

function App() {
  // fatch data
  const url = 'https://space-quotes-api.onrender.com/api/V1/quotes/random';
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [number, setNumber] = useState(5);

  // const getRandomNum = () => {
  //   let randomNum = Math.floor(Math.random() * (1643 - 1 + 1) + 1);
  //   setNumber(randomNum);
  // };

  const changeColors = () => {
    const colors = [
      '#7c0000d9',
      '#007c00d9',
      '#02007cd9',
      '#7c005dd9',
      '#007c67d9',
      '#7c4a00d9',
      '#7c001bd9',
    ];
    let randomNum = Math.floor(Math.random() * (8 - 1 + 1));
    const Box = document.querySelector('.QuoteBox');
    const btn = document.querySelector('.btn');

    Box.style.backgroundColor = colors[randomNum];
    btn.style.color = colors[randomNum];
    threeDcolor = colors[randomNum];
  };

  const getQuotes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const quotes = await response.json();
      setQuotes(quotes);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log('eRROR');
    }
  };

  useEffect(() => {
    getQuotes();
  }, []);

  // render page

  if (isError) {
    return (
      <>
        <Background />
        <section>
          <h3>error</h3>
        </section>
      </>
    );
  }
  return (
    <>
      <Background changeColors={changeColors} />
      <section>
        <div className="logo">
          <h1>RANDOM QUOTES MACHINE</h1>
        </div>
        <div className="QuoteBox">
          <div id="quote-box" className="container">
            {/* loading */}
            {isLoading ? (
              <>
                <h1>Loading...</h1>
                <br />
                <br />
                <br />
              </>
            ) : (
              <>
                <Quote text={quotes.quote} author={quotes.author}></Quote>
              </>
            )}
            {isLoading ? (
              <>
                <Nav></Nav>
              </>
            ) : (
              <>
                <Nav
                  text={quotes.quote}
                  author={quotes.author}
                  getQuotes={getQuotes}
                  changeColors={changeColors}
                ></Nav>
              </>
            )}
          </div>
        </div>
        <div className="footer">
          <p>
            build by{' '}
            <a href="https://dor-plaut-home-page.netlify.app/" target="blank">
              Dor Plaut
            </a>
            {' - '}
            <a href="https://space-quotes-api.onrender.com/" target="blank">
              Chack out my free Space quotes API
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
