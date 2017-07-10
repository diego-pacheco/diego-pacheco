import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import { Col, Row } from 'react-styled-flexboxgrid'
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

const content = {
  title: 'DIEGO PACHECO SIRI',
  subtitle: 'JAVASCRIPT DEVELOPER',
  paragraphs: [
    'Hi my name is Diego Pacheco, I\'m a 35 years old developer from Montevideo, Uruguay. I\'m a proud husband and father of two great boys: Manuel 4 years old and Lorenzo 3 months old baby.',
    'I started working 14 years ago as a Junior LAMP developer and in the last four years I\'ve being focusing on web development with Javascript.',
    'I describe myself as an easy going guy, a team player always willing to go the extra mile and help my team mates. Interested in evolving as a developer and keep learning new technologies/frameworks.',
    'On my free time I enjoy spending time with my family and from time to time I like brewing my own beer.'
  ]
}

class About extends Component {
  /*
  * @param {Array} texts
  * Returns all texts in the array as paragraphs for rendering
  */
  renderParagraphs (texts) {
    return texts.map((text) => <p>{text}</p>)
  }

  render() {
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
                  { this.renderParagraphs(content.paragraphs) }
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