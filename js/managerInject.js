import * as riot from 'riot'
import manager from '../tags/manager.riot'
import obs from './projectObserver'

riot.register('manager',manager)

riot.mount('manager',{observer:obs})