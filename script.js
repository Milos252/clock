function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

setInterval(() => {
    let today = new Date();
    let time =
        today.getHours() + ':' + today.getMinutes() + ':' + addZero(today.getSeconds());

    let p = document.querySelector('p')

    p.innerText = time
}, 900);
