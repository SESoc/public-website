import React, { Component } from 'react';
import Platform from '../components/platform';

// Styles
import '../styles/pure/pure-min.css';
import '../styles/pure/grids-responsive-min.css';
import '../styles/container/platforms.css';

const platformData = [
  {
    name: "Katherine Lu",
    candidacy: 'Vice President of Events',
    platform: `Hey! I'm Katherine from SE2020. 😄
    Strengthening the SE community has been an important priority for me
    since I started university. Since 2015, I've personally organized events
    to try and strengthen our community with regular class dinners (past 5
    terms) and Women in SE meet-ups (past 2 terms). I've also personally
    mentored SE students through EngSoc and Women in Engineering since 2A
    because I believe 1:1 mentorship can make a big difference for students
    beginning their journey in SE. But despite these efforts, it's pretty
    hard to build community through the efforts of only one individual. Now
    that SE Soc is up and running.`,
    quote: "I want to work with all years of SE students to build a stronger community",
    points: [
      "Regular class dinners (initiated)",
      "Women in SE events (initiated)",
      "Career oriented events (resume critiques, career panels, etc.)",
      "Academic oriented workshops (tech talks, guest lecturers)",
      "Academic oriented workshops (tech talks, guest lecturers)",
      "More social/community-building events and opportunities for inter-class meetings"
    ],
    contacts: {
      facebook: 'https://facebook.com/',
      email: 'katherine.lu@uwaterloo.ca'
    }
  },
  {
    name: "Ayush Kapur",
    candidacy: 'Vice-President Finance',
    platform: ``,
    quote: "",
    points : [
    ],
    contacts: {
      facebook: '',
      email: ''
    }
  },
  {
    name: "Yingning Gui",
    candidacy: 'Vice-President Communications',
    platform: ``,
    quote: "",
    points : [
    ],
    contacts: {
      facebook: '',
      email: ''
    }
  },
  {
    name: "Spencer Dobrik",
    candidacy: 'President',
    platform: ``,
    quote: "",
    points : [
    ],
    contacts: {
      facebook: '',
      email: ''
    }
  }
]

function PlatformsList(props) {
  const platforms = props.platforms;
  const listItems = platforms.map((platform) => 
    <Platform platform={platform} />
  )
  return(listItems);
}

function PlatformSidebar(props) {
  return(
    <div className="sidebar pure-u-1 pure-u-md-1-4">
      <div className="header">
        <h1 className="brand-title">SESoc Candidate Platforms</h1>
        <h1 className="brand-tagline">Winter 2019 Elections</h1>
      </div>
    </div>
  )
}

class Platforms extends Component {
  render() {
    return (
      <div id="layout" className="pure-g">
        <PlatformSidebar/>

        <div className="content pure-u-1 pure-u-md-3-4">
          <div>
            <div className="posts">
              <PlatformsList platforms={platformData}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Platforms;
