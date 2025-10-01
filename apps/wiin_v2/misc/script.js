var menu__nav = document.querySelector(".menu__nav");
var button = document.querySelector(".button");
var close = document.querySelector(".close");
var cart = document.querySelector(".navbar__cart");
var logo = document.querySelector("#logo");

button.addEventListener('click', function(){
    menu__nav.style.top = "0%";
    close.style.display = "initial";
    button.style.display = "none";
    cart.style.display = "none";
    logo.style.color = "rgb(0, 0, 0)";
    close.style.color = "rgb(0, 0, 0)";
})
close.addEventListener('click', function(){
    menu__nav.style.top = "-100%"
    close.style.display = "none";
    button.style.display = "initial";
    cart.style.display = "initial";
    logo.style.color = "rgb(213, 205, 196)";
})
var part2 = gsap.timeline({scrollTrigger:{
    trigger: ".part2",
    start: "0% 60%",
    end: "100% 60%",
    scrub: true,
    duration: 1,
    // markers: true,
}})
part2.to(".part2__img",{
    width: "100%",
})
var part3 = gsap.timeline({scrollTrigger:{
    trigger: ".part3",
    start: "40% 65%",
    end: "90% 65%",
    scrub: true,
    duration: 2,
    // markers: true,
}})
part3.from(".part3__cont",{
    y: 100,
    opacity: 0,
})
var part4 = gsap.timeline({scrollTrigger:{
    trigger: ".part4",
    start: "0% 50%",
    end: "15% 50%",
    scrub: true,
    duration: 2,
    // markers: true,
}})
part4.from(".available, .star",{
    y: 20,
    opacity: 0,
})
var part4__line = gsap.timeline({scrollTrigger:{
    trigger: ".part4",
    start: "30% 90%",
    end: "50% 90%",
    scrub: true,
    duration: 1,
    // markers: true,
}})
part4__line.from(".part4__headingLine",{
    width:"0%",
    opacity: 0,
})
var part4__cont = gsap.timeline({scrollTrigger:{
    trigger: ".part4",
    start: "30% 90%",
    end: "70% 90%",
    scrub: true,
    duration: 3,
    // markers: true,
}})
part4__cont.from(".part4__cont1",{
    y: 100,
    opacity: 0,
})
part4__cont.from(".part4__cont2",{
    y: 100,
    opacity: 0,
})
part4__cont.from(".part4__cont3",{
    y: 100,
    opacity: 0,
})
var part5__cont = gsap.timeline({scrollTrigger:{
    trigger: ".part5",
    start: "30% 90%",
    end: "75% 90%",
    scrub: true,
    duration: 1,
    // markers: true,
}})
part5__cont.from(".part5__h11",{
    y: 50,
    opacity: 0,
})
part5__cont.from(".part5__h12",{
    y: 50,
    opacity: 0,
})
part5__cont.from(".part5__h13",{
    y: 50,
    opacity: 0,
})
var part5__bottom = gsap.timeline({scrollTrigger:{
    trigger: ".part5",
    start: "50% 80%",
    end: "110% 85%",
    scrub: true,
    duration: 1,
    // markers: true,
}})
part5__bottom.from(".part5__line1, .part5__line2",{
    width: "0%",
    opacity: 0,
})
part5__bottom.from(".part5__line3",{
    height: "0%",
    opacity: 0,
})
var part6 = gsap.timeline({scrollTrigger:{
    trigger: ".part6",
    start: "20% 80%",
    end: "80% 80%",
    duration: 1,
    scrub: true,
    // markers: true,
}})
part6.from(".part6__h1",{
    y: 100,
    opacity: 0,
})
part6.from(".part6__p",{
    y: 100,
    opacity: 0,
})
var part7 = gsap.timeline({scrollTrigger:{
    trigger: ".part7",
    start: "20% 80%",
    end: "80% 80%",
    duration: 1,
    scrub: true,
    // markers: true,
}})
part7.from(".part7__h1",{
    y: 100,
    opacity: 0,
})
var part4Cont1 = document.querySelector(".part4__cont1");
var part4Cont2 = document.querySelector(".part4__cont2");
var part4Cont3 = document.querySelector(".part4__cont3");

