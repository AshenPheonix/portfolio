import * as riot from 'riot'
import observer from './projectObserver'
import projects from '../tags/projects.riot'

observer.url+='/projects'

riot.register('projects',projects)
riot.install(component=>{
    component.observer=observer
    return component
})

riot.mount('projects',{observer});