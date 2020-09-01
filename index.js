let modalButton = document.querySelectorAll("[data-tab-target]")
let page = document.querySelectorAll(".page")
let modal = document.querySelector(".modal")
let html = document.getElementsByTagName("HTML")[0];
let modalClose = document.querySelectorAll(".modalClose")
let pageItem = document.querySelectorAll('.pageItem')
modalButton.forEach(element => {
    element.addEventListener("click",(e)=>{
        let target = e.target.dataset.tabTarget
        
        modal.classList.add("active")
        html.classList.add("modalActive")
        gsap.from('.page',{
            opacity:0, 
            duration:0.2,
            y:-50,
            scale:0.1,
            })
        document.querySelector("."+target).classList.add("active")
        
    })
});
modalClose.forEach(element => {
    element.addEventListener("click",(e)=>{
        html.classList.remove("modalActive")
        modal.classList.remove("active")
        page.forEach(element => {
            element.classList.remove("active")
        });
    })
});

window.onclick = (e)=>{
    if(e.target==modal){
        html.classList.remove("modalActive")
        modal.classList.remove("active")
        page.forEach(element => {
            element.classList.remove("active")
        });
    }
}

pageItem.forEach(element => {
    element.addEventListener('mouseover',(e)=>{
        
        gsap.to(e.currentTarget.children[0],{y:-10,duration:0.5,scale:1.06})
        gsap.to(e.currentTarget.children[1],{y:15,duration:0.5})
    })
    element.addEventListener('mouseout',(e)=>{
        
        gsap.to(e.currentTarget.children[0],{y:0,x:0,scale:1,duration:0.5})
        gsap.to(e.currentTarget.children[1],{y:0,duration:0.5})
    })
    
});

let nav = document.querySelectorAll('.nav')

nav.forEach(element => {
   element.addEventListener('mouseover',(e)=>{
    gsap.fromTo(e.currentTarget.children[0],
        {
        width:"0",
        height: "1px",
        backgroundColor: "black",
        duration:0.3,
        },
        {
            width:"100%",
            height: "1px",
            backgroundColor: "black",
            duration:0.3,
            }
        
        )
   })

   element.addEventListener('mouseout',(e)=>{
    gsap.fromTo(e.currentTarget.children[0],
        {
            width:"100%",
            height: "1px",
            backgroundColor: "black",
            duration:0.3,
            },
            {
                width:"100%",
                height: "1px",
                backgroundColor: "transparent",
                duration:0.3,
                })
   })
});



gsap.from('.logo',{opacity:0, duration:1,y:-50})
gsap.from('.navCtn',{opacity:0, duration:1,x:-50})
gsap.from('.hamburger',{opacity:0, duration:1,x:-50})
gsap.from('.heroText',{opacity:0, duration:1,y:50})

gsap.from('.cover',{
    scrollTrigger:{
        trigger:'.cover',
        start:"top center"

    },
    y:50,opacity:0,duration:1,
})

gsap.from('.deviceImg',{
    scrollTrigger:{
        trigger:'.deviceImg',
        start:"top bottom"

    },
    y:50,opacity:0,duration:1,
})