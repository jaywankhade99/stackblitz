import React, { useState, useEffect } from 'react';
import './style.css';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import Add from './Add';
import 'primereact/resources/primereact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeflex/primeflex.css';

export function App() {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(true);

  const [first, setFirst] = useState([0, 0, 0]);
  const [second, setSecond] = useState([0, 0, 0]);
  const [third, setThird] = useState([0, 0, 0]);
  const [winner, setWinner] = useState('');
  const [match, setMatch] = useState('');
  const [counter, setCounter] = useState(0);

  const [start, setStart] = useState(false);

  const onHandleAClick = (id) => {
    if (start) {
      if (one) {
        first.splice(id, 1, 'O');
        setOne(!one);
        setTwo(true);
      }
      if (two) {
        first.splice(id, 1, 'X');
        setTwo(!two);
        setOne(true);
      }
    }
    setCounter(counter + 1);
  };
  const onHandleBClick = (id) => {
    if (start) {
      if (one) {
        second.splice(id, 1, 'O');
        setOne(!one);
        setTwo(true);
      }
      if (two) {
        second.splice(id, 1, 'X');
        setTwo(!two);
        setOne(true);
      }
    }
    setCounter(counter + 1);
  };
  const onHandleCClick = (id) => {
    if (start) {
      if (one) {
        third.splice(id, 1, 'O');
        setOne(!one);
        setTwo(true);
      }
      if (two) {
        third.splice(id, 1, 'X');
        setTwo(!two);
        setOne(true);
      }
    }
    setCounter(counter + 1);
  };
  const resetGame = () => {
    setFirst([0, 0, 0]);
    setSecond([0, 0, 0]);
    setThird([0, 0, 0]);
    setWinner('');
    setCounter(0);
  };
  const startGame = () => {
    setStart(true);
  };
  const pauseGame = () => {
    setStart(false);
  };
  useEffect(() => {
    ((first[0] === 'X' && second[1] === 'X' && third[2] === 'X') ||
      (first[2] === 'X' && second[1] === 'X' && third[0] === 'X')) &&
      setWinner('X');
    console.log(first, second, third);
  }, [one, two]);
  useEffect(() => {
    ((first[0] === 'O' && second[1] === 'O' && third[2] === 'O') ||
      (first[2] === 'O' && second[1] === 'O' && third[0] === 'O')) &&
      setWinner('O');
    console.log(first, second, third);
  }, [one, two]);

  useEffect(() => {
    first !== [0, 0, 0] &&
      second !== [0, 0, 0] &&
      third !== [0, 0, 0] &&
      counter === 9 &&
      setMatch('It is Draw game');
  }, [one, two]);

  return (
    <div className="container">
      <div className="line">
        {first &&
          first.map((item, i) => (
            <p className="item" onClick={() => onHandleAClick(i)}>
              {item ? item : '_ '}{' '}
            </p>
          ))}
      </div>
      <div className="line">
        {second &&
          second.map((item, i) => (
            <p className="item" onClick={() => onHandleBClick(i)}>
              {item ? item : '_ '}{' '}
            </p>
          ))}
      </div>
      <div className="line">
        {third &&
          third.map((item, i) => (
            <p className="item" onClick={() => onHandleCClick(i)}>
              {item ? item : '_ '}{' '}
            </p>
          ))}
      </div>
      {winner && <h1>{winner} wins the game </h1>}
      {match && <h1>{match}</h1>}
      <button onClick={() => startGame()}>Start Game</button>
      <button onClick={() => pauseGame()}>Pause Game</button>
      <button onClick={() => resetGame()}>Reset Game</button>
    </div>
  );
}
