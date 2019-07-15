export default class Footer{
    constructor(element){
        this.footer=element
        this.copy=document.createElement('p')
        this.copy.innerHTML='&copy;2019 Brandon Porter.'

        this.footer.classList.add('foot')

        this.footer.appendChild(this.copy)
    }
}