import React from "react";
import { SocialData } from "../../data/social";
import "./socialcontact.css";

function SocialContacts() {
  const data = SocialData;

  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link} target="_blank" rel="noreferrer">
            <div className="social-icon-div">
              <img
                src={item.icon}
                alt="social media icon"
                className="media-icon"
              />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContacts;
