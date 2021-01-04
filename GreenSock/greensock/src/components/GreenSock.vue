<template>
  <div>
    <div class="circle"></div>
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {

  mounted: function(){
    // gsap.to('.circle', {x: 500, duration: 3})
    // gsap.from('.circle', {duration: 3, scale: 3})
    let tl = gsap.timeline({repeat:2, yoyo:true})


    tl.from('.circle', {
        duration:.3,
        scale:0,
        stagger:0.5,
        // delay:2
    });
    tl.from('.circle1', {
    duration:.3,
    scale:0,
    stagger:0.5,
    // delay:2
    });
        tl.from('.circle2', {
    duration:.3,
    scale:0,
    stagger:0.5,
    // delay:2
    });
  }
}
</script>

<style>

  .circle{
      background-color: goldenrod;
      height: 10em;
      width: 10em;
      border-radius: 100%;
  }
  .circle1{
      background-color: goldenrod;
      height: 10em;
      width: 10em;
      border-radius: 100%;
  }
  .circle2{
      background-color: goldenrod;
      height: 10em;
      width: 10em;
      border-radius: 100%;
  }
    .circle3{
      background-color: goldenrod;
      height: 10em;
      width: 10em;
      border-radius: 100%;
  }
</style>