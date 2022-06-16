setInterval(() => {
    let today = new Date();
    let time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    let p = document.querySelector('p')

    p.innerText = time
}, 900);
