import Applications from "./component/apps";
import Categories from "./component/Categorie";
import ApplicationsList from "./component/appsList";
import NaviBar from "./component/NavBar";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState('')
  const [bottomComponent, setBottomComponent] = useState('Applications');
  const [selectedNavItem, setSelectedNavItem] = useState('Applications');

  const handleNavItemClick = (navItem) => {
    setBottomComponent(navItem);
    setSelectedNavItem(navItem);
  };

  return (
    <div>
      <NaviBar setBottomComponent={handleNavItemClick} selectedNavItem={selectedNavItem} search={search} setSearch={setSearch}/>
      {bottomComponent === 'Applications' && <Applications search={search}/>}
      {bottomComponent === 'Categories' && <Categories />}
      {bottomComponent === 'ApplicationsList' && <ApplicationsList search={search}/>}
    </div>
  );
}
export default App;

