function checkIfLoggedIn() {
  var user = firebase.auth().currentUser
  if (user) {
    document.getElementById('google-signin')
    .setAttribute('style', 'display: inline-block; visibility: hidden')
    document.getElementById('signout')
      .setAttribute('style', 'display: inline-block; visibility: visible')
  } else {
    document.getElementById('google-signin')
      .setAttribute('style', 'display: inline-block; visibility: visible')
    document.getElementById('signout')
      .setAttribute('style', 'display: none; visibility: hidden')
  }
}
checkIfLoggedIn()

function signOut() {

  document.getElementById('google-pic')
  .setAttribute('src', '')
  checkIfLoggedIn()
}

function signInWithGoogle() {
  var googleAuthProvider = new firebase.auth.GoogleAuthProvider
  firebase.auth().signInWithPopup(googleAuthProvider)
    .then(function(data) {
      console.log(data)
      var photoURL = data.additionalUserInfo.profile.picture

      var myName = 'Ansh Gujral'
      var idToken = data.credential.idToken


      document.getElementById('google-pic')
        .setAttribute('src', photoURL)
        checkIfLoggedIn()
    })
    .catch(function(error) {
      console.log(error)
    })
}
