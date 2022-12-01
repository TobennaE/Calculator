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
const del = document.getElementById('del')
const reset = document.getElementById('res')
let fail = false
let equ = false
let nin = false
let firstnum = 0
let lastnum = 0

function answer(firstnum, lastnum) {
    if (plus.checked) {
        mi.style.cssText = ''
        di.style.cssText = ''
        mu.style.cssText = ''
        pl.style.cssText = ''
        plus.checked = true
        divide.checked = false
        minus.checked = false
        multi.checked = false
        let num = firstnum + lastnum
        let numstr = String(num)
        let declength = 0
        if (numstr.includes('.')) {
            declength = numstr.split('.')[1].length
        }
        if (declength >= 5) {
            return num.toFixed(5)
        } else {
            return (firstnum + lastnum)
        }
    } 
    else if (minus.checked) {
        mi.style.cssText = ''
        di.style.cssText = ''
        mu.style.cssText = ''
        pl.style.cssText = ''
        plus.checked = false
        divide.checked = false
        minus.checked = true
        multi.checked = false
        let num = firstnum - lastnum
        let numstr = String(num)
        let declength = 0
        if (numstr.includes('.')) {
            declength = numstr.split('.')[1].length
        }
        if (declength >= 5) {
            return num.toFixed(5)
        } else {
            return (firstnum - lastnum)
        }
    }
    else if (divide.checked) {
        mi.style.cssText = ''
        di.style.cssText = ''
        mu.style.cssText = ''
        pl.style.cssText = ''
        plus.checked = false
        divide.checked = true
        minus.checked = false
        multi.checked = false
        if (lastnum == 0) {
            alert("Hey! You Can't Do That!")
            return 0
        }
        let num = firstnum / lastnum
        let numstr = String(num)
        let declength = 0
        if (numstr.includes('.')) {
            declength = numstr.split('.')[1].length
        }
        if (declength >= 5) {
            return num.toFixed(5)
        } else {
            return (firstnum / lastnum)
        }
    }
    else if (multi.checked) {
        mi.style.cssText = ''
        di.style.cssText = ''
        mu.style.cssText = ''
        pl.style.cssText = ''
        plus.checked = false
        divide.checked = false
        minus.checked = false
        multi.checked = true
        let num = firstnum * lastnum
        let numstr = String(num)
        let declength = 0
        if (numstr.includes('.')) {
            declength = numstr.split('.')[1].length
        }
        if (declength >= 5) {
            return num.toFixed(5)
        } else {
            return (firstnum * lastnum)
        }
    }
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mousedown', function(e){
        btn[i].style.cssText = 'box-shadow: 1px 2px gray;'
    });
    btn[i].addEventListener('mouseup', function(e){
        btn[i].style.cssText = 'box-shadow: 2px 5px gray;'
        if ((plus.checked || minus.checked || divide.checked || multi.checked || nin == true)
        && nin == true) {
            nin = false
            input.textContent = btn[i].textContent
        }
        else if (btn[i].textContent == '/' || btn[i].textContent == 'x' 
            || btn[i].textContent == "-" || btn[i].textContent == '+' ||
            btn[i].textContent == '=' || input.textContent.length == 9 ||
            btn[i].textContent == 'DEL') { 
            input.textContent = input.textContent 
            fail = false
        }
        else if (btn[i].textContent == '.' && input.textContent.includes('.')){
            input.textContent = input.textContent
        }
        else if (btn[i].textContent == '.' && input.textContent == '0') {
            input.textContent = '0' + btn[i].textContent
        }
        else if (input.textContent == '0') {
            input.textContent = btn[i].textContent
        }
        else if ((plus.checked || minus.checked || divide.checked || multi.checked || nin == true)
                  && fail == false || equ == true) {
            if (btn[i].textContent == '.') {
                input.textContent = '0' + btn[i].textContent
            } else {
                input.textContent = btn[i].textContent
            }
            fail = true
            equ = false
            nin = false
        }
        else {
            input.textContent = input.textContent + btn[i].textContent
        }
    });
}

