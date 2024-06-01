import React from 'react'
import './Experience.scss'
import BU from './icons/BU';
import USC from './icons/USC';
import Philips from './icons/Philips';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import timelineElements from "./timelineElements";

import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
    return (
        <div className="experience">
            <div className="container">
                <div className="header">
                    <h1 className="sectionHeader white"><font className="numberedHeading">03.</font>Experience</h1>
                </div>
                <VerticalTimeline>
                    {timelineElements.map((element) => {
                        let showButton =
                            element.buttonText !== undefined &&
                            element.buttonText !== null &&
                            element.buttonText !== "";
                        let currentIcon = "";
                        if (element.location === "Bangalore University") {
                            currentIcon = <BU />;
                        } else if (element.location === "USC") {
                            currentIcon = <USC />;
                        } else {
                            currentIcon = <Philips />;
                        }

                        return (
                            <VerticalTimelineElement
                                key={element.id}
                                date={element.date}
                                dateClassName="date"
                                iconStyle={{ background: "#ffffff", color: '#000000' }}
                                icon={currentIcon}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {element.title}
                                </h3>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {element.location}
                                </h5>
                                <p id="description">{element.description}</p>
                            </VerticalTimelineElement>
                        )
                    })}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Experience