import logo from './logo.svg';
import './App.css';

import React from 'react';

class Showcase extends React.Component
{
  constructor(props)
  {
    super(props);
    this.name = props.internalName;
    this.url = props.link;
    this.banner = props.bannerURL;
  }

  render() {
    return <div style={{width:"100vw",overflow:"hidden",height:"20vh",alignContent:"center",display:"grid"}}>
      <a href={this.url}><img className='banner' src={this.banner} alt={this.internalName}/></a>
      </div>
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='floater'><img src="CheeseMansBanner+.png" className='titleBanner'/></div>
        <div style={{top:"25vh", position:'absolute'}}>
        <Showcase bannerURL="3subanner_reg.png" link="https://drive.usercontent.google.com/download?id=1QdXoN7_lgOYB18ryaEgkzA2sW8tA3-jE&export=download&authuser=0" internalName="3 Sides Ultra" />
        <Showcase bannerURL="obr_banner.png" link="WebGL/orbiters/index.html" internalName="Orbiters" />
        <Showcase bannerURL="cannon_duels_banner.png" link="https://drive.usercontent.google.com/download?id=18FanbB_shT1fUgI2uDPIvvcWvgnHHha8&export=download&authuser=0" internalName="Cannaon Duels" />
        </div>
      </header>
    </div>
  );
}

export default App;