pl.addEventListener('click', function(){
    if (minus.checked) {
        lastnum = Number(input.textContent)
        input.textContent = answer(firstnum, lastnum)
    }
    else if (divide.checked) {
        lastnum = Number(input.textContent)
        input.textContent = answer(firstnum, lastnum)
    }
    else if (multi.checked) {
        lastnum = Number(input.textContent)
        input.textContent = answer(firstnum, lastnum)
    }
    if (input.textContent.length == 9) {
        nin = true
    }
    mi.style.cssText = ''
    di.style.cssText = ''
    mu.style.cssText = ''
    pl.style.cssText = 'background-color: #bebec5;'
    plus.checked = true
    divide.checked = false
    minus.checked = false
    multi.checked = false
    firstnum = Number(input.textContent)

})

mi.addEventListener('click' , function(){
    if (plus.checked) {
        lastnum = Number(input.textContent)
        input.textContent = answer(firstnum, lastnum)
    }
    else if (divide.checked) {
        lastnum = Number(input.textContent)
        input.textContent = answer(firstnum, lastnum)
    }
    else if (multi.checked) {
        lastnum = Number(input.textContent)
        input.textContent = answer(firstnum, lastnum)
    }
    if (input.textContent.length == 9) {
        nin = true
    }
    pl.style.cssText = ''
    di.style.cssText = ''
    mu.style.cssText = ''
    mi.style.cssText = 'background-color: #bebec5;'
    minus.checked = true
    divide.checked = false
    plus.checked = false
    multi.checked = false
    firstnum = Number(input.textContent)
})

di.addEventListener('click', function(){
    if (minus.checked) {
        lastnum = Number(input.textContent)
        input.textContent = answer(firstnum, lastnum)
    }
    else if (plus.checked) {
        lastnum = Number(input.textContent)
        input.textContent = answer(firstnum, lastnum)
    }
    else if (multi.checked) {
        lastnum = Number(input.textContent)
        input.textContent = answer(firstnum, lastnum)
    }
    if (input.textContent.length == 9) {
        nin = true
    }
    mi.style.cssText = ''
    pl.style.cssText = ''
    mu.style.cssText = ''
    di.style.cssText = 'background-color: #bebec5;'
    divide.checked = true
    plus.checked = false
    minus.checked = false
    multi.checked = false
    firstnum = Number(input.textContent)
})

mu.addEventListener('click', function(){
    if (minus.checked) {
        lastnum = Number(input.textContent)
        input.textContent = answer(firstnum, lastnum)
    }
    else if (divide.checked) {
        lastnum = Number(input.textContent)
        input.textContent = answer(firstnum, lastnum)
    }
    else if (plus.checked) {
        lastnum = Number(input.textContent)
        input.textContent = answer(firstnum, lastnum)
    }
    if (input.textContent.length == 9) {
        nin = true
    }
    mi.style.cssText = ''
    di.style.cssText = ''
    pl.style.cssText = ''
    mu.style.cssText = 'background-color: #bebec5;'
    multi.checked = true
    divide.checked = false
    minus.checked = false
    plus.checked = false
    firstnum = Number(input.textContent)
})

equal.addEventListener('click', function() {
    lastnum = Number(input.textContent)
    input.textContent = answer(firstnum, lastnum)
    equ = true
    multi.checked = false
    divide.checked = false
    minus.checked = false
    plus.checked = false
})

res.addEventListener('click', function() {
    mi.style.cssText = ''
    di.style.cssText = ''
    pl.style.cssText = ''
    mu.style.cssText = ''
    multi.checked = false
    divide.checked = false
    minus.checked = false
    plus.checked = false
    input.textContent = "0"
})

del.addEventListener('click', function() {
    equ = false
    let len = input.textContent.length
    let newText = input.textContent.slice(0, len-1)
    if (len == 1) {
        input.textContent = '0'
    } else (input.textContent = newText)
})