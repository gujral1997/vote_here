function addRestraunt() {
  var database = firebase.database()
  var restrauntRef = database.ref('/restraunts')
  var restrauntInput = document.getElementById('addRestraunt')
  var restrauntName = restrauntInput.value
  restrauntInput.value = ''
  // return restrauntRef.push().key
  return restrauntRef.push(restrauntName)
}
