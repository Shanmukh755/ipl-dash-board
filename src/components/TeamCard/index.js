// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {eachTeamData} = this.props
    const {id, name, teamImageUrl} = eachTeamData
    return (
      <Link to={`/team-matches/${id}`} className="nav-link">
        <li className="team-card-bg-container">
          <img src={teamImageUrl} className="team-image" alt={`${name}`} />
          <h1 className="team-card-title">{name}</h1>
        </li>
      </Link>
    )
  }
}

export default TeamCard
