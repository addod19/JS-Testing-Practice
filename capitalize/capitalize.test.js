const capitalize = require('./capitalize');

test('The first letter of each word should be capital', () => {
  expect(capitalize('welcome to javascript testing')).toMatch('Welcome To Javascript Testing')
})