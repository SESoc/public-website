import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import ProfilePhotoGroup from 'components/ProfilePhotoGroup'
import Footer from 'components/Footer'
import url from 'url'

const profileImage = (name) =>
  url.resolve(process.env.PUBLIC_URL, `/profiles/${name}.jpg`)

class About extends Component {
  render() {
    return (
      <div className="footer-to-bottom">
        <body>
          <Container className="mt-5 mb-5">
            <h1>What is SE Soc?</h1>
            <p>
              Software Engineering Society (SE Soc) is a council that runs
              community initiatives within the SE program. Through class and
              program-wide events, such as game nights, online events, virtual
              dinners and coffee chats, we hope you get to meet all the other
              brilliant people in SE! We also run resume critiques and interview
              prep sessions, hosted by upper years, to help you get a better
              shot at the jobs you want. You can listen to a highlight of the
              cool stuff that everyone in SE is up to through our podcast,
              Sessions by SE.
            </p>
            <Container className="mt-4 pl-0">
              <h1>Meet The Team</h1>
              <p>
                A-Soc represents the even years (SE2022, SE2024, SE2026) and
                B-Soc represents the odd years (SE2023, SE2025). We’re a
                friendly bunch, feel free to say hi if we ever bump into each
                other online or on campus!
              </p>
              <ProfilePhotoGroup
                soc={'A-Soc'}
                execs={[
                  {
                    name: 'Aaron Abraham',
                    src: profileImage('aaron'),
                    year: '2024',
                    position: 'President',
                  },
                  {
                    name: 'Yash Arora',
                    src: profileImage('yash'),
                    year: '2024',
                    position: 'VP Communications',
                  },
                  {
                    name: 'Molly Yu',
                    src: profileImage('molly'),
                    year: '2024',
                    position: 'VP Finance',
                  },
                  {
                    name: 'Danny Wu',
                    src: profileImage('danny'),
                    year: '2024',
                    position: 'VP Events',
                  },
                ]}
                reps={[]}
                color={'var(--color-math)'}
              />
              <ProfilePhotoGroup
                soc={'B-Soc'}
                execs={[
                  {
                    name: 'Atif Mahmud',
                    src: profileImage('atif'),
                    year: '2023',
                    position: 'President',
                  },
                  {
                    name: 'Elisa Luan',
                    src: profileImage('elisa'),
                    year: '2023',
                    position: 'VP Events',
                  },
                  {
                    name: 'Mayank Kanoria',
                    src: profileImage('mayank'),
                    year: '2023',
                    position: 'VP Finance',
                  },
                ]}
                reps={[]}
                color={'var(--color-eng)'}
              />
            </Container>
          </Container>
        </body>
        <Footer color={'pink'} />
      </div>
    )
  }
}

export default About
