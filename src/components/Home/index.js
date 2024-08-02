// Write your code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'
import { useState } from 'react'
import { useEffect } from 'react'

const Home = () => {
  const [iplTeamList, setIplTeamList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch('https://apis.ccbp.in/ipl')
        const data = await response.json()
        console.log(data)
        if (response.ok===true){
          const updatedData = data.teams.map(each => ({
            id: each.id,
            name: each.name,
            teamImageUrl: each.team_image_url
          }))
          setIplTeamList(updatedData)
          setIsLoading(false)
        } else {
          setIsLoading(true)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  
  const renderLoader = () => {
    return (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    )
  }
  const renderTeamCard = iplTeamList => {
    return (
      <ul className="ipl-team-list-container">
        {iplTeamList.map(eachTeam => (
          <TeamCard eachTeamData={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }
    return (
      <div className="home-bg-container">
        <div className="home-head-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
            alt="ipl-logo"
          />
          <h1 className="ipl-home-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? renderLoader() : renderTeamCard(iplTeamList)}
      </div>
    )
}
export default Home
