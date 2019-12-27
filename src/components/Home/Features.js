import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './Features.scss';
import Feature from './Feature';
import LocationTracking from '../../assets/LocationTracking.png';
import TimeTracking from '../../assets/TimeTracking.jpg';
import Graph from '../../assets/Graph.png';

function Features() {
  return (
    <div className="feat-container">
      <h2 className="feat-title">Core Features</h2>
      <div className="feat-lists">
        <Feature title="Real-Time Location Tracking"
                 description="Patients can see where doctors are located at the clinic anytime."
                 img={LocationTracking}
                 alt="Location Tracking"
                 color="#f6dafa"
                 link="/documentation#oncology-map"
        />
        <Feature title="Time Tracking"
                 description="Patients can see how much time they have spent at each treatment stage."
                 img={TimeTracking}
                 alt="Time Tracking"
                 color="#ffe9c5"
                 link="/documentation#time-tracking"
        />
        <Feature title="View Time Tracking Results in Graphs"
                 description="Patients can see time tracking statistics in visual appealing graphs."
                 img={Graph}
                 alt="Time Tracking in Graphs"
                 color="#c9ffc8"
                 link="/documentation#stats"
        />
      </div>
    </div>
  );
};

export default Features;