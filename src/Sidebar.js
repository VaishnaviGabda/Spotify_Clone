import "./Sidebar.css"
import React from 'react';
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import { useDataLayerValue } from "./DataLayer";


function Sidebar({spotify}) {
  const [{ playlists }, dispatch] =  useDataLayerValue();
   console.log(playlists);

  return <div className="sidebar">

      <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>

      <SidebarOption Icon={HomeIcon} title="Home"/>
      <SidebarOption Icon={SearchIcon} title="Search"/>
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
      <br/>
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr /> 
      
      <SidebarOption title={"#Playlists1"}/>
      <SidebarOption title={"#Playlists2"}/>
      <SidebarOption title={"#Playlists3"}/>

      
      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name}/>
      ))}   
      </div> 

}

export default Sidebar;