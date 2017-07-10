import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import MediaQuery from 'react-responsive'
import LogoImage from './LogoImage'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import styled from 'styled-components'
import linkedin from './In-White-34px-R.png'
import github from './GitHub-Mark-Light-32px.png'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Jobs from './Jobs'
import About from './About'
import Projects from './Projects'

const Icons = styled.div`
  display: flex;
  height: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 93vh;
  padding-bottom: 100px;
  box-sizing: border-box;
  background-color: #f1f0ee;
`

const Header = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 999;
  background-color: #303030;
`
const Content = styled.section`
  width: 70%;
  box-sizing: border-box;
  margin: 2rem auto 2rem auto;
  max-width: 90%;
`

const Footer = styled.footer`
  margin-top: auto;
  height: 60px;
  background-color: #303030;
`

const MenuButtons = styled.div`
  padding: 1rem;
`

const Credits = styled.div`
  vertical-align: center;
  text-align: center;
  margin: 0;
`

const Nav = styled.nav`
  display: block;
  text-align: left;
  li {display: inline;}
  a {
    font-weight: 300;
    color: #FFF;
    font-size: 15px;
    text-decoration: none;
    &.active {
      color: #e2001a;
      text-decoration: none;
    }
    &.hover {
      text-decoration: none !important;
    }
  a:hover {
    text-decoration: none !important;
  }
  }
  li {
        float: left;
        text-align: center;
        vertical-align: top;
        position: relative;
        color: #fff;
        display: inline;
        border: none;
    }

    li a {
        line-height: 30px;
        text-decoration: none;
        padding: 14px 9px;
        color: #fff;
        font-weight: light;
    }

    li:before, li:after {
        content: ' ';
        height: 0;
        position: absolute;
        width: 0;
        border: 9px solid transparent;
        border-left-width: 8px;
        border-right-width: 8px;
        top: 0;
    }
`

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div>
            <Wrapper>
              <Header>
                <Link to="/">
                  <LogoImage to="/" height={100} />
                </Link>
                <MediaQuery query='(min-device-width: 624px)' minDeviceWidth={624}>
                  <MenuButtons>
                    <Grid fluid>
                      <Row>
                        <Col xs={12}>
                          <Credits>
                              <Nav>
                                <li><Link to="/" style={{marginTop: 'auto', marginBottom: 'auto'}}>ABOUT</Link></li>
                                <li><Link to="/experience" style={{marginTop: 'auto', marginBottom: 'auto'}}>EXPERIENCE</Link></li>
                                <li><Link to="/projects" style={{marginTop: 'auto', marginBottom: 'auto'}}>PROJECTS</Link></li>
                              </Nav>
                          </Credits>
                        </Col>
                      </Row>  
                    </Grid>    
                  </MenuButtons>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 623px)' maxDeviceWidth={623}>
                  <IconMenu style={{float: 'right',paddingTop: '5px'}}
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                  >
                    <MenuItem primaryText="About" containerElement={<Link to="/" />}/>
                    <MenuItem primaryText="Experience" containerElement={<Link to="/experience" />}/>
                    <MenuItem primaryText="Projects" containerElement={<Link to="/projects" />}/>
                  </IconMenu>
                </MediaQuery>
              </Header>
              <Content>
                <Route exact path="/" component={About}/>
                <Route path="/experience" component={Jobs}/>
                <Route path="/projects" component={Projects}/>
              </Content>
              
            </Wrapper>
            <Footer>
                <Icons>
                  <Link to="https://www.linkedin.com/in/dipacheco/" style={{margin: 'auto'}}>
                    <img alt="LinkedIn" height="30px" src={linkedin} />
                  </Link>
                  <Link to="https://github.com/diego-pacheco" style={{margin: 'auto'}}>
                    <img alt="Github" height="30px" src={github} />
                  </Link>
                </Icons>
            </Footer>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
