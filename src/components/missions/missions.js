import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission } from '../../redux/missions/missions';

const MissionComp = () => {
  const dispatch = useDispatch();
  const Mission = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(getMissions());
  }, []);

  const joinMissionEvent = () => {
    dispatch(joinMission());
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Mission.map((mission) => (
            <tr key={mission.missionId}>
              <td>
                {mission.missionName}
              </td>
              <td>{mission.missionDescription}</td>

              <td>
                {mission.reserved
                  ? <button type="button" onClick={joinMissionEvent}>Leave Mission</button>
                  : <button type="button" onClick={joinMissionEvent}>Join Mission</button>}
              </td>
              <td>
                {mission.reserved
                  ? <button type="button">Active member</button>
                  : <p type="button">Not a member</p>}
              </td>
            </tr>
          ))}

        </tbody>
      </table>

    </div>
  );
};
export default MissionComp;
