import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import MediaQuery from 'react-responsive'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

const style = {
  margin: '0 0 -100px',
  padding: '20px 20px 50px'
}

const styleMobile = {
  margin: '0 -45px -100px',
  padding: '20px 20px 50px',
  fontSize: '13px'
}

const projects = [
  {
    title: 'Insure Street',
    url: 'http://insurestreet.co/',
    description: 'Actually working on this project as a NodeJS dev, maintaining the existing API and connecting third party APIs.',
    image: 'insurestreet.jpg'
  },
  {
    title: 'DKMS',
    url: 'https://dkmsgetinvolved.org/',
    description: 'Worked as a Node/React developer, developing the API to store the donors information and returning some stats. Also worked with another React developer on the registration app.',
    image: 'dkms.jpg'
  },
  {
    title: 'Our Harvest',
    url: 'https://ourharvest.com/',
    description: 'Worked in the frontend and backend side, maintaining existing code and adding new features, like loyalty points for recurring clients. Improvements to user experience.',
    image: 'ourharvest.jpg'
  },
  {
    title: 'Mirror App',
    url: 'https://itunes.apple.com/uy/app/mirror-team-performance/id1013251717',
    description: 'Migrated the existing Parse server to clients server, bug fixing and adding new features.',
    image: 'mirror.jpg'
  }
]

class Projects extends Component {
  /*
  * Returns the projects' markup for rendering
  */
  renderProjects () {
    return projects.map((project) => {
      return (
        <Col xs={12} md={6} sm={6}>
          <Card>
            <CardMedia
              overlay={<CardTitle title={project.title}
              subtitle={project.url} />}
            >
              <img src={project.image} alt={project.title} />
            </CardMedia>
            <CardText>
              {project.description}
            </CardText>
          </Card>
        </Col>
      )
    })
  }
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 624px)' minDeviceWidth={624}>
            <Paper style={style} zDepth={3}>
              <Grid fluid>
                <Row>
                  { this.renderProjects()}
                </Row>  
              </Grid>
            </Paper>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 623px)' maxDeviceWidth={623}>
          <Paper style={styleMobile} zDepth={3}>
              <Grid fluid>
                <Row>
                  { this.renderProjects()}
                </Row>  
              </Grid>
            </Paper>
        </MediaQuery>
      </div>
    );
  }
}

export default Projects;