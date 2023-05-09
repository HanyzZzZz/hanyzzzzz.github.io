// document.getElementById("get-in-touch-socials").style.display ='none';

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
        document.body.style.backgroundColor = '#ffffff';
        document.getElementById('darkMode').style.display = 'block';
        document.getElementById('lightMode').style.display = 'none';
        for(let i = 0; i < document.getElementsByTagName('h1').length; i++){
            document.getElementsByTagName('h1')[i].style.color = '#202124';
        }
        for(let i = 0; i < document.getElementsByTagName('h2').length; i++){
            document.getElementsByTagName('h2')[i].style.color = '#202124';
        }
        for(let i = 0; i < document.getElementsByTagName('h3').length; i++){
            document.getElementsByTagName('h3')[i].style.color = '#202124';
        }
        for(let i = 0; i < document.getElementsByTagName('h4').length; i++){
            document.getElementsByTagName('h4')[i].style.color = '#202124';
        }
        for(let i = 0; i < document.getElementsByTagName('h5').length; i++){
            document.getElementsByTagName('h5')[i].style.color = '#202124';
        }
        for(let i = 0; i < document.getElementsByTagName('p').length; i++){
            document.getElementsByTagName('p')[i].style.color = '#202124';
        }
        for(let i = 0; i < document.getElementsByTagName('a').length; i++){
            document.getElementsByTagName('a')[i].style.color = '#202124';
        }
        for(let i = 0; i < document.getElementsByClassName('material-symbols-outlined').length; i++){
            document.getElementsByClassName('material-symbols-outlined')[i].style.color = '#202124';
        }
        console.log('darkmode ' + darkMode);
        return darkMode = false; 
    } else {
        document.body.style.backgroundColor = '#10162f';
        document.getElementById('darkMode').style.display = 'none';
        document.getElementById('lightMode').style.display = 'block';
        for(let i = 0; i < document.getElementsByTagName('h1').length; i++){
            document.getElementsByTagName('h1')[i].style.color = 'white';
        }
        for(let i = 0; i < document.getElementsByTagName('h2').length; i++){
            document.getElementsByTagName('h2')[i].style.color = 'white';
        }
        for(let i = 0; i < document.getElementsByTagName('h3').length; i++){
            document.getElementsByTagName('h3')[i].style.color = 'white';
        }
        for(let i = 0; i < document.getElementsByTagName('h4').length; i++){
            document.getElementsByTagName('h4')[i].style.color = 'white';
        }
        for(let i = 0; i < document.getElementsByTagName('h5').length; i++){
            document.getElementsByTagName('h5')[i].style.color = 'white';
        }
        for(let i = 0; i < document.getElementsByTagName('p').length; i++){
            document.getElementsByTagName('p')[i].style.color = 'white';
        }
        for(let i = 0; i < document.getElementsByTagName('a').length; i++){
            document.getElementsByTagName('a')[i].style.color = 'white';
        }
        for(let i = 0; i < document.getElementsByClassName('material-symbols-outlined').length; i++){
            document.getElementsByClassName('material-symbols-outlined')[i].style.color = 'white';
        }
        console.log('darkmode ' + darkMode);
        return darkMode = true;
    }
}