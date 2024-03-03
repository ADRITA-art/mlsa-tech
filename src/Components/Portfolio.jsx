/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/graphic.jpg";

const imageAltText = "pattern image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My ML Projects",
    description:
      "ML projects by me.",
    url: "https://github.com/ADRITA-art/ML-Projects",
  },
  {
    title: "LinkedIn profile",
    description:
      "This is my linkedIn profile. You can check my profile here.",
    url: "https://www.linkedin.com/in/adrita-chakraborty-ba9b2a24b/",
  },
  {
    title: "My Resume Site",
    description:
      "Includes my experience and design abilities.",
    url: "https://docs.google.com/document/d/16GH2QktQKQKOwv1EbUbx2MlC-2_ccIIuZBwH-3-JdkM/edit?usp=sharing",
  },
  {
    title: "github link",
    description:
      "This is my github profile. You can check my profile here.",
    url: "https://github.com/ADRITA-art",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
