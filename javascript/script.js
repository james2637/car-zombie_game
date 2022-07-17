score = 0;
document.onkeydown = function (key) {
    // console.log("key code is : ", key.keyCode)

    if (key.keyCode == 32) {
        jump = document.getElementById('carcng');
        jump.classList.add('jumpcar');
        setTimeout(() => {
            jump.classList.remove('jumpcar');
        }, 500);
    }

    if (key.keyCode == 32) {
        tyre = document.querySelector('.tyre');
        tyre.classList.add('jumptyre');
        setTimeout(() => {
            tyre.classList.remove('jumptyre');
        }, 500);
    }

    if (key.keyCode == 38) {
        jump = document.getElementById('carcng');
        jump.classList.add('jumpcar');
        setTimeout(() => {
            jump.classList.remove('jumpcar');
        }, 500);
    }

    if (key.keyCode == 38) {
        tyre = document.querySelector('.tyre');
        tyre.classList.add('jumptyre');
        setTimeout(() => {
            tyre.classList.remove('jumptyre');
        }, 500);
    }

}


intervalid = setInterval(() => {

    car = document.getElementById('carcng');
    obstacle = document.querySelector('.obstacle');
    gameOver = document.querySelector('.gameover');
    tyre1 = document.querySelector('.tyre1');
    tyre2 = document.querySelector('.tyre2');
    tyre = document.querySelector('.tyre');
    background = document.querySelector('.background');
    

    carComStyleTop = parseInt(window.getComputedStyle(car).getPropertyValue('top'));
    obsComStyleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));
    obsComStyleTop = parseInt(window.getComputedStyle(obstacle).getPropertyValue('top'));


    offsety = Math.abs(carComStyleTop - obsComStyleTop);

    if (obsComStyleRight > 726 && obsComStyleRight < 1088 && offsety < 100) {
        // console.log("gya");
        gameOver.style.visibility = "visible";
        obstacle.classList.add('obstaclestop');
        tyre1.classList.remove('tyre1-ani');
        tyre2.classList.remove('tyre2-ani');
        background.classList.remove('background-ani');
        car.classList.add('jumpstop');
        tyre.classList.add('jumpstop');
        clearInterval(intervalid);
        if (localStorage.getItem("score") < score) {

            localStorage.setItem("score", score);
        }
    }

    else {
        score += 1;
        // console.log(score);
        document.querySelector('.score').innerText = 'Your score: ' + score;
    }

    document.querySelector('.Gm-score').innerText = 'Your score: ' + score; 
    // console.log(localStorage.getItem("score"));
    document.querySelector('.hgscore').innerText = 'High score :' + (localStorage.getItem("score"))


}, 100);




