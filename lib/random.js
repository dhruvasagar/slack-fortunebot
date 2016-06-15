module.exports = function(probability, fn) {
  var randomness = Math.random();
  if (randomness > probability) {
    fn();
  }
}
