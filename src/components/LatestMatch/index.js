// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchData} = props
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
  } = matchData
  console.log(matchData)
  return (
    <div className="latest-match-bg-container">
      <h1 className="head">Latest Matches</h1>
      <div className="latest-match-card-container">
        <div className="latest-match-team-container">
          <div className="latest-match-competing-team">
            <h1 className="competing-team-head">{competingTeam}</h1>
            <p className="latest-match-date">{date}</p>
            <p className="latest-match-venue">{venue}</p>
            <p className="latest-match-result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="competing-team-logo"
            alt={competingTeam}
          />
        </div>
        <hr className="h-line" />
        <div className="latest-match-highlites">
          <div>
            <p className="match-head">First Innings</p>
            <p className="match-des">{firstInnings}</p>
          </div>
          <div>
            <p className="match-head">Second Innings</p>
            <p className="match-des">{secondInnings}</p>
          </div>
          <div>
            <p className="match-head">Man Of The Match</p>
            <p className="match-des">{manOfTheMatch}</p>
          </div>
          <div>
            <p className="match-head">Umpires</p>
            <p className="match-des">{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
