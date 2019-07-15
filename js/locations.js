class NavComp{
    constructor(text,...dest){
        this.destination=dest
        this.text=text
    }
}

export default [
    new NavComp('Home/About Me','index'),
    new NavComp('Blog','blog'),
    new NavComp('Projects','projects')
]