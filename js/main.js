
let imgs = Array.from(document.querySelectorAll(".fifth .col8"))
let x = 0

let le = setInterval(() => {
    x < imgs.length - 1 ? x++ : x = 0;
    imgs.forEach(img => img.classList.remove("active"))
    imgs[x].classList.add("active")
},3000)
























