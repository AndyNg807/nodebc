window.onload = function(){
const body = document.querySelector('body');
let images = ['batmanwb.png', 'flashwb.png', 'supermanwb.png','wonder_womanwb.png'];
const img = document.createElement('img');
const div = document.createElement('div');
for (let i = 0; i<images.length; i++){
    img.setAttribute("src",`img\\${images[i]}`);
    img.setAttribute("alt",images[i]);
    div.appendChild(img.cloneNode(true));
}
body.appendChild(div);

const color = function(){
    let newSRC = this.getAttribute('src');
    let newName = newSRC.slice(0,-6)+newSRC.slice(newSRC.length-4);
    this.src = newName;
    let newAlt = this.getAttribute('alt');
    this.alt = newAlt.slice(0,-6)+newAlt.slice(newAlt.length-4);
}

const wb = function(){
    let newSRC = this.getAttribute('src');
    this.src = newSRC.slice(0,-4) + "wb.png";
    let newAlt = this.getAttribute('alt');
    this.alt = newAlt.slice(0,-4) + "wb.png";
}

const cimg = document.querySelectorAll('img');
for (let i=0; i<cimg.length; i++){
    cimg[i].onmouseover = color;
    cimg[i].onmouseout = wb;
}

}