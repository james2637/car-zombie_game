document.onkeydown = function(up){
    console.log("key code is : ", up.keyCode)

    if (up.keyCode == 32){
       jump = document.querySelector('.carbody ');
       jump.classList.add('jumpcar');
       setTimeout(() => {
           jump.classList.remove('jumpcar');
       }, 500);
    }

    if (up.keyCode == 32){
       tyre = document.querySelector('.tyre');
       tyre.classList.add('jumptyre');
       setTimeout(() => {
           tyre.classList.remove('jumptyre');
       }, 500);
    }
}
