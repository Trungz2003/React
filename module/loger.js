import{
    TYPE_LOG
} from './constants.js'

function test(name, type = TYPE_LOG){
    console[type](name);
}

export default test;