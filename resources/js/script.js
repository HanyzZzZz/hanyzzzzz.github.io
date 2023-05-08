document.getElementById("get-in-touch-socials").style.display ='none';

function showSocials () {
    const socials = document.getElementById("get-in-touch-socials");
    const touch = document.getElementById("get-in-touch");
    touch.style.display = 'none';
    socials.style.display ='inline-block';
}


function showGetInTouch () {
    const socials = document.getElementById("get-in-touch-socials");
    const touch = document.getElementById("get-in-touch");
    socials.style.display ='none';
    touch.style.display = 'inline-block';
}

// //////////////////////////===DARK MODE===//////////////////////////
let darkMode = false;
function toggleDarkMode (){
    if(darkMode === true) {
        
        console.log('darkmode ' + darkMode);
        return darkMode = false; 
    } else {
        document.body.style.color = 'red';
        console.log('darkmode ' + darkMode);
        return darkMode = true;
    }
}