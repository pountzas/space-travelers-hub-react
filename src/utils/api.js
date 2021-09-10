const spaceX = {
  getAllMissions() {
    const mission = fetch('https://api.spacexdata.com/v3/missions')
      .then((rawResponse) => rawResponse.json())
      .then((response) => response);

    return mission;
  },
};

export default spaceX;
