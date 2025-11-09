let color = '#'
let intervalId ;
let hex = '0123456789ABCDEF'

const randomColor = function() {
    let hex = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color
}


const startChangingColor = function () {
    console.log('started');

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
    
    if (!intervalId){
        intervalId = setInterval(changeBgColor, 2000);
    }
    
    }
    
}

const stopChangingColor = function() {
    console.log('stopped');
    clearInterval(intervalId);
    intervalId = null; // reset
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)