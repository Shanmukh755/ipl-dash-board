// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachMatchCard} = props
  const {
    id,
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = eachMatchCard
  console.log(result)
  const classname = matchStatus === 'Won' ? 'won-color' : 'loss-color'
  return (
    <li className="match-card-bg-container">
      <img
        src={competingTeamLogo}
        className="recent-match-image"
        alt={competingTeam}
      />
      <h1 className="recent-match-head">{competingTeam}</h1>
      <p className="recent-match-result">{result}</p>
      <p className={classname}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
