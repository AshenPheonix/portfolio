import * as riot from 'riot'
import observer from './projectObserver'
import blogs from '../tags/blog.riot'

riot.register('blogs',blogs)
riot.install(component=>{
    component.observer=observer
    return component
})

riot.mount('blogs',{observer});