import config from './config'
import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import MediaQuery from 'react-responsive'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import axios from 'axios'

const style = {
  margin: '0 0 -100px',
  padding: '20px 20px 50px'
}

const styleMobile = {
  margin: '0 -45px -100px',
  padding: '20px 20px 50px',
  fontSize: '13px'
}

class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {projects: []}
    this.renderProjects = this.renderProjects.bind(this)
  }

  getInitialState () {
    return {
      projects: []
    }
  }

  componentDidMount () {
    axios.get(`${config.apiUrl}/projects`)
    .then((response) => {
      this.setState({projects: response.data.projects})
    })
    .catch((err) => {
      console.log(err)
    })
  }
  /*
  * Returns the projects' markup for rendering
  */
  renderProjects () {
    const { projects } = this.state
    return projects.map((project) => {
      return (
        <Col xs={12} md={6} sm={6} key={Math.random()}>
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
    )
  }
}

export default Projects
