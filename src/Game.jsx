import {useState} from 'react'
import CardList from './CardList.jsx';
import Score from './Score.jsx';

export default function MemoryCards() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  return (
    <>
      <Score score={score} highscore={highscore} setHighscore={setHighscore} />
      <CardList score={score} setScore={setScore} />
    </>
  )
}