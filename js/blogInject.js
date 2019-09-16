import * as riot from 'riot'
import observer from './projectObserver'
import blogs from '../tags/blog.riot'

riot.register('blogs',blogs)

riot.mount('blogs',{observer});