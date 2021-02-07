import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'components/styles/Footer.scss'

class Footer extends Component {
  render() {
    return (
      <div className={`footer theme-${this.props.color}`}>
        Have any questions? You can reach us on the{' '}
        <a
          className="link"
          href="https://www.facebook.com/uwsesoc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>SE Society Facebook Page</b>
        </a>
        , or by email{' '}
        <a
          className="link"
          href="mailto:se-soc@uwaterloo.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>se-soc@uwaterloo.ca</b>
        </a>
        .
      </div>
    )
  }
}

Footer.propTypes = {
  color: PropTypes.string.isRequired,
}

export default Footer