var packOne = document.querySelector("#packone");
var packTwo = document.querySelector("#packtwo");
var packThree = document.querySelector("#packthree");

// var part4Mango = document.querySelector(".part4__mango");
// var part4Banana = document.querySelector(".part4__banana");
// var part4Pineapple = document.querySelector(".part4__pineapple");

var arrow1 = document.querySelector("#arrow1");
var arrow2 = document.querySelector("#arrow2");
var arrow3 = document.querySelector("#arrow3");

part4Cont1.addEventListener("mousemove",function(){
    packOne.style.display = "initial";
    arrow1.style.opacity = "1";
}) 
part4Cont1.addEventListener("mouseleave",function(){
    packOne.style.display = "none";
    arrow1.style.opacity = "0";
})

part4Cont2.addEventListener("mousemove",function(){
    packTwo.style.display = "initial";
    arrow2.style.opacity = "1";
})
part4Cont2.addEventListener("mouseleave",function(){
    packTwo.style.display = "none";
    arrow2.style.opacity = "0";
})

part4Cont3.addEventListener("mousemove",function(){
    packThree.style.display = "initial";
    arrow3.style.opacity = "1";
})
part4Cont3.addEventListener("mouseleave",function(){
    packThree.style.display = "none";
    arrow3.style.opacity = "0";
})

var float = document.querySelector(".part4__cont");
var swing = 0;
var diffswing = 0;
float.addEventListener("mousemove",function(dets){
    diffswing = dets.clientX - swing;
    swing = dets.clientX;
    gsap.to(".pack",{
        ease: Power1,
        top: dets.clientY,
        left: dets.clientX,
        xPercent: -60,
        yPercent: -130,
        rotate:gsap.utils.clamp(-100, 100, diffswing*0.3),
    })
})
var part8 = gsap.timeline({scrollTrigger:{
    trigger: ".part8",
    start: "5% 90%",
    end: "150% 90%",
    duration: 1,
    scrub: true,
    // markers: true,
}})
part8.to(".strip__r",{
    x: "40vw",
},'strip')
part8.to(".strip__l",{
    x: "-40vw",
},'strip')

var part9 = gsap.timeline({scrollTrigger:{
    trigger: ".part9",
    start: "26% 80%",
    end: "80% 80%",
    duration: 1,
    scrub: true,
    // markers: true,
}})

part9.from(".part9__heading",{
    y: 150,
    opacity: 0,
})

var part9Left = document.querySelector(".part9__left");
var part9Right = document.querySelector(".part9__right");

var part9Img1 = document.querySelector("#part9__img1");
var part9Img2 = document.querySelector("#part9__img2");

part9Left.addEventListener("mousemove",function(){
    part9Img1.style.display = "initial";
}) 
part9Left.addEventListener("mouseleave",function(){
    part9Img1.style.display = "none";
})

part9Right.addEventListener("mousemove",function(){
    part9Img2.style.display = "initial";
})
part9Right.addEventListener("mouseleave",function(){
    part9Img2.style.display = "none";
})

var float9 = document.querySelector(".part9__option");
float9.addEventListener("mousemove",function(detls){
    gsap.to(".part9__img",{
        ease: Power1,
        top: detls.clientY,
        left: detls.clientX,
        xPercent: -30,
        yPercent: -50,
    })
})

