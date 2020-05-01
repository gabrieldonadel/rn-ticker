import React, { Component } from 'react'
import { Text, View } from 'react-native'
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
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }

  render() {
    const { auxiliarText, textStyle } = this.props
    const wrapStyle = { height: textStyle.lineHeight }
    const digits = this.state.number.toString().split('')
    return (
      <View style={styles.container}>
        <View style={[styles.row, wrapStyle]}>
          {digits.map((digit, index) => {
            return (
              <>
                <Tick value={digit} height={textStyle.lineHeight} textStyle={textStyle} />
                {(digits.length - 1 - index) % 3 == 0 && digits.length - 1 - index != 0 && (
                  <Text>,</Text>
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

export default Ticker
