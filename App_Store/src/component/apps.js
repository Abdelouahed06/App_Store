import React, { useEffect, useState } from "react";
function Applications({search}) {
    const [apps, setApps] = useState([]);
    const [games, setGames] = useState([]);
  
    useEffect(() => {
        // API 
      fetch("https://abdelouahed06.github.io/apiapps/apps.json")
        .then(response => response.json())
        .then(data => {
          const filteredApps = data.apps.filter(app => app.type === "app");
          const filteredGames = data.apps.filter(app => app.type === "game");
          setApps(filteredApps);
          setGames(filteredGames);
        })
        .catch(error => console.error("Error fetching data:", error));
    }, []);
    useEffect(()=>{
      console.log(apps)
      console.log(games)
    },[apps,games])
    return (
      <div className="mainCat">
        {/* Top apps */}
        <br></br>
        <br></br>
        <div className="topAppsGames">
          <p>All apps</p>
          <div className="topAppsGames_main">
            {apps && apps.filter((app) => app.name.toUpperCase().includes(search.toUpperCase())).map(app => (
              <div key={app.id} className="topAppsGames_child">
                <div className="topAppsGames_child_logo">
                  <img src={app.app_icon} alt={app.name} />
                </div>
                <div className="topAppsGames_child_info">
                  <p>{app.name}</p>
                  <p>Rate: {app.rate} stars</p>
                  <p>Category: {app.category}</p>
                  <p>Developer: {app.developer}</p>
                </div>
                <div className="topAppsGames_child_btnDownload">
                  <button>Install</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Top games */}
        <br></br>
        <br></br>
        <div className="topAppsGames">
          <p>All games</p>
          <div className="topAppsGames_main">
            {games.filter((app) => app.name.toUpperCase().includes(search.toUpperCase())).map(game => (
              <div key={game.id} className="topAppsGames_child">
                <div className="topAppsGames_child_logo">
                  <img src={game.app_icon} alt={game.name} />
                </div>
                <div className="topAppsGames_child_info">
                  <p>{game.name}</p>
                  <p>Rate: {game.rate} stars</p>
                  <p>Category: {game.category}</p>
                  <p>Developer: {game.developer}</p>
                </div>
                <div className="topAppsGames_child_btnDownload">
                  <button>Install</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Applications;
