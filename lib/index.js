const importJsx = require('import-jsx');
const { h, render } = require('ink');

const App = importJsx('./components/App');

module.exports = render(h(App));
