const { Box, Text } = require('ink');
const BigText = require('ink-big-text');
const Gradient = require('ink-gradient');
const SelectInput = require('ink-select-input').default;
const open = require('open');
const React = require('react');

function createItems(items) {
  return items.map((item) => ({
    ...item,
    key: item.url || item.label,
  }));
}

const items = createItems([
  {
    label: '🌎 Website',
    url: 'https://marcobiedermann.com',
  },
  {
    label: '💻 GitHub',
    url: 'https://github.com/marcobiedermann',
  },
  {
    label: '🐦 Twitter',
    url: 'https://twitter.com/intent/user?screen_name=BiedermannMarco',
  },
  {
    label: '🧑‍💼 LinkedIn',
    url: 'https://www.linkedin.com/in/biedermannmarco',
  },
  {
    label: '🚪 Quit',
    action() {
      process.exit();
    },
  },
]);

function handleSelect(item) {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
}

const App = () => (
  <Box flexDirection="column">
    <Gradient name="pastel">
      <BigText text="Marco Biedermann" font="tiny" />
    </Gradient>
    <Box margin={1}>
      <Text>Full-Stack JavaScript Engineer</Text>
    </Box>
    <SelectInput items={items} onSelect={handleSelect} />
  </Box>
);

module.exports = App;
