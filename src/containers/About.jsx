import React, { Component } from 'react';
import ComingSoon from '../components/comingSoon';
import '../assets/container/about.css'
import Card from 'react-bootstrap/Card'
// Images temporary ideally these will be hosted online, and we won't import from assets
import ayush from '../assets/images/ayush.jpg';
import yg from '../assets/images/yg.jpg';
import katherine from '../assets/images/katherine.jpg';
import spencer from '../assets/images/spencer.jpg';
import jenny from '../assets/images/jenny.jpg';
import roxane from '../assets/images/roxane.jpg';
import elisa from '../assets/images/elisa.jpg';
import bilal from '../assets/images/bilal.jpg';


class About extends Component {
  render() {
    return (
      <div className='center'>
        <h1>Meet the Exec Teams</h1>
        <div className="ASoc">
          <h2>A-Soc Execs</h2>
          <div className="team row">
            <Card className="card prez">
              <Card.Header>
                <h3 className="exec-name">Spencer Dobrik </h3>
                <h4 className="class-year">SE 2020</h4>
                <h4 className="exec-role">President</h4>
              </Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={spencer} className="exec-img"></Card.Img>
                <Card.Text className="exec-about">About Spencer</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card vpcom" >
              <Card.Header>
                <h3 className="exec-name">Yingning Gui </h3>
                <h4 className="class-year">SE 2022</h4>
                <h4 className="exec-role">VP Communications</h4>
              </Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={yg} className="exec-img"></Card.Img>
                <Card.Text className="exec-about">text</Card.Text>

              </Card.Body>
            </Card>
            <Card className="card vpe" >
              <Card.Header>
                <h3 className="exec-name">Katherine Lu </h3>
                <h4 className="class-year">SE 2020</h4>

                <h4 className="exec-role">VP Events</h4>
              </Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={katherine} className="exec-img"></Card.Img>
                <Card.Text className="exec-about">text</Card.Text>

              </Card.Body>
            </Card>
            <Card className="card vpf">
              <Card.Header>
                <h3 className="exec-name">Ayush Kapur </h3>
                <h4 className="class-year">SE 2022</h4>

                <h4 className="exec-role">VP Finance</h4>
              </Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={ayush} className="exec-img"></Card.Img>
                <Card.Text className="exec-about">text</Card.Text>

              </Card.Body>
            </Card>
            
          </div>
          
        </div>
        <div className="BSoc">
          <h2>B-Soc Execs</h2>
          <div className="team row">
          <Card className="card prez">
              <Card.Header>
                <h3 className="exec-name">Roxane Fruytier </h3>
                <h4 className="class-year">SE 2021</h4>

                <h4 className="exec-role">President</h4>

              </Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={roxane} className="exec-img"></Card.Img>
                <Card.Text className="exec-about">text</Card.Text>

              </Card.Body>
            </Card>
            <Card className="card vpcom">
              <Card.Header>
                <h3 className="exec-name">Jenny Wills </h3>
                <h4 className="class-year">SE 2021</h4>

                <h4 className="exec-role">VP Communications</h4>
              </Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={jenny} className="exec-img"></Card.Img>
                <Card.Text className="exec-about">text</Card.Text>

              </Card.Body>
            </Card>
            <Card className="card vpe">
              <Card.Header>
                <h3 className="exec-name">Elisa Luan </h3>
                <h4 className="class-year">SE 2023</h4>

                <h4 className="exec-role">VP Events</h4>

              </Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={elisa} className="exec-img"></Card.Img>
                <Card.Text className="exec-about">text</Card.Text>

              </Card.Body>
            </Card>
            <Card className="card vpf">
              <Card.Header>
                <h3 className="exec-name">Mayank Kanoria </h3>
                <h4 className="class-year">SE 2023</h4>
                <h4 className="exec-role">VP Finance</h4>

              </Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={ayush} className="exec-img"></Card.Img>
                <Card.Text className="exec-about">text</Card.Text>

              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="old">
          <h2>Graduated Execs</h2>
          <div className="team">
            <Card className="card">
              <Card.Header>
                <h3 className="exec-name">Bilal Akhtar </h3>
                <h4 className="class-year">SE 2019</h4>

                <h4 className="exec-role">B-Soc President Winter 2019</h4>

              </Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={bilal} className="exec-img"></Card.Img>
                <Card.Text className="exec-about">text</Card.Text>

              </Card.Body>
            </Card>
            </div>
        </div>
      </div>
    );
  }
}

export default About;
