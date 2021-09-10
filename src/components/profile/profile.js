import React from 'react';
import { useSelector } from 'react-redux';
// import MissionsProfile from '../missions/missionsProfile';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.missionReducer.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="profile-container">
      <div className="missions-column">
        <h2>My Missions</h2>
        <ul>
          {reservedMissions.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      </div>
      <div className="rockets-column">
        <h2>My Rockets</h2>
        <div className="reserved-column">
          {
            reservedRockets.map((rocket) => (
              <div key={rocket.id} className="reserved-item">{rocket.rocket_name}</div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Profile;
