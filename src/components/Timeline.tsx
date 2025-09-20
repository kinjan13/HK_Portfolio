import React, { useEffect, useRef } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const elements = timelineRef.current?.querySelectorAll(".vertical-timeline-element");
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view"); // add class when visible
          } else {
            entry.target.classList.remove("in-view"); // remove class when out of view
          }
        });
      },
      {
        threshold: 0.3, // trigger when 30% visible
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div id="history" ref={timelineRef}>
      <div className="items-container">
        <h1>History</h1>
        <VerticalTimeline>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2023- present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBookOpen} />}
          >
            <h3 className="vertical-timeline-element-title">Associate Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Deloitte, India</h4>
            <p>
              Full-stack Web Development, Frontend Development, Backend Development, User Experience, Team Leading
            </p>
          </VerticalTimelineElement> */}

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
           icon={<FontAwesomeIcon icon={faBookOpen} />}

          >
            <h3 className="vertical-timeline-element-title">S.I.E.S College, Nerul</h3>
            <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
            <p>Bachelor's Degree</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBookOpen} />}
          >
            <h3 className="vertical-timeline-element-title">D.Y PATIL COLLEGE, CBD</h3>
            <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
            <p>
              HSC (Maharashtra State Board)<br />
              Percentage: 75%
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2005 - 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBookOpen} />}
          >
            <h3 className="vertical-timeline-element-title">St. Xavier's School, Nerul</h3>
            <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
            <p>
              SSC (Maharashtra State Board)<br />
              Percentage: 75%
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
