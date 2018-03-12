import React, { Component } from "react";
import Script from 'react-load-script'
import { DFPSlotsProvider, AdSlot } from 'react-dfp';


class Stuff extends Component {
  render() {
    return (
      <div>
    <Script
      url="http://c.amazon-adsystem.com/aax2/apstag.js"
    />
      <div>
        <h2>Projects</h2>
        <p>Gonna try to load some ads!</p>
          <DFPSlotsProvider dfpNetworkId = '58690173'>
            <div className="ad-container">
              <AdSlot sizes={[[300, 250]]} adUnit='Adaptor_300x250' />
            </div>
          </DFPSlotsProvider>
      </div>
      </div>
    );
  }
}


 
export default Stuff;

 
