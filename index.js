let form=document.querySelector(`#my-form`)
let users=document.querySelector(`#users`)
form.addEventListener(`submit`,addToStorage)

function addToStorage(e) {
    e.preventDefault()
    let name=document.querySelector(`#name`).value
    let email=document.querySelector(`#email`).value
    let obj1={name:name,email:email}
    let jsonFile=JSON.stringify(obj1)

localStorage.setItem(`user1`,jsonFile)
}

let user1=JSON.parse(localStorage.getItem(`user1`))
let li=document.createElement('li')
let text=document.createTextNode(`${user1.name}:${user1.email}`)
li.appendChild(text)
users.appendChild(li)

