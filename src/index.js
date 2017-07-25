import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './books.xml';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and FUDGE the console!!!!!!!!!!!!!';
    btn.onclick = printMe;

    element.appendChild(btn);

    // Add the image to out existing div.
    var myIcon = new Image();
    myIcon.src = Icon;

    console.log(Data);

    return element;
}

document.body.appendChild(component());