const num1 = document.getElementById('num1')
const num2 = document.querySelector('#num2')
const add = document.querySelector('#add')
const sub = document.querySelector('#sub')
const mul = document.querySelector('#mul')
const div = document.querySelector('#div')
const result = document.querySelector('#result')

let calculator = {
    add: function(){
        result.innerHTML = parseInt(num1.value) + parseInt(num2.value)
    },
    sub: function(){
        result.innerHTML = parseInt(num1.value) - parseInt(num2.value)
    },
    mul: function(){
        result.innerHTML = parseInt(num1.value) * parseInt(num2.value)
    },
    div: function(){
        result.innerHTML = parseInt(num1.value) / parseInt(num2.value)
    }

}


add.addEventListener('click',()=>calculator.add(num1.value,num2.value))
sub.addEventListener('click',()=>calculator.sub(num1.value,num2.value))
mul.addEventListener('click',()=>calculator.mul(num1.value,num2.value))
div.addEventListener('click',()=>{
    calculator.div(num1.value,num2.value)
})