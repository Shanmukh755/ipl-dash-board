import React, { useState, useEffect } from 'react';
import MatchCard from '../MatchCard';
import LatestMatch from '../LatestMatch';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './index.css';
import { useParams } from 'react-router-dom';

const TeamMatches = () => {
  const [eachTeamAllResults, setEachTeamAllResults] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams(); // Using useParams to get the route parameter

  useEffect(() => {
    const getEachTeamAllResults = async () => {
      try {
        const response = await fetch(`https://apis.ccbp.in/ipl/${id}`);
        const data = await response.json();
        
        const updatedMatchData = {
          teamBannerUrl: data.team_banner_url,
          latestMatchDetails: {
            id: data.latest_match_details.id,
            competingTeam: data.latest_match_details.competing_team,
            competingTeamLogo: data.latest_match_details.competing_team_logo,
            date: data.latest_match_details.date,
            firstInnings: data.latest_match_details.first_innings,
            manOfTheMatch: data.latest_match_details.man_of_the_match,
            matchStatus: data.latest_match_details.match_status,
            result: data.latest_match_details.result,
            secondInnings: data.latest_match_details.second_innings,
            umpires: data.latest_match_details.umpires,
            venue: data.latest_match_details.venue,
          },
          recentMatches: data.recent_matches.map(eachMatch => ({
            id: eachMatch.id,
            competingTeam: eachMatch.competing_team,
            competingTeamLogo: eachMatch.competing_team_logo,
            date: eachMatch.date,
            firstInnings: eachMatch.first_innings,
            manOfTheMatch: eachMatch.man_of_the_match,
            matchStatus: eachMatch.match_status,
            result: eachMatch.result,
            secondInnings: eachMatch.second_innings,
            umpires: eachMatch.umpires,
            venue: eachMatch.venue,
          })),
        };
        setEachTeamAllResults(updatedMatchData);
      } catch (error) {
        console.error("Error fetching team matches:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getEachTeamAllResults();
  }, [id]); // Dependency array includes id to refetch data if id changes

  const renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  );

  const renderTeamMatches = () => {
    const { teamBannerUrl, latestMatchDetails, recentMatches } = eachTeamAllResults;

    return (
      <div className="team-matches-container">
        <img src={teamBannerUrl} className="team-banner" alt="team banner" />
        <LatestMatch matchData={latestMatchDetails} />
        <ul className="team-matches-cards-container">
          {recentMatches.map(eachMatch => (
            <MatchCard eachMatchCard={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={`team-matches-bg-container ${id}`}>
      {isLoading ? renderLoader() : renderTeamMatches()}
    </div>
  );
};

export default TeamMatches;
