import React, { Component } from 'react';
import Platform from '../components/platform';

// Styles
import '../assets/pure/pure-min.css';
import '../assets/pure/grids-responsive-min.css';
import '../assets/container/platforms.css';

// Images temporary ideally these will be hosted online, and we won't import from assets
import ayush from '../assets/images/ayush.jpg';
import yg from '../assets/images/yg.jpg';
import katherine from '../assets/images/katherine.jpg';
import spencer from '../assets/images/spencer.jpg';

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
    that SE Soc is up and running. I want to work with all years of SE students to build a stronger community.`,
    quote: "",
    points: [
      "Regular class dinners (initiated)",
      "Women in SE events (initiated)",
      "Career oriented events (resume critiques, career panels, etc.)",
      "Academic oriented workshops (tech talks, guest lecturers)",
      "More social/community-building events and opportunities for inter-class meetings"
    ],
    contacts: {
      facebook: 'https://facebook.com/',
      email: 'katherine.lu@uwaterloo.ca'
    },
    image: katherine
  },
  {
    name: "Ayush Kapur",
    candidacy: 'Vice-President Finance',
    platform: `Hi! My name’s Ayush, and I’m running for VP Finance. My main goal is to help
    get financing and work on setting up awesome SESoc events like Resume
    Critiques, Mixers, and Coffee Chats.`,
    quote: "",
    points : [
      "Obtaining corporate sponsors to fund event costs (like food!)",
      "Reaching out to alum in major tech areas to solicit funding",
      "And bringing the SE community closer together through events!"
    ],
    contacts: {
      facebook: '',
      email: ''
    },
    image: ayush
  },
  {
    name: "Yingning Gui",
    candidacy: 'Vice-President Communications',
    platform: `Hey guys!

    I’ve always noticed somewhat of a discrepancy between the plethora of
    opportunities and students being informed.

    Looking forward to not only making our class more of a community, but our
    entire program!`,
    quote: "",
    points : [
      "Promote events (concisely) to you via social media, our newly built website, and emails",
      "Create a feedback gathering system where we can take your input in developing our program and future opportunities",
      "Host a bonfire! We can all bond over toasting smores in the summer heat of June 2019."
    ],
    contacts: {
      facebook: '',
      email: ''
    },
    image: yg
  },
  {
    name: "Spencer Dobrik",
    candidacy: 'President',
    platform: `Hey everyone, you might not have had the chance to meet me yet; but I am the founder of SE Soc. Here are a list of things I've done over the past 8 months to get SE Soc set up.`,
    quote: "",
    points : [
      "Get us some Sponsorship! We'll be working with the SE admin to put out some sponsorship packages as our FYDP and new lounge will need sponsors, along with SE Soc events. ",
      "----------------------------------------------------------------------",
      "Alumni outreach! There are a lot of aspects to this but these are the goals",
      "Learn from our alumni, be able to ask alumni to talk to us about things that they think are important that we know about life or work.",
      "Get donations!",
      "Setup networking events between different years of SE and between our graduated students and our current students!",
      "Setup alum meetups in different cities(SF, Seattle, NYC, Waterloo).",
      "----------------------------------------------------------------------",
      "Build our website",
      "Currently we have some help in building this and we need to keep going on this progress.",
      "Keep building on it and hopefully point to other services on campus that can help people with every aspect of life at waterloo.(giving a link to mathsoc and engsoc exam banks)",
      "----------------------------------------------------------------------",
      "Get SoftWear up and running",
      "Decide our first all-year swag orders we'll do",
      "Focus on environmentally friendly alternatives whenever possible",
      "Focus on quality over quantity, this will will mean more expensive clothing, but it will also be much softer and durable.",
      "Reach out to shopify to get us a free store hopefully.",
      "Leverage previous partnerships I've made with Swaggerloo to have our designs improved and receive cheaper per unit prices.",
      "----------------------------------------------------------------------",
      "Clean up our constitution",
      "I left a lot of vagueness in our constitution, it is fine in some areas, but other areas need more structure.",
      "----------------------------------------------------------------------",
      "Figure out what we need to build upon to make the SE program even better from a social aspect",
      "----------------------------------------------------------------------",
      "And here are some things I would like to do if I complete all other tasks",
      "Get SE Soc an office",
      "Set up an endowment from our sponsorships and donations",
      "----------------------------------------------------------------------",
      "Class profile",
      "Develop a method for how to do class profiles and decide how often we want to do them(ex. Every 3 years)",
      "Figure out questions to ask in 1a and 4b.",
      "Show trends of the se class profile over the years."
    ],
    achievements: [
      "Wrote our constitution.",
      "Got buy in from our administration.",
      "Recruited execs to run the first iteration of the society.",
      "Ran a very successful referendum thanks to many people both on and off campus that term.",
      "Organized meetings for Fall 2018 as well as all exec meetings before that.",
      "Interfaced with alumni to get buy-in and advice from them, plus their support and help in finding resources for sponsorship.",
      "Developed plans for sponsorship, both the different things we will be able to sell as well as the recruiters and university relations reps we can reach out to.",
      "Figured out how we will get our own bank account, as well as how we will get a budget from the SE program in the meantime."
    ],
    contacts: {
      facebook: '',
      email: ''
    },
    image: spencer
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
        <h1 className="brand-tagline">Fall 2018 Elections</h1>
      </div>
    </div>
  )
}

function PlatformFooter(props) {
  return(
    <div className="footer">
        <div className="pure-menu pure-menu-horizontal">
            <ul>
                <li className="pure-menu-item"><a href="/" className="pure-menu-link">Home</a></li>
                <li className="pure-menu-item"><a href="https://github.com/SESoc" className="pure-menu-link">GitHub</a></li>
            </ul>
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

        <PlatformFooter/>
        </div>
      </div>
    );
  }
}

export default Platforms;
