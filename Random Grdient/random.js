const contanier=document.getElementById('contanier')
const colortext=document.querySelector('.colortext')
const body =document.querySelector('body')
const colorsfile=[
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
]
//random color function
function getGradient(){
    let color='#'
    for (let i=0;i<6;i++){
        let randomNumbers=Math.trunc(Math.random()*colorsfile.length)
        color+=colorsfile[randomNumbers]  
    }
    return color
}


function setGradient(){
    const color1=getGradient()
    const color2=getGradient()
    const randomDeg=Math.trunc(Math.random()*360)
    const bgcolor=`linear-gradient(
        ${randomDeg}deg,
        ${color1},
        ${color2}
    )`
        body.style.background=bgcolor
        colortext.textContent=bgcolor
}
contanier.addEventListener('click',setGradient)

