import "./App.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Users from "./components/tabs/hometab";
import Rockets from "./components/tabs/rocketstab";
import Company from "./components/tabs/companyTab";
import Missions from "./components/tabs/missions";

function App() {
  // let [tabsArray, setTabsArray] = useState([]);

  // useEffect(() => {
  //   checkUnique("Home");
  // }, []);

  // function checkUnique(tabname) {
  //   let unique = tabsArray.find((a) => a.props.id === tabname);
  //   !unique && addTab(tabname);
  // }

  // function addTab(tabname) {
  //   let arr = [...tabsArray];
  //   if (tabname === "Home") {
  //     arr.push(<Home />);
  //   } else if (tabname === "Modules") {
  //     arr.push(<Modules />);
  //   } else if (tabname === "Settings") {
  //     arr.push(<Settings />);
  //   } else if (tabname === "Profile") {
  //     arr.push(<Profile />);
  //   }
  //   setTabsArray(arr);
  // }

  return (
    <div className="App">
      <BrowserRouter basename="/user/">
        <Navigation>
          {/* <div className="content">{tabsArray}</div> */}
          <div className="content">
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/company">
              <Company />
            </Route>
            <Route path="/missions">
              <Missions />
            </Route>
            <Route path="/rockets">
              <Rockets />
            </Route>
          </div>
        </Navigation>
      </BrowserRouter>
    </div>
  );
}

// function Home() {
//   return <div id="Home">Home page html</div>;
// }
// function Modules() {
//   return <div id="Modules">Modules page html</div>;
// }
// function Settings() {
//   return <div id="Settings">Settings page html</div>;
// }
// function Profile() {
//   return <div id="Profile">Profile page html</div>;
// }

export default App;
