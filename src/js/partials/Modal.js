class Modal {
    constructor({
        modal,
        openBtn,
        closeBtn = openBtn,
        animation = 'slide',
        duration = 100,
        bgColor = 'rgba(0,0,0,.9)',
        zIndex = 1000
                }){

        this._modalNode = typeof modal !== 'string' ? modal : document.querySelector(modal)
        this._wrapperModal = document.createElement('div')
        this._openModalBtn = typeof openBtn !== 'string' ? openBtn : document.querySelector(openBtn)
        this._closeModalBtn = typeof closeBtn !== 'string' ? closeBtn : document.querySelector(closeBtn)
        this._wrapperModalBg = bgColor
        this._isOpen = false
        this._duration = duration
        this._zIndex = zIndex

        this.init()
    }

    init(){
        this.createWrapp(this._wrapperModal, this._modalNode)
        this.listenEvents()
    }

    open(){
        if(!this._isOpen){
            this._isOpen = !this._isOpen
            console.log(this._wrapperModal)
            this._wrapperModal.style.display = 'flex'
            
            setTimeout(() => {
                this._modalNode.style.opacity = 1
                this._modalNode.style.top = '20%'
            }, this._duration)
        }
    }

    close(){
        if(this._isOpen){
            this._isOpen = !this._isOpen
            this._modalNode.style.opacity = 0
            this._modalNode.style.top = '-20px'

            setTimeout(() => {
                this._wrapperModal.style.display = 'none'
            }, this._duration)
        }
    }

    createWrapp(parent, child){
        parent.classList.add('modal-wrapper')

        parent.style.position = 'absolute'
        parent.style.top = '0'
        parent.style.width = '100%'
        parent.style.height = '100%'
        parent.style.backgroundColor = this._wrapperModalBg
        parent.style.zIndex = this._zIndex
        parent.style.display = 'none'

        child.style.position = 'absolute'
        child.style.opacity = 0
        child.style.top = '-20px'

        parent.appendChild(child)
        document.documentElement.appendChild(parent)
    }

    listenEvents(){
            this._openModalBtn.addEventListener('click', this.open.bind(this))
            this._closeModalBtn.addEventListener('click', this.close.bind(this))
    }
}

const modalAbout = new Modal({
    modal: '.modal-about',
    openBtn: '.modal-about_open',
    closeBtn: '.modal-about_close',
    duration: 200
})