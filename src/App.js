import logo from './logo.svg';
import './App.css';
import './index.css';
import Wave from 'react-wavify'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { jsx, css, Global } from '@emotion/react'

import { Box, Button, IconButton, Paper, Container, Typography} from '@material-ui/core';
import TemperatureSlider from './components/TemperatureSlider';
import HarmonySelect from './components/HarmonySelect';
import AppHeader from './components/AppHeader';


function renderWave() {

  //wave from https://github.com/woofers/react-wavify
  //header from https://www.npmjs.com/package/react-sticky-header

  let myHeader = () => (
    <div>
      <StickyHeader
        // This is the sticky part of the header.
        header={
          <div className="Header_root">
            <h1 className="Header_title">ReactStickyHeader</h1>

            <ul className="Header_links">
              <li className="Header_link">When</li>
              <li className="Header_link">Why</li>
              <li className="Header_link">About</li>
            </ul>
          </div>
        }
      >
        <section>
          <p>
            This section will be what the sticky header scrolls over before entering into
            sticky state. See the gif above or run the test story book to see examples.
          </p>
        </section>
      </StickyHeader>
    </div>
  );
  return (
    <div className="wave">
      <div>{myHeader}</div>
      <Wave class = "wave1"
        fill= '#5E9EF1'
        options={{
          height: 50,
          amplitude: 10,
          speed: 0.4,
          points: 6,
          stroke: '#eeeeee',
          strokeWidth: 5,
          fillOpacity: 0
        }}
      />
    </div>
  )
}

function App() {

  return (
    <div style={{backgroundColor: "grey"}}>

      <AppHeader />

      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="flex-start" 
        height="100vh" 
        m="0 auto"
        pt="8vh"
      >
        <Box mx={10}>

          <Box mb={6} >
            <HarmonySelect />
          </Box>

          { // key input
          }
          <Box 
            border={3} 
            width="60vh" 
            height="30vh"
            mb={6}
          /> 

          <Box display="flex" justifyContent="center">
            <TemperatureSlider />
          </Box>
        </Box>

        { // equalizer
        }
        <Box mx={10} border={3} width="60vh" height="60vh">
        </Box>

      </Box>
      {
        // renderWave()
      }
    </div>
  );

}

export default App;
