export default class Card{
    constructor(el){
        this.root=el
        this.cards=Array.from(this.root.querySelectorAll('.card'))
        this.cards.forEach((el,i)=>{
            el.dataset.which=i
        })
        this.current=0;
        
        this.cards.forEach(card=>{
            card.querySelector('.cardHead').addEventListener('click',(e)=>{
                this.cards[this.current].classList.remove('show')
                this.current=card.dataset.which
                this.cards[this.current].classList.add('show')
            })
        })
    }
}