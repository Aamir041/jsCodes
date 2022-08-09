const copy = document.querySelector('.copy-me')
copy.addEventListener('copy',()=>{
    alert("Dont Copy")
    // console.log("Dont Copy")
})

const box = document.querySelector(".box")
box.addEventListener('mousemove',e=>{
    // console.log(e)
    // console.log(e.offsetX, e.offsetY)
    box.textContent = `x->${e.offsetX} y->${e.offsetY}`
})

document.addEventListener('wheel',e=>{
    console.log(e)
})