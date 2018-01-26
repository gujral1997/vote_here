function addRestraunt() {
  var database = firebase.database()
  var restrauntRef = database.ref('/restraunts')
  var restrauntInput = document.getElementById('addRestraunt')
  var restrauntName = restrauntInput.value
  restrauntInput.value = ''
  // return restrauntRef.push().key
  return restrauntRef.push({
    name: restrauntName,
    votes: 0
  })
    .then(function() {
      window.location.reload()
    })
    .catch(function (error) {
      console.log(error)
    })
}
function upVote(key) {
  var database = firebase.database()
  var user = firebase.auth().currentUser
  var userId = user.uid
  var displayName = user.displayName
  // var restrauntVotesRef = database.ref('/restraunts/' + key + '/votes' + userId)
  var restrauntVotesRef = database.ref('/restraunts')
                                  .child(key)
                                  .child('/votes')
                                  .child(userId)
  restrauntVotesRef.push(displayName)
                   .then(function(){
                      window.location.reload()
                   })
                   .catch(function(err){
                     console.log(err)
                   })
}


function downVote(key) {
  var database = firebase.database()
  var user = firebase.auth().currentUser
  var userId = user.uid
  var displayName = user.displayName
  // var restrauntVotesRef = database.ref('/restraunts/' + key + '/votes' + userId)
  var restrauntVotesRef = database.ref('/restraunts')
                                  .child(key)
                                  .child('/votes')
                                  .child(userId)
                                  .remove()
                                  .then(function () {
                                    window.location.reload()
                                  })
                                  .catch(function (err) {
                                    console.log(err)
                                  })
  // restrauntVotesRef.remove(userId)
}
