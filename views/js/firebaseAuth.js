function signInWithGoogle() {
  var googleAuthProvider = new firebase.auth.GoogleAuthProvider
  firebase.auth().signInWithPopup(googleAuthProvider)
    .then(function(data) {
      console.log(data)
      var photoURL = data.additionalUserInfo.profile.picture

      var myName = 'Ansh Gujral'
      var idToken = data.credential.idToken
      localStorage.setItem('firebase_idToken', idToken)
      localStorage.setItem('google_photo', photoURL)

      document.getElementById('google-pic')
        .setAttribute('src', photoURL)

    })
    .catch(function(error) {
      console.log(error)
    })
}
function checkIfLoggedIn() {
  if (localStorage.getItem('firebase_idToken')) {
    document.getElementById('gone')
      .setAttribute('style', 'display: none; visibility: hidden')
    document.getElementById('google-pic')
    .setAttribute('src', localStorage.getItem('google_photo'))
  } else {
    document.getElementById('gone')
      .setAttribute('style', 'display: inline-block; visibility: visible')
  }
}
checkIfLoggedIn()
