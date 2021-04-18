let menuClass = document.querySelector('.menu')
let hamburgerMenu = document.getElementById('hamburger-menu')
let backgroundBody = document.getElementById('background')
let btn = document.querySelectorAll(".box")


let toggleHamburgerMenu = function () {
    hamburgerMenu.addEventListener('click', function () {
        menuClass.classList.toggle('hide-menu')
    })
}

let changeBackground = function () {
    btn.forEach(function (item) {
        item.addEventListener('click', function (e) {
            backgroundBody.removeAttribute("class")
            backgroundBody.classList.add(e.target.classList[1])
            menuClass.classList.toggle('hide-menu')
        })
    })
}

toggleHamburgerMenu();
changeBackground();


