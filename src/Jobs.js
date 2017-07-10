import config from './config'
import React, { Component } from 'react'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper'
import axios from 'axios'
import Chip from 'material-ui/Chip'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import InfoIcon from 'material-ui/svg-icons/action/info'
import {red500} from 'material-ui/styles/colors'
import MediaQuery from 'react-responsive'
import Paper from 'material-ui/Paper'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'

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

class Jobs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      jobs: [],
      stepIndex: 0
    }
    this.renderStepActions = this.renderStepActions.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
  }

  getInitialState () {
    return {
      jobs: [],
      stepIndex: 0
    }
  }

  componentDidMount () {
    axios.get(`${config.apiUrl}/jobs`)
    .then((response) => {
      this.setState({jobs: response.data.jobs})
    })
    .catch((err) => {
      console.log(err)
    })
  }
  /*
  * Gets stepIndex from state and increments it so next step (Job) is shown
  */
  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1
    });
  }
  /*
  * Gets stepIndex from state and decrements it so previous step (Job) is shown
  */
  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }
  /*
  * @param {Integer} step
  * Returns to render the action buttons for each step
  * Shows next back according to step param
  */
  renderStepActions(step) {
    const {stepIndex, jobs} = this.state;
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
    )
  }
  /*
  * @param  {Array} chips
  * Returns for rendering chips markup
  */
  renderChips (chips) {
    return chips.map((chip) => { 
      return (
        <div key={Math.random()}>
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
    const { stepIndex, jobs } = this.state;
    return (
      <div>
        <MediaQuery query='(min-device-width: 624px)' minDeviceWidth={624}>
          <Paper style={style} zDepth={3}>
            <div style={{ margin: 'auto'}}>
              <Stepper activeStep={stepIndex} orientation="vertical">
                {jobs
                  .map((job) => {
                    return (
                      <Step key={Math.random()}>
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
                      <Step key={Math.random()}>
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
    )
  }
}

export default Jobs
