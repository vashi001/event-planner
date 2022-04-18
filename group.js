firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("signup.html")
    }
})


function logout() {
    firebase.auth().signOut()
}

const countdown = () => {
    const countDate = new Date("May 25,2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textday = Math.floor(gap / day);
    const texthour = Math.floor((gap % day) / hour);
    const textminute = Math.floor((gap % hour) / minute);
    const textsecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerHTML = textday;
    document.querySelector(".hour").innerHTML = texthour;
    document.querySelector(".minute").innerHTML = textminute;
    document.querySelector(".second").innerHTML = textsecond;
};

setInterval(countdown, 1000);





