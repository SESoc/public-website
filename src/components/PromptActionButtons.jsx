import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import 'components/styles/PromptActionButtons.scss'

// Prompt Text + Action Button
// eg.    Have an event in mind?      [Suggest an Event]
const Action = (props) => (
  <>
    <p className="no-bottom-space"> {props.action.prompt} </p>
    <Button
      variant="secondary"
      className="way-btn"
      href={props.action.link}
      target="_blank"
    >
      {props.action.buttonText}
    </Button>
  </>
)

Action.propTypes = {
  action: PropTypes.object.isRequired,
}

class PromptActionButtons extends Component {
  render() {
    return (
      <div className="action-grid">
        {this.props.actions.map((action, index) => (
          <Action action={action} key={`action-prompt-${index}`} />
        ))}
      </div>
    )
  }
}

PromptActionButtons.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PromptActionButtons
