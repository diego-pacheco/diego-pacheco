import React, { Component } from 'react'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper'
import Chip from 'material-ui/Chip'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import InfoIcon from 'material-ui/svg-icons/action/info'
import {red500} from 'material-ui/styles/colors'
import MediaQuery from 'react-responsive'
import Paper from 'material-ui/Paper'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


//@TODO: Move this to styled components
const style = {
  margin: '0 0 -100px',
  padding: '20px 20px 50px'
}

const styleMobile = {
  margin: '0 -45px -100px',
  padding: '20px 20px 50px',
  fontSize: '13px'
}

const styles = {
  chip: {
    margin: 4,
    fontSize: '10px'
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const jobs = [
  {
    company: 'Clevertech',
    from: 'Remote — Since Sep 2014',
    job: 'Javascript Developer',
    description: 'Since I started working at Clevertech, I\'ve being envolved in several project as backend and frontend developer. I\'ve worked designing APIs, communicating with third party services, creating Slack bots, Angular and React apps.',
    avatar: 'clevertech.jpg',
    index: 0,
    chips: [{
      tech: 'NodeJS'
    },{
      tech: 'Express'
    },{
      tech: 'MongoDB'
    },{
      tech: 'ReactJS'
    },{
      tech: 'AngularJS'
    },{
      tech: 'Git'
    },{
      tech: 'PostgreSQL'
    },{
      tech: 'CoffeeScript'
    },{
      tech: 'SlackBot API'
    },{
      tech: 'Redis'
    }]
  },
  {
    company: 'Globant',
    from: 'Remote — Apr 2013 - Sep 2014',
    description: 'While working in Globant, I learned the basics of Javascript, developing two apps for big companies like Deloitte and K12. Main job was working as a frontend developer and help dev lead coordinate with other developers in the team.',
    job: 'Frontend Developer',
    avatar: 'globant.jpg',
    index: 1,
    chips: [{
      tech: 'BackboneJs'
    },{
      tech: 'MarionetteJs'
    },{
      tech: 'LESS'
    },{
      tech: 'SASS'
    },{
      tech: 'Bootstrap'
    },{
      tech: 'Yeoman'
    },{
      tech: 'Gulp'
    },{
      tech: 'Grunt'
    }]
  },
  {
    company: 'Soluciones Linux',
    from: 'Montevideo, Uruguay — Feb 2008 - Apr 2013',
    description: 'Worked as main LAMP developer, where I was in charge of talking with the client, planning and developing the best solution.',
    job: 'Lamp Developer',
    avatar: 'soluciones.jpg',
    index: 2,
    chips: [{
      tech: 'PHP'
    },{
      tech: 'MySQL'
    },{
      tech: 'SVN'
    },{
      tech: 'PostgreSQL'
    },{
      tech: 'JQuery'
    },{
      tech: 'HTML5'
    }]
  },
  {
    company: 'SX Networks',
    from: 'Montevideo, Uruguay — Apr 2003 - Feb 2008',
    description: 'As a Jr PHP developer, I started building small PHP/HTML sites. Over time I developed their first casino referal panel, where stats and payments where processed. Also I was involved in the development the first hispanic community web: Wamba.',
    job: 'LAMP Developer',
    avatar: 'sx.jpg',
    index: 3,
    chips: [{
      tech: 'PHP'
    },{
      tech: 'MySQL'
    },{
      tech: 'SVN'
    },{
      tech: 'PostgreSQL'
    },{
      tech: 'JQuery'
    },{
      tech: 'HTML5'
    }]
  }
]

class Jobs extends Component {
  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= jobs.length - 1,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        {step < jobs.length - 1 && (
        <RaisedButton
          label={'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        )}
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }
  renderChips (chips) {
    return chips.map((chip) => { 
      return (
        <div>
          <MediaQuery query='(min-device-width: 624px)' minDeviceWidth={624}>
            <Chip style={styles.chip}>{chip.tech}</Chip>
          </MediaQuery>
          <MediaQuery query='(max-device-width: 623px)' maxDeviceWidth={623}>
            <Chip style={styles.chip} labelStyle={{fontSize:'10px'}}>{chip.tech}</Chip>
          </MediaQuery>
        </div>
      )
    })
  }
  render() {
    const {finished, stepIndex} = this.state;
    return (
      <div>
        <MediaQuery query='(min-device-width: 624px)' minDeviceWidth={624}>
          <Paper style={style} zDepth={3}>
            <div style={{ margin: 'auto'}}>
              <Stepper activeStep={stepIndex} orientation="vertical">
                {jobs
                  .map((job) => {
                    return (
                      <Step>
                        <StepLabel icon={<InfoIcon color={red500} />}
                          style={{color: red500}}>{job.company}</StepLabel>
                        <StepContent>
                          <Card>
                            <CardHeader
                              title={job.job}
                              subtitle={job.from}
                              avatar={job.avatar}
                            />
                            <CardText>
                              <p>
                                {job.description}
                              </p>
                              <div style={styles.wrapper}>
                                {this.renderChips(job.chips)}
                              </div>
                            </CardText>
                            <CardActions>
                              {this.renderStepActions(job.index)}
                            </CardActions>
                          </Card>
                        </StepContent>
                      </Step>
                    )
                  })}
              </Stepper>
            </div>
          </Paper>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 623px)' maxDeviceWidth={623}>
          <Paper style={styleMobile} zDepth={3}>
            <div style={{ margin: 'auto'}}>
              <Stepper activeStep={stepIndex} orientation="vertical">
                {jobs
                  .map((job) => {
                    return (
                      <Step>
                        <StepLabel icon={<InfoIcon color={red500} />}
                          style={{color: red500}}>{job.company}</StepLabel>
                        <StepContent>
                          <Card>
                            <CardHeader
                              title={job.job}
                              subtitle={job.from}
                              avatar={job.avatar}
                            />
                            <CardText>
                              <p>
                                {job.description}
                              </p>
                              <div style={styles.wrapper}>
                                {this.renderChips(job.chips)}
                              </div>
                            </CardText>
                            <CardActions>
                              {this.renderStepActions(job.index)}
                            </CardActions>
                          </Card>
                        </StepContent>
                      </Step>
                    )
                  })}
              </Stepper>
            </div>
          </Paper>
        </MediaQuery>
      </div>
    );
  }
}

export default Jobs;