document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault()

})

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        location.replace("group.html")
    }
})

function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        })
}