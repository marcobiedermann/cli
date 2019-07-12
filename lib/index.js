const importJsx = require('import-jsx');
const { render } = require('ink');
const React = require('react');

const App = importJsx('./components/App/index.jsx');

module.exports = render(React.createElement(App));
