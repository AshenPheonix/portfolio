class NavComp{
    constructor(text,...dest){
        this.destination=dest
        this.text=text
    }
}

var locations=[
    new NavComp('Home','index'),
    new NavComp('About Me', 'about')
    
]