export function isNode(node) {
        return typeof node === 'string' ? document.querySelector(node) : node;
    }

export function isInnerDom(node, parent = document.documentElement, depth = 0) {
    let element = isNode(node),
        container = isNode(node);

    if(typeof container.contains === 'function'){
        return (element === container) ? false : container.contains(node);
    }else {

        if (container.children && container.children.length) {
            depth++;

            for (let i = 0; i < container.children.length; i++) {
                isInnerDom(node, container = container.children[i], depth);

            }
        }
    }
}

export function fadeOut(node, duration = 100){
    let elem = isNode(node),
        classElem = elem.classList;

    elem.style.transition = '0.42s';
    elem.style.position = 'relative';
    elem.style.top = '-100px';
    elem.style.opacity = 0;

    setTimeout(function () {
        elem.style.display = 'none';
    }, duration)
}

export function fadeIn(node, duration = 100){
 let elem = isNode(node),
     classElem = elem.classList;

    elem.style.display = 'block';
    elem.style.transition = '0.42s';
    elem.style.position = 'relative';

 setTimeout(function () {
     elem.style.top = '0px';
     elem.style.opacity = '1';
 }, duration)
}