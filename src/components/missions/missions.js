import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getMissions from '../../redux/slices/missionsSlice';
import { toggleMission } from '../../redux/missions/missions';

const MissionComp = () => {
  const dispatch = useDispatch();

  const Mission = useSelector((state) => state.missionReducer.missions);

  useEffect(async () => {
    if (!Mission.length) {
      await dispatch(getMissions());
    }
  }, []);

  const toggleMissionEvent = (e) => {
    const missionID = e.target.parentNode.parentNode.id;
    dispatch(toggleMission(missionID));
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
            <tr key={mission.mission_id} id={mission.mission_id}>
              <td>
                {mission.mission_name}
              </td>
              <td>{mission.description}</td>

              <td className="mission-reserve">
                {
          mission.reserved
            ? <span className="active-member">Active Member</span>
            : <span className="inactive-member">NOT A MEMBER</span>
        }
              </td>
              <td className="mission-btn">
                {
          mission.reserved
            ? <button type="button" className="leave-btn" onClick={toggleMissionEvent}>Leave Mission</button>
            : <button type="button" className="join-btn" onClick={toggleMissionEvent}>Join Mission</button>
        }
              </td>
            </tr>
          ))}

        </tbody>
      </table>

    </div>
  );
};
export default MissionComp;
