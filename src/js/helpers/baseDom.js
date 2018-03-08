 export function isNode(node) {
        return typeof node === 'string' ? document.querySelector(node) : node
    }

export function isDom(node, parent = document.documentElement, depth = 0) {
    let element = isNode(node),
        container = isNode(node)

    if(typeof container.contains === 'function'){
        return (element === container) ? false : container.contains(node);
    }

    if(container.children && container.children.length){
        depth++;

        for(let i = 0; i < container.children.length; i++){
            isDom(node, container = container.children[i], depth)
        }
    }
}
