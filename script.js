
document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.main-image');
    var staticImg = document.querySelector('.static-image');
    var gifImg = document.querySelector('.gif-image');
    var sound = document.getElementById('hoverSound');
    
    var isActivated = false;  
    var isPlaying = false;    
    
    if (!container || !sound) {
        console.error('Элементы не найдены');
        return;
    }
    
    sound.volume = 0.5;

    function turnOn() {
        if (!isPlaying && isActivated) {
            if (staticImg && gifImg) {
                staticImg.style.opacity = '0';
                gifImg.style.opacity = '1';
            }
            sound.currentTime = 0;
            sound.play();
            isPlaying = true;

        }
    }
    
    function turnOff() {
        if (isPlaying && isActivated) {
            if (staticImg && gifImg) {
                staticImg.style.opacity = '1';
                gifImg.style.opacity = '0';
            }
            sound.pause();
            sound.currentTime = 0;
            isPlaying = false;
        }
    }
 
    container.addEventListener('click', function() {
        if (!isActivated) {
            isActivated = true;  // Активируем систему
            console.log('Система активирована!');
            
            if (staticImg && gifImg) {
                staticImg.style.opacity = '0';
                gifImg.style.opacity = '1';
            }
            sound.currentTime = 0;
            sound.play();
            isPlaying = true;
        }
    });
    
    container.addEventListener('mouseenter', function() {
        if (isActivated) {  
            turnOn();
        }
    });
    
    container.addEventListener('mouseleave', function() {
        if (isActivated) { 
            turnOff();
        }
    });
    
});