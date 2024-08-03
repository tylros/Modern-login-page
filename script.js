

const loginBtn = document.getElementById('login')
const container = document.getElementById('container')
const registerBtn = document.getElementById('register')

registerBtn.addEventListener('click', () => {
 container.classList.add("active")
})

loginBtn.addEventListener('click', () => {
 container.classList.remove("active")
})