var part10 = gsap.timeline({scrollTrigger:{
    trigger: ".part10",
    start: "33% 95%",
    end: "80% 60%",
    duration: 1,
    scrub: true,
    // markers: true,
}})
part10.from(".part10__img1",{
    y: 100,
    opacity: 0,
})
part10.from(".part10__img2",{
    y: 100,
    opacity: 0,
})
part10.from(".part10__img3",{
    y: 100,
    opacity: 0,
})
part10.from(".part10__img4",{
    y: 100,
    opacity: 0,
})
part10.from(".part10__img5",{
    y: 100,
    opacity: 0,
})
part10.from(".part10__img6",{
    y: 100,
    opacity: 0,
})
part10.from(".part10__img7",{
    y: 100,
    opacity: 0,
})
part10.from(".part10__img8",{
    y: 100,
    opacity: 0,
})


gsap.from(".main__navbar",{
    // y: -10,
    opacity: 0,
    duration:"1",
})
gsap.from(".part1__left",{
    y: 100,
    duration: 1,
    opacity: 0,
})
gsap.from(".part1__right",{
    y: 100,
    duration: 1,
    opacity: 0,
})
gsap.from("#copyright",{
    // y: 100,
    duration: 2,
    opacity: 0,
})
// gsap.from(".part1__pl",{
//     y: "10vh",
//     duration: 1,
//     opacity: 0,
// })
// var Part2 = gsap.timeline({scrollTrigger:{
//     trigger:".part-2",
//     start:"10% 50%",
//     end:"90% 50%",
//     scrub:true,
//     duration:"1",
//     // markers:true,
// }})

// Part2.to(".part-2-img-container",{
//     width:"100%",
// })

// var Part3 = gsap.timeline({scrollTrigger:{
//     trigger:".part-3",
//     start:"30% 90%",
//     end:"60% 90%",
//     scrub:true,
//     duration:"1",
//     //markers:true,
// }})

// Part3.from(".part-3",{
//     y:100,
//     opacity:"0",
// })

// var Part4 = gsap.timeline({scrollTrigger:{
//     trigger:".part-4",
//     start:"10% 90%",
//     end:"40% 90%",
//     scrub:true,
//     duration:"1",
//     //markers:true,
// }})

// Part4.from(".line",{
//     width:"0%",
//     opacity:"0",
// })

// Part4.from(".item-1",{
//     y:100,
//     opacity:"0",
// })


// Part4.from(".item-2",{
//     y:100,
//     opacity:"0",
// })


// Part4.from(".item-3",{
//     y:100,
//     opacity:"0",
// })

// var Part4_tag = gsap.timeline({scrollTrigger:{
//     trigger:".part-4",
//     start:"50% 90%",
//     end:"100% 90%",
//     scrub:true,
//     duration:"1",
//     //markers:true,
// }})

// Part4_tag.from(".tagline",{
//     y:100,
//     opacity:"0",
// })

// Part4_tag.from(".line-2",{
//     width:"0%",
//     opacity:"0",
// })

// Part4_tag.from(".tagline-2",{
//     y:100,
//     opacity:"0",
// })

// Part4_tag.from(".line-3",{
//     width:"0%",
//     opacity:"0",
// })

// var Part5 = gsap.timeline({scrollTrigger:{
//     trigger:".part-5",
//     start:"20% 90%",
//     end:"50% 90%",
//     scrub:true,
//     duration:"1",
//     //markers:true,
// }})

// Part5.from("#h1",{
//     y:100,
//     opacity:"0",
// })

// Part5.from("p",{
//     y:100,
//     opacity:"0",
// })

// var Part6 = gsap.timeline({scrollTrigger:{
//     trigger:".part-6",
//     start:"30% 90%",
//     end:"60% 90%",
//     scrub:true,
//     duration:"1",
//     //markers:true,
// }})

// Part6.from(".part-6",{
//     y:80,
//     opacity:"0",
// })

// var Part7 = gsap.timeline({scrollTrigger:{
//     trigger:".part-7",
//     start:"10% 90%",
//     end:"200% 90%",
//     scrub:true,
//     duration:"1",
//     //markers:true,
// }})

// Part7.to(".strip-r",{
//     x:"-30vw",
// },'strip')

// Part7.to(".strip-l",{
//     x:"30vw",
// },'strip')

