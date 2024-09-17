let menubar= document.queeryselector('#menubar');

let navbar = document.querySelector('.navbar');

menubar.onclick = ()=>{
    menubar.classlist.toggle('fa-xmark');
    navbar.classlist.toggle('active');
}

window.onscroll = ()=>{


    if(window.scrollY > 0){
       document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active'); 
    }
    menubar.classlist.remove('fa-xmark');
    navbar.classlist.remove('active');
}

window.onload = ()=>{


    if(window.scrollY > 0){
       document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active'); 
    }
}

document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
}

document.querySelector('.home').onmousemove = (e) => {
    document.querySelectorAll('.home-parallax').forEach(Element =>{
        let speed = Element.getAttribute('data-speed');

        let x= (window.innerWidth - e.pageX * speed) / 90;
        let y= (window.innerHeight - e.pageY * speed) / 90;

        Element.style.transform = 'translateX(${y}px) translateY(${x}px)';
    })
}

document.querySelector('.home').onmouseleave = (e) => {
    document.querySelectorAll('.home-parallax').forEach(Element =>{

        Element.style.transform = 'translateX(0px) translateY(0px)';
    })
}

let wrapper = document.querySelector('.wrapper-box');
let activeBox = wrapper.querySelectorAll('.box');
let activeLable = document.querySelector('.activecircle').querySelectorAll('.fa-circle');
let nextBtn = document.querySelector('.NextBtn');
let preBtn = document.querySelector('#preBtn');

let indexNo = 0;

NextBtn.onclick = ()=>{
    indexNo++;
    changeBox();
}

pretBtn.onclick = ()=>{
    indexNo--;
    changeBox();
}

let changeBox = () =>{
    if( indexNo > activeBox.length-1){
        indexNo = 0;
    } else if(indexNo < 0){
        indexNo = activeBox.length -1;
    }
    
    for(let i=0; i < activeBox.length; i++){
        if (i === indexNo){
            activeBox[i].classList.add('active');
            activeLable[i].classList.add('fa-solid');

            if(window.screen.width > 768){
                
                wrapper.style.transform = 'translatex(${indexNo* -250}px)';
            }
        
        }
        
        else{
            activeBox[i].classList.remove('active');
            activeLable[i].classList.remove('fa-solid');
    }
}

}


