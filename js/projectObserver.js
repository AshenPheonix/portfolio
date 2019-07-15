import observer from 'riot-observable'

function projectWatcher() {
    observer(this)

    this.projects=[]

    this.on('load',()=>{

    })
}

var OBS = new projectWatcher();

export default OBS;