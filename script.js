let replace = {do:false,on:true}
let ans = null
function addItem(item) {
    const disp = document.getElementById('disp')
    if ((replace.do && replace.on) || disp.innerHTML == 0) {
        document.getElementById('disp').innerHTML = item;
        replace.do = false
    } else {
        document.getElementById('disp').innerHTML += item;
    }
}

function equals() {
    let disp = document.getElementById('disp');
    if (disp.innerHTML.includes('ans')) {
        disp.innerHTML = disp.innerHTML.replace('ans', ans)
    }
    if (disp.innerHTML.includes('pi')) {
        disp.innerHTML = disp.innerHTML.replace('pi', math.pi)
    }
    ans = math.evaluate(disp.innerHTML)
    replace.do = true
    document.getElementById('disp').innerHTML=ans
    document.getElementById('prev').innerHTML=ans
}

function del() {
    const disp = document.getElementById('disp').innerHTML;
    if (disp.length===1) {
        document.getElementById('disp').innerHTML = 0
    } else {
        document.getElementById('disp').innerHTML = disp.slice(0,-1)
    }
}

function clearDisp() {
    document.getElementById('disp').innerHTML = 0
}