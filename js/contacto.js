const name = document.getElementById('name')
const name = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e)=>{
    let messages =[]
    if (name.value === ''||  name.value == null) {
        messages.push('name is required')
    }

if(
    password.value.length <= 6) {
        messages.push( 'su contraseña debe tener 6 caracteres')
    }

    if(
        password.value.length <= 20) {
            messages.push( 'su contraseña debe tener 6 caracteres')
        }
        if (password.value === 'password'){

            messages.push ('la contraseña ingresada es incorrecta')
        }
    if( messages.length > 0) {
        e.prevendefault()
        errorElement.innerText = messages.join(',')


    }

})