/* eslint-disable react/prop-types */
import React, {Component} from "react";
import PropTypes from "prop-types";

function Points(props) {
  const listItems = props.points.map(point => (
    <li>
      <p className="post-meta">{point}</p>
    </li>
  ));
  return (
    <div>
      <h3>Goals:</h3>
      <ul>{listItems}</ul>
    </div>
  );
}

function Picture(props) {
  return (
    <div className="pure-g">
      <div className="pure-u-1 pure-u-md-1-3"></div>
      <div className="pure-u-1 pure-u-md-1-3">
        <img
          alt={`${props.name}'s avatar`}
          className="pure-img-responsive avatar"
          src={props.image}
        />
      </div>
      <div className="pure-au-1 pure-u-md-1-3"></div>
    </div>
  );
}

function Achievements(props) {
  if (props.achievements) {
    const listItems = props.achievements.map(achievement => (
      <li>
        <p className="post-meta">{achievement}</p>
      </li>
    ));
    return (
      <div>
        <h3>Achievements:</h3>
        <ul>{listItems}</ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

class Platform extends Component {
  render() {
    return (
      <div>
        <h1 className="content-subhead">
          {"Candidates for " + this.props.platform.candidacy}
        </h1>

        <section className="post">
          <header className="post-header">
            <h2 className="post-title">{this.props.platform.name}</h2>
            <Picture
              name={this.props.platform.name}
              image={this.props.platform.image}
            />
          </header>

          <div className="post-description">
            <p>{this.props.platform.platform}</p>
          </div>

          <Achievements achievements={this.props.platform.achievements} />
          <Points points={this.props.platform.points} />
        </section>
      </div>
    );
  }
}

Platform.propTypes = {
  platform: PropTypes.shape({
    name: PropTypes.string.isRequired,
    candidacy: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string.isRequired),
    contacts: PropTypes.shape({
      facebook: PropTypes.string,
      email: PropTypes.string,
    }),
    image: PropTypes.string.isRequired,
    achievements: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Platform;
