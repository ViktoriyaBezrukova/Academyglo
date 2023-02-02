function DomElement (selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElement = function(){
    if(this.selector.charAt(0) === '.'){
        let elem = document.createElement('div');
        elem.classList.add(this.selector.slice(1));
        let body = document.querySelector('body');
        elem.style.cssText=`height: ${this.height};
        background-color: ${this.bg};
        width: ${this.width};
        font-size: ${this.fontSize};`;
        elem.textContent = "Это блок"
        body.appendChild(elem);
    } else if(this.selector.charAt(0) === '#'){
        elem = document.createElement('p');
        elem.setAttribute('id', this.selector.slice(1));
        let body = document.querySelector('body');
        elem.style.cssText=`height: ${this.height};
        background-color: ${this.bg};
        width: ${this.width};
        font-size: ${this.fontSize};`;
        elem.textContent = "Это параграф"
        body.appendChild(elem);
    }

} 
let domElement = new DomElement('.block', "100px", "50px", "green", "20px")
domElement.createElement()
console.log(domElement.selector)
console.log(domElement)

