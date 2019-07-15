import {NavComponent} from './NavComponent';
import locations from './locations'

export default class Header{
    constructor(el){
        this.root=el;

        this.nav = document.createElement('nav')
        this.navButton=document.createElement('section')
        this.navButton.textContent='Menu'
        this.navButton.classList.add('menuButton')
        this.nav.appendChild(this.navButton);

        this.currentPage=window.location.pathname

        this.compContainer=document.createElement('section')
        this.compContainer.classList.add('navContainer','hide')
        this.nav.appendChild(this.compContainer)

        this.components=locations.map(data=>new NavComponent(data,this.currentPage.slice(1)))
        this.components.forEach(comp=>this.compContainer.appendChild(comp.element))
        
        this.navButton.addEventListener('click',(e)=>{
            this.toggleMenu()
        })

        this.root.appendChild(this.nav)
    }

    toggleMenu(){
        this.compContainer.classList.toggle('hide')
    }
}