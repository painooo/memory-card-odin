export default function Score({score, highscore, setHighscore}) {
  if (score > highscore) setHighscore(score);

  return (
    <div className="scoreBoard">
      <p className='score'>Score: {score}</p>
      <p className='highscore'>Highscore: {highscore}</p>
    </div>
  )
}