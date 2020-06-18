import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Tick from './Tick'

import styles from './TickerStyle'

class Ticker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: this.props.number - this.props.repetitions,
    }
  }

  componentDidMount() {
    this.handleTotalNotesSent()
  }

  handleTotalNotesSent = async () => {
    for (let i = 0; i < this.props.repetitions; i++) {
      this.setState({
        number: this.state.number + 1,
      })
      await new Promise((resolve) => setTimeout(resolve, this.props.counterSpeed))
    }
  }

  getHeight(style) {
    if (style.lineHeight) {
      return style.lineHeight
    }
    if (style.fontSize) {
      return style.fontSize
    }
    return 20
  }

  render() {
    const { auxiliarText, textStyle } = this.props
    const height = this.getHeight(textStyle)
    const wrapStyle = { height }
    const digits = this.state.number.toString().split('')
    return (
      <View style={styles.container}>
        <View style={[styles.row, wrapStyle]}>
          {digits.map((digit, index) => {
            return (
              <>
                <Tick value={digit} height={height} textStyle={textStyle} />
                {(digits.length - 1 - index) % 3 == 0 && digits.length - 1 - index != 0 && (
                  <Text textStyle={textStyle}>,</Text>
                )}
              </>
            )
          })}
          <View>
            <Text style={textStyle} allowFontScaling={false}>
              {auxiliarText}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

Ticker.propTypes = {
  number: PropTypes.number,
  counterSpeed: PropTypes.number,
  repetitions: PropTypes.number,
  textStyle: PropTypes.shape({}),
}

Ticker.defaultProps = {
  number: 100,
  counterSpeed: 1000,
  intervalBetweenAnimations: 1000,
  textStyle: {},
  repetitions: 15,
}

export default Ticker
