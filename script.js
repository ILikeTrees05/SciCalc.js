let replace = false
let ans = 0
function addChar(item) {
    let disp = document.getElementById('disp')
    if (disp.innerHTML === '0' || replace) {
        disp.innerHTML = item
        replace = false
    } else {
        disp.innerHTML += item
    }
}

function clearDisp() {
    document.getElementById('disp').innerHTML = '0'
}

function del() {
    let disp = document.getElementById('disp')
    if (disp.innerHTML.length === 1) {
        disp.innerHTML = 0
    } else {
        disp.innerHTML = disp.innerHTML.slice(0,-1)
    }
}

function equals() {
    let disp = document.getElementById('disp')
    if (disp.innerHTML.includes('ans')) {
        disp.innerHTML = disp.innerHTML.replace('ans', ans)
    }
    ans = math.evaluate(disp.innerHTML)
    document.getElementById('prev').innerHTML = 'ans = ' + ans
    disp.innerHTML = ans
    replace = true
}