// var Part8 = gsap.timeline({scrollTrigger:{
//     trigger:".part-8",
//     start:"20% 90%",
//     end:"90% 90%",
//     scrub:true,
//     duration:"1",
//     //markers:true,
// }})

// Part8.from(".part-8",{
//     y:80,
//     opacity:"0",
// })

// var Part9 = gsap.timeline({scrollTrigger:{
//     trigger:".part-9",
//     start:"10% 90%",
//     end:"20% 90%",
//     scrub:true,
//     duration:"1",
//     //markers:true,
// }})

// Part9.from("#snack",{
//     y:80,
//     opacity:"0",
// })

// var Part9_follow = gsap.timeline({scrollTrigger:{
//     trigger:".part-9",
//     start:"10% 90%",
//     end:"20% 90%",
//     scrub:true,
//     duration:"1",
//     //markers:true,
// }})

// Part9_follow.from(".follow",{
//     y:80,
//     opacity:"0",
// })

// var Part_9_ImgOne = gsap.timeline({scrollTrigger:{
//     trigger:".part-9",
//     start:"30% 90%",
//     end:"100% 90%",
//     scrub:true,
//     duration:"1",
//     //markers:true,
// }})

// Part_9_ImgOne.from("#img-8",{
//     y:80,
//     opacity:"0",
// })

// Part_9_ImgOne.from("#img-1",{
//     y:80,
//     opacity:"0",
// })

// Part_9_ImgOne.from("#img-2",{
//     y:80,
//     opacity:"0",
// })

// Part_9_ImgOne.from("#img-3",{
//     y:80,
//     opacity:"0",
// })

// Part_9_ImgOne.from("#img-4",{
//     y:80,
//     opacity:"0",
// })

// Part_9_ImgOne.from("#img-5",{
//     y:80,
//     opacity:"0",
// })

// Part_9_ImgOne.from("#img-6",{
//     y:80,
//     opacity:"0",
// })

// Part_9_ImgOne.from("#img-7",{
//     y:80,
//     opacity:"0",
// })

// var Part10 = gsap.timeline({scrollTrigger:{
//     trigger:".part-10",
//     start:"50% 90%",
//     end:"100% 90%",
//     scrub:true,
//     duration:"1",
//     //markers:true,
// }})

// Part10.from(".footer",{
//     y:80,
//     opacity:"0",
// })






// document.querySelector(".item-1").addEventListener("mousemove", function(){
//     document.querySelector("#mango").style.display="initial";
// })


// document.querySelector(".item-1").addEventListener("mouseleave", function(){
//     document.querySelector("#mango").style.display="none";
// })

// document.querySelector(".item-2").addEventListener("mousemove", function(){
//     document.querySelector("#banana").style.display="initial";
// })


// document.querySelector(".item-2").addEventListener("mouseleave", function(){
//     document.querySelector("#banana").style.display="none";
// })

// document.querySelector(".item-3").addEventListener("mousemove", function(){
//     document.querySelector("#pineapple").style.display="initial";
// })


// document.querySelector(".item-3").addEventListener("mouseleave", function(){
//     document.querySelector("#pineapple").style.display="none";
// })


// var float = document.querySelector(".items-p");

// float.addEventListener("mousemove",function(dets){
//     gsap.to(".pack", {
//         ease:Power1,
//         top:dets.clientY,
//         left:dets.clientX,
//         xPercent:-70,
//         yPercent:-120,
//     })
// })

// document.querySelector(".part-8-child").addEventListener("mousemove", function(){
//     document.querySelector("#choco").style.display="initial";
// })


// document.querySelector(".part-8-child").addEventListener("mouseleave", function(){
//     document.querySelector("#choco").style.display="none";
// })



// var floatOne = document.querySelector(".yes-no");

// floatOne.addEventListener("mousemove",function(deta){
//     gsap.to(".gif", {
//         ease:Power1,
//         top:deta.clientY,
//         left:deta.clientX,
//         xPercent:-70,
//         yPercent:-90,
//     })
// })