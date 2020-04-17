// Custom JS here
console.log('this is inside the js file')

let testItem = document.querySelector('.btn-click')

testItem.addEventListener('click', event =>{
    console.log("is it workin")
    gsap.to(".testing", {
        duration: 1, 
        y: 100, 
        rotation: 360, 
        scale: 0.5
    })
})