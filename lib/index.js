const importJsx = require('import-jsx');
const { h, render } = require('ink');
const React = require('react');

const App = importJsx('./components/App');

module.exports = render(React.createElement(App));
