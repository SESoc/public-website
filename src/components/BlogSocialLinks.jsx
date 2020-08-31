import React from "react";
import url from "url";
import PropTypes from "prop-types";
import "./styles/BlogSocialLinks.scss";

const anchorLogoSrc = url.resolve(
  process.env.PUBLIC_URL,
  "/blog/anchorfm-logo.png",
);

export const LINK_ICON_MAP = {
  default: <i className="fas fa-link" />,
  spotify: <i className="fab fa-spotify" />,
  apple: <i className="fab fa-apple" />,
  anchor: <img className="social-img" src={anchorLogoSrc} alt="Anchor Logo" />,
  rss: <i className="fas fa-rss-square" />,
};

const BlogSocialLinks = ({type, links}) => {
  if (type === "Podcast") {
    const linksToRender = links.filter(({type}) => type !== "default");
    return (
      <div className="social-links-container">
        <div className="social-links-grid">
          {linksToRender.map(({type, link}) => (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {LINK_ICON_MAP[type]}
            </a>
          ))}
        </div>
      </div>
    );
  }

  const [{link, type: linkType}] = links;
  return (
    <div className="social-links-container">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {LINK_ICON_MAP[linkType]}
      </a>
    </div>
  );
};

BlogSocialLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    link: PropTypes.oneOf(["default", "spotify", "apple", "anchor", "rss"]),
  })).isRequired,
  type: PropTypes.string.isRequired,
};

export default BlogSocialLinks;
