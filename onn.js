let welcomeEl=document.getElementById("welcome-el")
let greeting="Welcome Back "
let name="Brother"
welcomeEl.textContent=greeting+name

//we can also use string concatenation here

welcomeEl.textContent += "!!"
let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
let count=0
function increment() {
    count+=1
    countEl.textContent=count
}
function save() {
    let countStr=count+"-"
    saveEl.textContent+=countStr //textContent can be used in place of innerText
    countEl.textContent=0
    count=0
}