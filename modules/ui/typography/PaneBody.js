import React, {PropTypes} from 'react'
import Radium from 'radium'
import {palette} from 'app/lib/global-styles'
import Color from 'color'


/**
 * Create a light gray text block when you don't want to draw too much attention to the text.
*/
@Radium
export default class PaneBody extends React.Component {
  static PropTypes = {
    /**
     * Applies suitable hover, focus and active styles
    */
    isClickable: PropTypes.bool,
  }

  static defaultProps = {
    isClickable: false
  }

  render() {
    const {children, isClickable, onClick} = this.props
    const computedStyle = onClick || isClickable ? clickableStyle : baseStyle

    return (
      <div style={computedStyle}>{children}</div>
    )
  }
}

const baseStyle = {
  color: palette.GRAYLIGHT,
  paddingBottom: '0.8em',
  display: 'block',
  fontSize: 12
}

const clickableStyle = {
  color: Color(palette.GRAYLIGHT).darken(0.3).rgbString(),
  ...baseStyle,
  ':hover': {
    color: Color(palette.GRAYLIGHT).darken(0.3).rgbString(),
    cursor: 'pointer'
  }
}
