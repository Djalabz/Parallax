//// PARALLAX // MAIN TITLE VIVUS DRAWING ANIMATION ////

const parallax = () => {


    const tree1 = document.getElementsByClassName('trees-1')[0]
    const treeMobile = document.getElementsByClassName('trees-mobile')[0]
    const mountain1 = document.getElementById('m1')
    const mountain2 = document.getElementById('m2')
    const mountain3 = document.getElementById('m3')
    const mountain4 = document.getElementById('m4')

    const mountains = document.querySelectorAll('.mountains')

    const moon = document.getElementsByClassName('moon')[0]
    const clouds = document.querySelectorAll('.cloud')
    const birds = document.getElementsByClassName('birds-container')[0]

    const titleMain = document.getElementById('title-main')
    const titlePortfolio = document.getElementsByClassName('title portfolio')[0]




    function parallaxScroll() {

        let offset = window.scrollY;

        let moonOffset = moon.offsetTop;
        let treesOffset = tree1.offsetTop;
        let treesMobileOffset = treeMobile.offsetTop;

        let unitHeight = innerHeight/100;
        
        tree1.style.marginTop = - offset + 'px';
        treeMobile.style.marginTop = -(offset/8) + 'vh';

        titleMain.style.display = 'none';

        for (i=0; i<mountains.length; i++) {
            mountains[i].style.display = 'none';
        }

        moon.style.display = 'none';

        // if ((unitHeight*70) > offset)

        if (offset < 500) {
                
            titleMain.style.display = 'flex';
            titleMain.style.marginTop = offset * 0.4 + 'px'; 

            titlePortfolio.style.opacity = '0';

            
            for (i=0; i<mountains.length; i++) {
                mountains[i].style.display = 'block';
            }

            moon.style.display = 'block';

            mountain1.style.bottom = offset * 0.5 + 'px';
            mountain2.style.bottom = offset * 0.35 + 'px';
            mountain3.style.bottom = offset * 0.25 + 'px';
            mountain4.style.bottom = offset * 0.2 + 'px';
            
            moon.style.marginTop = offset/8 + 'px';

            birds.style.marginTop = offset/2 + 'px';

            clouds[0].style.left = -(offset/2) -18 + 'px' ;
            clouds[1].style.left = -(offset)-10 + 'px' ;
            clouds[2].style.left = 140-(offset/1.3) + 'px' ;
            clouds[3].style.right = -14-(offset/1.3) + 'px' ;
            clouds[4].style.right = -20-(offset) + 'px' ;
        
        }  else if (offset > 850) {

            titlePortfolio.style.opacity = '1';
            titlePortfolio.classList.add('animate__animated', 'animate__fadeInDown')
            titlePortfolio.style.setProperty('--animate-duration', '2.5s')
            titlePortfolio.style.animationFillMode = 'forwards';

        }
    }
}

export default parallax;