import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './books.xml';
import printMe from './print.js';
import Library from './library';
import './hmr-styles.css';
import { cube } from './math.js';

if (module.hot) {
    module.hot.accept('./library', function() {
        console.log('Accepting the updated library module!!!!!!!!!!!!!!');
        Library();
    })
}

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click MEEEE and FUDGE the console!!!!!!!!!!!!!';
    btn.onclick = printMe;

    element.appendChild(btn);

    // Add the image to out existing div.
    var myIcon = new Image();
    myIcon.src = Icon;

    console.log(Data);
    console.log(cube(5)); // 125

    return element;
}

document.body.appendChild(component());