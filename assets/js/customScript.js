let signUpBtn = document.getElementById('signUp')

signUpBtn.addEventListener('click', signIn, false)

signIn = (e) => {
    e.preventDefault()

    let user_name
    user_name === String ? user_name = $('#name').val().trim(): alert('type in a real name please') 
}

console.log('I promise to code double time tomorrow. I lost track of time and left little room to code today')