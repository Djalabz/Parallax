
// MAIN TITLE // 

// const letters = document.getElementsById('title-main')


// function animateLetters() {
//     for (i=0; i<letters.length; i++) {
//         delay = (i*80).toString();
//         letters[i].style.animation = 'pulse 0.3s ' + delay + 'ms';
//     } 
// }

// var intervalLetters = setInterval(animateLetters, 2000)



// PARALLAX //



const tree1 = document.getElementsByClassName('trees-1')[0]
const treeMobile = document.getElementsByClassName('trees-mobile')[0]
const mountain1 = document.getElementsByClassName('mountains-1')[0]
const mountain2 = document.getElementsByClassName('mountains-2')[0]
const mountain3 = document.getElementsByClassName('mountains-3')[0]
const mountain4 = document.getElementsByClassName('mountains-4')[0]

const moon = document.getElementsByClassName('moon')[0]
const clouds = document.querySelectorAll('.cloud')

const titleMain = document.getElementById('title-main')


   // MAIN TITLE VIVUS DRAWING ANIMATION //


new Vivus('title-main', {type: 'delayed', duration: 90},
    function (obj) {
        obj.el.classList.add("finished")
    }
)


// function cloudsIdle() {
    
//     let offset = window.scrollY

//     if (offset < 300) {
//         for (i=0; i<5; i++) {
//             clouds[i].style.animation = "cloudsIdle 10s forwards";
//         }
        
//     }
// }


function parallaxScroll() {

    let offset = window.scrollY

    console.log()

    if (offset < 490) {

        titleMain.style.display = 'flex';
        titleMain.style.marginTop = offset * 0.4 + 'px'; 

        mountain1.style.display = 'block';
        mountain2.style.display = 'block';
        mountain3.style.display = 'block';
        mountain4.style.display = 'block';

        moon.style.display = 'block';

        tree1.style.marginTop = - offset + 'px';
        treeMobile.style.marginTop = -(offset/10) + 'vh';

        mountain1.style.bottom = offset * 0.5 + 'px';
        mountain2.style.bottom = offset * 0.35 + 'px';
        mountain3.style.bottom = offset * 0.25 + 'px';
        mountain4.style.bottom = offset * 0.2 + 'px';
        
        moon.style.marginTop = offset/1.6 + 'px';

        clouds[0].style.left = -(offset/2) -18 + 'px' ;
        clouds[1].style.left = -(offset)-10 + 'px' ;
        clouds[2].style.left = 140-(offset/1.3) + 'px' ;
        clouds[3].style.right = -14-(offset/1.3) + 'px' ;
        clouds[4].style.right = -20-(offset) + 'px' ;


    } else {        

        titleMain.style.display = 'none';

        tree1.style.marginTop = - offset + 'px';
        treeMobile.style.marginTop = -(offset/10) + 'vh';

        mountain1.style.display = 'none';
        mountain2.style.display = 'none';
        mountain3.style.display = 'none';
        mountain4.style.display = 'none';
        moon.style.display = 'none';
    } 
}



document.addEventListener('scroll', parallaxScroll);
// window.addEventListener('load', cloudsIdle);



// NAVBAR and BUTTON //



const navBtn = document.querySelectorAll(".navBtn");
const menuList = document.querySelectorAll(".menu-list");

const glow = document.getElementsByClassName('glow');
const glowWrapper = document.getElementsByClassName('glow-wrapper');


function handleMenu() {
    if (menuList[0].classList.contains('open')) {
        menuList[0].classList.remove('open');
        menuList[0].classList.add('close');

        glowWrapper[0].style.animation = 'move-glow2 0.8s forwards';

    } else {
        menuList[0].classList.remove('close');
        menuList[0].classList.add('open');

        glowWrapper[0].style.display = 'block'
        glowWrapper[0].style.animation = 'move-glow 0.8s forwards';
    }
}

navBtn[0].addEventListener("click", handleMenu);



///// GALLERY /////



const allCards = document.querySelectorAll(".card");
const rightArrow = document.querySelector(".arrow.right");
const leftArrow = document.querySelector(".arrow.left");
const current = document.getElementsByClassName('current')



const Decrement = () => {
    const nextCard = current[0].nextElementSibling
    const prevCard = current[0].previousElementSibling

    if (prevCard.previousElementSibling) {
        current[0].classList.add('next')
        current[0].classList.remove('current')

        nextCard.classList.remove('next')

        prevCard.previousElementSibling.classList.add('prev')

        prevCard.classList.add('current')
        prevCard.classList.remove('prev')
    }
}


const Increment = () => {
    const nextCard = current[0].nextElementSibling
    const prevCard = current[0].previousElementSibling

    if (nextCard.nextElementSibling) {
        current[0].classList.add('prev')
        current[0].classList.remove('current')

        prevCard.classList.remove('prev')

        nextCard.nextElementSibling.classList.add('next')

        nextCard.classList.add('current')
        nextCard.classList.remove('next')
    } 
}

rightArrow.addEventListener("click", Increment)
leftArrow.addEventListener("click", Decrement)



////// CONTACT FORM AJAX CALL //////



const form = document.querySelector("form")

form.onsubmit = (e) => {
  e.preventDefault();

  let xhr = new XMLHttpRequest();

  xhr.open("POST", "./php/contact-form.php", true);

  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){

      let response = xhr.response;
      console.log(response)

      if (response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){

      } else {
            form.classList.add('animate__bounceOut')
            form.style.animationFillMode = 'forwards'

            setTimeout(() => {
                const successMessage = document.createElement('p');

                successMessage.innerText = 'Thank you for your mail !';
                successMessage.style.fontSize = '2.5rem';
                successMessage.style.marginTop = '12rem';
                
                successMessage.classList.add('animate__bounceIn');

                form.before(successMessage);
            }, 1000)
      }
    }
  }

  let formData = new FormData(form);
  xhr.send(formData);

}





