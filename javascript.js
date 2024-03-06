const hersoDiv = document.querySelector("#heroDiv")
const heroImg = document.querySelector("#heroImg")
var moveIndex = 0

function fwFunction(){
    console.log("fwFun")
    hersoDiv.style.left = moveIndex*15 +"px"
    moveIndex++
    heroImg.setAttribute("src","./assets/hero.jpg")
    if(hersoDiv.style.bottom == '60px'){
        hersoDiv.style.bottom = ''
    }if(hersoDiv.style.top == '60px'){
        hersoDiv.style.top = ''
    }else{}
}

function upFunction(){
    heroImg.setAttribute("src","./assets/badHero.jpg")
    hersoDiv.style.bottom = "60px"
    
}

function downFunction(){
    heroImg.setAttribute("src","./assets/badHero.jpg")
    hersoDiv.style.top = "60px"
}