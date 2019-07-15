import '../less/index.less'
import Header from './header.js';
import Footer from './footer.js'
import Cards from './Cards.js'

const head=new Header(document.querySelector('header'))
const Foot=new Footer(document.querySelector('footer'))
const cards=new Cards(document.querySelector('.cards'))