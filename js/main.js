+function () {

    document.querySelector('.sticker-nav__item').classList.add('active')
    document.querySelector('.stickers-content__row').classList.add('active')
    
    function selectPanel (e) {
        var target = e.target.dataset.target
    
        document.querySelectorAll('.sticker-nav__item, .stickers-content__row').forEach(el => el.classList.remove('active'))
        e.target.classList.add('active')
        console.log(document.querySelector('.' + target))
        document.querySelector('.' + target).classList.add('active')
    }
    
    document.querySelectorAll('.sticker-nav__item').forEach(el => {
        el.addEventListener('click', selectPanel)
    })
    
    }()
    
    