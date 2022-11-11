let list = document.querySelectorAll('.list')
for (let i=0; i<list.length;i++) {
    list[i].onclick = function () {
        let j = 0
        while (j<list.length) {
            list[j++].className = 'list'
        }
        list[i].className = 'list active'
    }
}

const navigation = document.getElementById('navigation')
const menuToggle = document.getElementById('menu-toggle')
const main = document.getElementById('main')

menuToggle.onclick = function () {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    main.classList.toggle('fold')
}
