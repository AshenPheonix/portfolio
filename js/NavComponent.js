export class NavComponent{
    constructor(comp,location){
        this.comp=comp
        this.location=location
        this.destination=comp.destination
        this.text=comp.text
        this.location=location.slice(0,-5)

        this.element=document.createElement('section')
        this.anchor=document.createElement('a')

        if(this.location==this.destination || (this.location=='' && this.destination=='index') ){
            this.element.classList.add('current')
        }
        this.anchor.textContent=this.text
        
        if(this.destination.includes('https:/'))
            this.destination=this.destination.join('/')
        else
            this.destination=`${this.destination.join('/')}.html`

        this.anchor.setAttribute('href',this.destination)
        this.element.appendChild(this.anchor)
    }
}