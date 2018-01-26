function addRestraunt(restrauntName) {
  var database = firebase.database()
  var restrauntRef = database.ref('/')

  // return restrauntRef.push().key
  return restrauntRef.push('Burger King')
}
