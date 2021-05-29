// This is an example of how you might use objective validation helpers
// in your own code. You don't have to, but you'll often want to!
function isBed(testString = '') {
  return testString.toLowerCase() === 'bed';
}

function isWardrobe(testString = '') {
  return testString.toLowerCase() === 'wardrobe';
}

function isChair(testString = '') {
  return testString.toLowerCase() === 'chair';
}

module.exports = {
  isBed, isChair, isWardrobe
};
