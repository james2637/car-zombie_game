document.onkeydown = function(key){
    console.log("key code is : ", key.keyCode)

    if (key.keyCode == 32){
       jump = document.getElementById('carcng');
       jump.classList.add('jumpcar');
       setTimeout(() => {
           jump.classList.remove('jumpcar');
       }, 600);
    }

    if (key.keyCode == 32){
       tyre = document.querySelector('.tyre');
       tyre.classList.add('jumptyre');
       setTimeout(() => {
           tyre.classList.remove('jumptyre');
       }, 600);
    }

    if (key.keyCode == 38){
       jump = document.getElementById('carcng');
       jump.classList.add('jumpcar');
       setTimeout(() => {
           jump.classList.remove('jumpcar');
       }, 600);
    }

    if (key.keyCode == 38){
       tyre = document.querySelector('.tyre');
       tyre.classList.add('jumptyre');
       setTimeout(() => {
           tyre.classList.remove('jumptyre');
       }, 600);
    }

    if (key.keyCode == 72){
    var audio = document.createElement('audio');
    audio.setAttribute('src','hornsound.mp3');
    audio.play();

    }
}

// function changecar() {
//     console.log('the button was clicked');

//     var image = document.getElementById('carcng');
//     if (image.src.match("car-body1")) {
//         image.src ="img/car-body.png";
//         image.classList.replace("carbody","carbody2");
//     }
//     else{
//         image.src ="img/car-body1.png";
//         image.classList.replace("carbody2","carbody");
//     }

// }

    setInterval(() => {

     car = document.getElementById('carcng') ;
     obstacle = document.querySelector('.obstacle');
     gameOver = document.querySelector('.gameover');

     carComStyleLeft = parseInt( window.getComputedStyle(car).getPropertyValue('left'));
     carComStyleTop = parseInt( window.getComputedStyle(car).getPropertyValue('top'));
     obsComStyleLeft = parseInt( window.getComputedStyle(obstacle).getPropertyValue('left'));
     obsComStyleTop = parseInt( window.getComputedStyle(obstacle).getPropertyValue('top'));
    
        // console.log(carComStyleLeft);
        // console.log(carComStyleTop);
        // console.log(obsComStyleLeft);
        // console.log(obsComStyleTop);

    offsetx = Math.abs(carComStyleLeft-obsComStyleLeft) ; 
    offsety = Math.abs(carComStyleTop-obsComStyleTop) ;
    
    // console.log(offsetx, offsety);

    if (offsetx < 356 && offsety < 130) {
        gameOver.style.visibility = "visible";
    }

    else{
        gameOver.style.visibility = "hidden"; 
    }
}, 300);
    
    
//         ANOTHER WAY FOR CAR JUMP

// document.addEventListener('keydown',function(e) {
//     if (e.code == 'ArrowUp') {
//         jump = document.querySelector('.carbody ');
//            jump.classList.add('jumpcar');
//            setTimeout(() => {
//                jump.classList.remove('jumpcar');
//            }, 500);
//     }

//     if (e.code == 'ArrowUp') {
//         tyre = document.querySelector('.tyre');
//           tyre.classList.add('jumptyre');
//           setTimeout(() => {
//               tyre.classList.remove('jumptyre');
//           }, 500);
//     }
// })



 setInterval(() => {
    car = document.querySelector('.carbody ');
    gameOver = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    
    
 }, 100);

