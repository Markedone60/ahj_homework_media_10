import checkLocation from "../components/checkLocation";

test.each([
  ['valid input 1', '51.50851, −0.12572', true],
  ['valid input 2', '51.50851,−0.12572', true],
  ['invalid input 1', '123 123', false],
])(('Validate each location'), (_, input, expected) => {
  expect(checkLocation(input)).toBe(expected);
});