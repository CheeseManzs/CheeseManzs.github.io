import logo from './logo.svg';
import './App.css';

import React from 'react';
import {Grid, Item} from '@mui/material';
class Showcase extends React.Component
{
  constructor(props)
  {
    super(props);
    this.name = props.internalName;
    this.url = props.link;
    this.banner = props.bannerURL;
    this.baseWidth = props.baseWidth;
  }

  render() {
    return (
      <div className='appIcon' style={{display:"grid", alignContent:"center"}}>
      <div style={{width:"10vw",overflow:"hidden",height:"10vw",alignItems:"center",display:"grid",borderRadius:"1vw", backgroundColor:"#212121"}}>
      <a href={this.url} style={{width:"100%", height:"100%", alignItems:"center", justifyContent:"center", display:"block", margin:"auto", scale:this.baseWidth}}><img className='banner' src={this.banner} alt={this.name} style={{width:"100%", alignSelf:"center"}}/></a>
      </div>
      <h5>{this.name}</h5>
      </div>
      )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='floater'><img src="CheeseMansBanner+.png" className='titleBanner'/></div>
        <div style={{display:"grid", alignContent:"center", columnCount:"5", gridTemplateColumns:"auto auto auto", columnGap:"10vw"}}>
        <Showcase bannerURL="3sulogo.png" link="https://drive.usercontent.google.com/download?id=1QdXoN7_lgOYB18ryaEgkzA2sW8tA3-jE&export=download&authuser=0" internalName="3 Sides Ultra" baseWidth="100%" />
        <Showcase bannerURL="cannon_duels_logo.png" link="https://drive.usercontent.google.com/download?id=18FanbB_shT1fUgI2uDPIvvcWvgnHHha8&export=download&authuser=0" internalName="Cannon Duels" baseWidth="100%"/>
        <Showcase bannerURL="orbiters_templogo.png" link="WebGL/orbiters/index.html" internalName="ORBITERS" baseWidth="130%"/>
        </div>
      </header>
    </div>
  );
}

export default App;
