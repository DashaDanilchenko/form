const form = document.querySelector('form')

const name = document.querySelector('#name')
const email = document.querySelector('#email')
const age = document.querySelector('#age')
const password = document.querySelector('#password')

const btn = document.querySelector('button')

const arrDate = []
const status = []
const error = []
const arrNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const arrLiter = ['q', 'w', 'e', 'r','t', 'y', 'u', 'i', 'o','p',
                'a', 's', 'd', 'f','g', 'h', 'j', 'k', 'l','z',
                'x', 'c', 'v', 'b', 'n','m',]

arrDate.push(name)
arrDate.push(email)
arrDate.push(age)
arrDate.push(password)

arrDate.forEach(input => input.addEventListener('click', active))

arrDate.forEach(input => input.addEventListener('mouseover', correction))

function active() {
   this.addEventListener('mouseout', auditSpace)
}

function auditSpace() {
    let value = this.value
    if (value.replace(/ /g,'').length === 0) {
        this.classList.add('border')
    }
}

function correction(e) {
    this.classList.remove('border')
    status.pop(false)
    error.pop(false)
    this.nextElementSibling.textContent = ''
}

name.addEventListener('click', activeName)

function activeName() {
    name.addEventListener('mouseout', auditNum)
}

function auditNum() {
    let value = this.value
    const arrValue = value.split('')
    arrValue.forEach (i => 
        {arrNum.forEach (n => { if (i === n) this.classList.add('border')
        })
    })
}

age.addEventListener('click', activeAge)

function activeAge() {
    age.addEventListener('mouseout', auditLiter)
}

function auditLiter() {
    let value = this.value
    const arrValue = value.split('')
    arrValue.forEach (i => 
        {arrLiter.forEach (n => { if (i === n) this.classList.add('border')
        })
    })

    if(Number(value) > 100) {
        this.classList.add('border')
    }

    if(Number(value) <= 16) {
        this.classList.add('border')
    }
}

email.addEventListener('click', activeEmail)

function activeEmail() {
    email.addEventListener('mouseout', auditEmail)
}

function auditEmail() { 
    let value = this.value
    if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(value) === false) {
        this.classList.add('border')
    }; 
 } 

 btn.addEventListener('click', auditForm)

 function auditForm() {
    event.preventDefault()
    arrDate.forEach(i => 
        {if (! i.value) {
            i.nextElementSibling.textContent = `Enter ${i.id} !`
            status.push(false)
        }})

    arrDate.forEach(i => 
            {if (i.closest('.border')) {
                error.push(false)
            }}) 
           
        if (status.includes(false)) {
            alert ('Fill out the form')
        }
        if (error.includes(false)) {
            alert ('Incorrect data')
            
        } if (!status.includes(false) && !error.includes(false)){
            alert ('The form has been submitted')
        }
 }