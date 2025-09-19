import React, { useEffect, useState } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { aboutData } from "./AboutData";

const calculateDecimalAge = (dobString) => {
  const dob = new Date(dobString);
  const now = new Date();
  const diff = now - dob; // ms lived
  return diff / (1000 * 60 * 60 * 24 * 365.25); // → years
};

const About = () => {
  const initialCounters = aboutData.skills.reduce((obj, skill) => {
    obj[skill.id] = 0;
    return obj;
  }, {});

  const [counters, setCounters] = useState({
    ...initialCounters,
    yearsOfExperience: 0,
    hoursOfWorking: 0,
    projectsDone: 0,
  });

  const [age, setAge] = useState(
    calculateDecimalAge(aboutData.mainData.dateOfBirth)
  );

  // Animate skill counters (your existing logic)
  useEffect(() => {
    const animateCounters = () => {
      const duration = 2400;
      const interval = 50;

      Object.keys({
        ...aboutData.skills.reduce((obj, skill) => {
          obj[skill.id] = skill.percent;
          return obj;
        }, {}),
        yearsOfExperience: aboutData.mainData.yearsOfExperience,
        hoursOfWorking: aboutData.mainData.hoursOfWorking,
        projectsDone: aboutData.mainData.projectsDone,
      }).forEach((key) => {
        const target = Number(
          key in initialCounters
            ? aboutData.skills.find((s) => s.id == key)?.percent
            : aboutData.mainData[key]
        );

        const increment = (target / duration) * interval;
        let current = 0;

        const intervalId = setInterval(() => {
          current += increment;
          setCounters((prev) => ({
            ...prev,
            [key]: Math.min(Math.ceil(current), target),
          }));
          if (current >= target) clearInterval(intervalId);
        }, interval);
      });
    };

    animateCounters();
  }, []);

  // ✅ Ultra-smooth Live Age with requestAnimationFrame
  useEffect(() => {
    let frameId;

    const updateAge = () => {
      setAge(calculateDecimalAge(aboutData.mainData.dateOfBirth));
      frameId = requestAnimationFrame(updateAge);
    };

    frameId = requestAnimationFrame(updateAge);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="section-box" id="about">
      <div className="row g-4 g-xl-5">
        <div className="col-12 col-xl-4">
          <div className="hero-avatar text-center">
            <Image
              src={aboutData.mainData.heroAvatar}
              alt="hero-avatar"
              placeholder="blur"
            />
            <div className="hero-avatar-text mt-2">
              <Typewriter
                options={{
                  strings: aboutData.mainData.typewriter,
                  cursor: "_",
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 15,
                }}
              />
            </div>
          </div>

          <div className="mt-4 text-start">
            <h5 className="fw-bold ">// Personal Details</h5>
            <ul className="list-unstyled">
              {aboutData.personalDetails.map((detail, index) => (
                <li key={index} className="mb-2">
                  <strong>
                    <i className={detail.icon} style={{ fontSize: "13px" }}></i>
                  </strong>{" "}
                  {detail.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-12 col-xl-8">
          <h2
            className="title-heading mb-4"
            data-backdrop-text={aboutData.mainData.title}
          >
            {aboutData.mainData.title2}
          </h2>
          <h1>{aboutData.mainData.jobTitle}</h1>

          <ul className="list-inline-pills mt-3">
            {aboutData.skills.map((skill, index) => (
              <li key={index}>
                <i className={`${skill.fontawesomeIcon} pe-2`}></i> {skill.name}
                <div className="d-inline-block font-family-mono font-small">
                  (<span className="counter">{counters[skill.id]}</span>%)
                </div>
              </li>
            ))}
          </ul>

          {/* ✅ Smooth running life-watch age */}
          <p className="mt-1">
            I am <strong>{age.toFixed(9)}</strong> years old{" "}
            {aboutData.mainData.description}
          </p>
        </div>
      </div>

      {/* Counters */}
      <div className="row g-4 mt-1">
        <div className="col-12 col-xl-4">
          <div className="d-flex align-items-center">
            <div className="d-inline-block">
              <h1 className="font-family-mono fw-semi-bold stroke-text display-4">
                <span className="counter">{counters.yearsOfExperience}</span>
              </h1>
            </div>
            <div className="d-inline-block ps-2">
              <h4 className="line-height-100 fw-normal mb-0">+</h4>
              <p className="mono-heading text-black">Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-4">
          <div className="d-flex align-items-center">
            <div className="d-inline-block">
              <h1 className="font-family-mono fw-semi-bold stroke-text display-4">
                <span className="counter">{counters.hoursOfWorking}</span>
              </h1>
            </div>
            <div className="d-inline-block ps-2">
              <h4 className="line-height-100 fw-normal mb-0">k</h4>
              <p className="mono-heading text-black">Hours of Working</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-4">
          <div className="d-flex align-items-center">
            <div className="d-inline-block">
              <h1 className="font-family-mono fw-semi-bold stroke-text display-4">
                <span className="counter">{counters.projectsDone}</span>
              </h1>
            </div>
            <div className="d-inline-block ps-2">
              <h4 className="line-height-100 fw-normal mb-0">+</h4>
              <p className="mono-heading text-black">Projects Done</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
