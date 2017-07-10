import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import { Col, Row } from 'react-styled-flexboxgrid'
import axios from 'axios'
import avatar from './avatar2.jpg'

const Img = styled.img`
  margin: auto;
`

//styled components for desktop
const Title = styled.div`
  font-size: 42px;
  font-weight: 100;
  line-height: 44px;
  color: #de3925;
`

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #de3925;
`

//styled components for mobile
const TitleMobile = styled.div`
  font-size: 22px;
  font-weight: 100;
  line-height: 24px;
  color: #de3925;
`

const SubTitleMobile = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #de3925;
`

//styles for desktop
const paperStyle = {
  margin: '0 0 -100px',
  padding: '20px 20px 50px'
}

const styleAvatar = {
  height: 150,
  width: 150,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  overflow: 'hidden'
};

//styles for mobile
const paperStyleMobile = {
  margin: '0 -45px -100px',
  padding: '20px 20px 50px',
  fontSize: '13px'
}
const styleAvatarMobile = {
  height: 75,
  width: 75,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  overflow: 'hidden'
};

class About extends Component {
  constructor (props) {
    super(props)
    this.state = {
      content: {
        paragraphs: []
      }
    }
    this.renderParagraphs = this.renderParagraphs.bind(this)
  }

  getInitialState () {
    return {
      content: {}
    }
  }

  componentDidMount () {
    axios.get(`https://murmuring-savannah-23784.herokuapp.com/api/v1/about`)
    .then((response) => {
      console.log(response.data)
      this.setState({content: response.data.about})
    })
    .catch((err) => {
      console.log(err)
    })
  }
  /*
  * Returns all texts in state.content.texts as paragraphs for rendering
  */
  renderParagraphs () {
    const { paragraphs } = this.state.content
    return paragraphs.map((text) => <p key={Math.random()}>{text}</p>)
  }

  render() {
    const { content } = this.state
    return (
      <div>
        <MediaQuery query='(min-device-width: 624px)' minDeviceWidth={624}>
          <Paper style={paperStyle} zDepth={3}>
              <Row>
                <Col  xs={12} sm={12} md={3} lg={3} style={{textAlign: 'center'}}>
                  <Paper style={styleAvatar} zDepth={1} circle={true}>
                      <Img src={avatar} height="150px"/>
                  </Paper>
                </Col>
                <Col xs={12} sm={12} md={9} lg={9}>
                  <Title>{content.title}</Title>
                  <SubTitle>{content.subtitle}</SubTitle>
                  { this.renderParagraphs() }
                </Col>
              </Row>
          </Paper>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 623px)' maxDeviceWidth={623}>
          <Paper style={paperStyleMobile} zDepth={3}>
            <Row>
              <Col  xs={12} sm={12} md={3} lg={3} style={{textAlign: 'center'}}>
                <Paper style={styleAvatarMobile} zDepth={1} circle={true}>
                    <Img src={avatar} height="75px"/>
                </Paper>
              </Col>
              <Col xs={12} sm={12} md={9} lg={9}>
                <TitleMobile>{content.title}</TitleMobile>
                <SubTitleMobile>{content.subtitle}</SubTitleMobile>
                { this.renderParagraphs(content.paragraphs) }
              </Col>
            </Row>
          </Paper>
        </MediaQuery>
      </div>
    )
  }
}

export default About
