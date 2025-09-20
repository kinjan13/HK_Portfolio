import React, { useState, useEffect } from "react";
import '../assets/styles/Experience.scss';

interface ExpItem {
  id: number;
  company: string;
  logo: string;
  position: string;
  description: string;
}

const experienceData: ExpItem[] = [
  {
    id: 1,
    company: "Example Co.",
    logo: "/images/exampleco-logo.png",
    position: "Senior Software Engineer",
    description:
      "Designed and built XYZ tool for ABC tasks. Managed disaster-recovery system for Kubernetes volumes. Led backend engineering team."
  }
];

export default function Experience() {
  const [open, setOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Toggle open/close on click
  const toggleCard = () => setOpen(!open);

  // Close card on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop < lastScrollTop) setOpen(false);
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const exp = experienceData[0];

  return (
    <section className="experience-expand" id="experience">
      <h2 className="title">Experience</h2>
      <div
        className={`exp-card ${open ? "open" : ""}`}
        onClick={toggleCard}
      >
        <div className="exp-header">
          <img src={exp.logo} alt={`${exp.company} logo`} className="exp-logo" />
          <div className="exp-text">
            <h3>{exp.company}</h3>
            <p>{exp.position}</p>
          </div>
        </div>
        <div className="exp-details">
          <p>{exp.description}</p>
        </div>
      </div>
    </section>
  );
}
