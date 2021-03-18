import logo from './logo.svg';
import './App.css';
import './index.css';
import Wave from 'react-wavify'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { jsx, css, Global } from '@emotion/react'

function App() {
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
                          amplitude: 50,
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

export default App;
