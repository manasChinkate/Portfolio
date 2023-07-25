function init() {
  gsap.registerPlugin(ScrollTrigger);



  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

init()
//=========================================================================

function time(){
  a=0
  setInterval(function(){
    a += Math.floor(Math.random()*15)
    if(a<100){
      
      document.querySelector(".loader h1").innerHTML = a+"%"
    }else{
      a=100
      document.querySelector(".loader h1").innerHTML = a+"%"
    }
 
  },150)
}


//=========================================================================

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: ".main",
   // markers:true,
    start: "top 30%",
    end: "top 30",
    scrub: 1,

  }
})
//=========================================================================

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 .logo",
    scroller: ".main",
   // markers:true,
    start: "top -70%",
    end: "top 40%",
    scrub: 3,
    

  }
})
//=========================================================================

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 .logo",
    scroller: ".main",
   // markers:true,
    start: "top -170%",
    end: "top -90%",
    scrub: 3,
    

  }
})
//=========================================================================

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 .logo",
    scroller: ".main",
    //markers:true,
    start: "top -350%",
    end: "top -240%",
    scrub: 3,

  }
})
//=========================================================================

var m = gsap.timeline({})
//=========================================================================
m.to(".loader h1",{
  delay:1,
  duration:1.5,
   
  onStart:time()
  
})
m.to(".loader",{
  delay:0.1,
  opacity:0,
  top:"-100vh"
})
m.to("#page1 h1",{
  opacity:"100%",
  delay:0.5
})
m.to("#page1 h2",{
  opacity:"100%",
  delay:0.5
})
m.to("#page1 .social ",{
  y: -80
})
m.to("#page1 .btn",{
  opacity:"100%",
  delay:0.5
})
m.to(".under",{
  opacity:"100%"
})

//=================================================================

tl.to("#page1 h1",{
  x: -300
},"manas")
tl.to("#page1 h2",{
  x: 300
},"manas")




//=========================================================================
tl2.to(".main",{
  
  backgroundColor:"#fff",
})
tl2.to(".main",{
  color:"#000",
})
tl2.to("#page2 img",{
  opacity:"100%"
})
tl2.to("#page1",{
  borderBottomColor:"#000"
})




//=========================================================================
tl3.to(".about-content",{
  borderBottomColor:"#fff"
},"amin")
tl3.to(".main",{
  color:"#fff"
})
tl3.to(".main",{
  backgroundColor:"#000"
},"amin")
tl3.to(".project-card",{
  backgroundColor:"##1b1616"
},"amin")
tl3.to(".certificate-card",{
  backgroundColor:"#1b1616"
},"amin")


//=========================================================================

tl4.to(".main",{
  backgroundColor:"#fff"
})
tl4.to(".main",{
  color:"#000"
})



