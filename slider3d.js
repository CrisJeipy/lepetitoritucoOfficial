const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');





class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArrays = [...items];

    }

    

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) =>{
            el.classList.add(`gallery-item-${i+1}`)
        })
    }

    setCurrentState(direction) {
        if (direction.className == 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop())
        }

        else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }



   /*  setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        })
    } */

  /*   useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener(`click`, e => {
                e.preventDefault();
                this.setCurrentState(control);
            })
        })
    } */

}

const next = () => {

/*    const item1 = document.querySelector('.gallery-item-1');
const item2 = document.querySelector('.gallery-item-2');
const item3 = document.querySelector('.gallery-item-3');
const item4 = document.querySelector('.gallery-item-4');
const item5 = document.querySelector('.gallery-item-5');
const item6 = document.querySelector('.gallery-item-6');

    item1.className = 'gallery-item gallery-item-6';
    item6.className = 'gallery-item gallery-item-5'; 
    item5.className = 'gallery-item gallery-item-4';
    item4.className = 'gallery-item gallery-item-3';
    item3.className = 'gallery-item gallery-item-2';
    item2.className = 'gallery-item gallery-item-1'; */

         let items = [];

        for (let i = 1; i <= 6; i++) {
            items.push(document.querySelector('.gallery-item-' + i));
        }
         items.forEach( (item, index) => {
            item.className = 'gallery-item gallery-item-' + (index + 1 !== 1 ? index : 6);

         })
        
       
        


    
    

   
    
}

function back() {

    const item1 = document.querySelector('.gallery-item-1');
const item2 = document.querySelector('.gallery-item-2');
const item3 = document.querySelector('.gallery-item-3');
const item4 = document.querySelector('.gallery-item-4');
const item5 = document.querySelector('.gallery-item-5');
const item6 = document.querySelector('.gallery-item-6');

    item1.className = 'gallery-item gallery-item-2';
    item2.className = 'gallery-item gallery-item-3'; 
    item3.className = 'gallery-item gallery-item-4';
    item4.className = 'gallery-item gallery-item-5';
    item5.className = 'gallery-item gallery-item-6';
    item6.className = 'gallery-item gallery-item-1';
    
    
}
const exampleCarousel = new Carousel(galleryContainer,galleryItems, galleryControls);
/*exampleCarousel.setControls();
exampleCarousel.useControls(); */