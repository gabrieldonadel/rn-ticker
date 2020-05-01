import React, { Component } from 'react'
import { Text, Animated } from 'react-native'

const numberRange = Array(10)
  .fill()
  .map((x, i) => i)

const getPosition = (value, height) => parseInt(value, 10) * height * -1

const getTranslateStyle = position => ({
  transform: [
    {
      translateY: position,
    },
  ],
})

class Tick extends Component {
  componentWillMount() {
    this.animation = new Animated.Value(getPosition(this.props.value, this.props.height))
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value || this.props.height !== prevProps.height) {
      Animated.timing(this.animation, {
        toValue: getPosition(this.props.value, this.props.height),
        duration: 1000,
        useNativeDriver: true,
      }).start()
    }
  }

  render() {
    const transformStyle = getTranslateStyle(this.animation)

    return (
      <Animated.View style={transformStyle}>
        {numberRange.map(v => {
          return (
            <Text key={v} style={this.props.textStyle} allowFontScaling={false}>
              {v}
            </Text>
          )
        })}
      </Animated.View>
    )
  }
}

export default Tick
