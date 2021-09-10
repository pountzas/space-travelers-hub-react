import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missions';

const missionComp = () => {
  const dispatch = useDispatch();
  const Mission = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(getMissions());
  }, []);
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
              <td><button type="button">Not a member</button></td>
              <td><button type="button">Join Mission</button></td>

            </tr>
          ))}

        </tbody>
      </table>

    </div>
  );
};
export default missionComp;
