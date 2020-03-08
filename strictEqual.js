function strictEqual(variableOne, variableTwo) {
  if (typeof variableOne == typeof variableTwo) {
    if (variableOne == variableTwo) {
      return true
    }
  } return false
}

module.exports = strictEqual