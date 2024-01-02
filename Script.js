const login_form = document.querySelector('.login')
const signup_form = document.querySelector('.sign_up')
const login_btn = document.querySelector('.login_btn')
const signup_btn = document.querySelector('.signup_btn')

login_btn.addEventListener('click', () =>{
  signup_form.style.display = 'none'
  login_form.style.display = 'block'
})
signup_btn.addEventListener('click', () =>{
  login_form.style.display = 'none'
  signup_form.style.display = 'block'
})