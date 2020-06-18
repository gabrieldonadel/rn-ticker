# rn-ticker

A simple to use react native ticker.

[![npm package][npm-image]][npm-url] [![npm downloads](https://img.shields.io/npm/dt/rn-ticker.svg)](https://www.npmjs.com/package/rn-ticker)

## Install

```
yarn add react-native-ticker
npm install react-native-ticker
```

## How to use

```
  <Ticker
    repetitions={15}
    number={100}
    textStyle={{ lineHeight: 20 }}
    auxiliarText={'days have passed '}
  />
```

## API

### Ticker

| Properties   | Descrition                                                  | Type   | Default |
| ------------ | ----------------------------------------------------------- | ------ | ------- |
| number       | limits the maximum number of characters that can be entered | number | `0`     |
| textStyle    | custom style to text                                        | Object | -       |
| auxiliarText | custom style to text                                        | string | -       |
| repetitions  | number of iteractions until reaching the number prop        | number | `0`     |

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/npm/v/rn-ticker.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/rn-ticker
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[wiki]: https://github.com/yourname/yourproject/wiki
