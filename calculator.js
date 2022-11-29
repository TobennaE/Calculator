const btn = document.getElementsByClassName('but')
const input = document.getElementById('input')
const operator = document.getElementsByClassName('op')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const divide = document.getElementById('divide')
const multi = document.getElementById('multi')
const pl = document.getElementById('pl')
const mi = document.getElementById('mi')
const di = document.getElementById('di')
const mu = document.getElementById('mu')
const equal = document.getElementById('eq')
let fail = false
let firstnum = 0
let lastnum = 0

function answer(firstnum, lastnum) {
    if (plus.checked) {
        mi.style.cssText = ''
        di.style.cssText = ''
        mu.style.cssText = ''
        pl.style.cssText = ''
        plus.checked = false
        divide.checked = false
        minus.checked = false
        multi.checked = false
        return firstnum + lastnum
    } 
    else if (minus.checked) {
        mi.style.cssText = ''
        di.style.cssText = ''
        mu.style.cssText = ''
        pl.style.cssText = ''
        plus.checked = false
        divide.checked = false
        minus.checked = false
        multi.checked = false
        return firstnum - lastnum
    }
    else if (divide.checked) {
        mi.style.cssText = ''
        di.style.cssText = ''
        mu.style.cssText = ''
        pl.style.cssText = ''
        plus.checked = false
        divide.checked = false
        minus.checked = false
        multi.checked = false
        return firstnum / lastnum
    }
    else if (multi.checked) {
        mi.style.cssText = ''
        di.style.cssText = ''
        mu.style.cssText = ''
        pl.style.cssText = ''
        plus.checked = false
        divide.checked = false
        minus.checked = false
        multi.checked = false
        return firstnum * lastnum
    }
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mousedown', function(e){
        btn[i].style.cssText = 'box-shadow: 1px 2px gray;'
    });
    btn[i].addEventListener('mouseup', function(e){
        btn[i].style.cssText = 'box-shadow: 2px 5px gray;'
        if (btn[i].textContent == '/' || btn[i].textContent == 'x' 
            || btn[i].textContent == "-" || btn[i].textContent == '+' ||
            btn[i].textContent == '=' || input.textContent.length == 9) { 
            input.textContent = input.textContent 
            fail = false
        }
        else if (btn[i].textContent == '.' && input.textContent.includes('.')
                && !input.textContent.includes('0')){
            input.textContent = input.textContent
        }
        else if (btn[i].textContent == '.' && input.textContent == '0') {
            input.textContent = '0' + btn[i].textContent
        }
        else if (input.textContent == '0') {
            input.textContent = btn[i].textContent
        }
        else if ((plus.checked || minus.checked || divide.checked || multi.checked)
                  && fail == false) {
            input.textContent = btn[i].textContent
            fail = true
        }
        else {
            input.textContent = input.textContent + btn[i].textContent
        }
    });
}

pl.addEventListener('click', function(){
    mi.style.cssText = ''
    di.style.cssText = ''
    mu.style.cssText = ''
    pl.style.cssText = 'background-color: #bebec5;'
    plus.checked = true
    divide.checked = false
    minus.checked = false
    multi.checked = false
    firstnum = Number(input.textContent)
    console.log(firstnum)

})

mi.addEventListener('click' , function(){
    pl.style.cssText = ''
    di.style.cssText = ''
    mu.style.cssText = ''
    mi.style.cssText = 'background-color: #bebec5;'
    minus.checked = true
    divide.checked = false
    plus.checked = false
    multi.checked = false
    firstnum = Number(input.textContent)
    console.log(firstnum)
})

di.addEventListener('click', function(){
    mi.style.cssText = ''
    pl.style.cssText = ''
    mu.style.cssText = ''
    di.style.cssText = 'background-color: #bebec5;'
    divide.checked = true
    plus.checked = false
    minus.checked = false
    multi.checked = false
    firstnum = Number(input.textContent)
    console.log(firstnum)
})

mu.addEventListener('click', function(){
    mi.style.cssText = ''
    di.style.cssText = ''
    pl.style.cssText = ''
    mu.style.cssText = 'background-color: #bebec5;'
    multi.checked = true
    divide.checked = false
    minus.checked = false
    plus.checked = false
    firstnum = Number(input.textContent)
    console.log(firstnum)
})

equal.addEventListener('click', function() {
    lastnum = Number(input.textContent)
    console.log(lastnum)
    input.textContent = answer(firstnum, lastnum)
})