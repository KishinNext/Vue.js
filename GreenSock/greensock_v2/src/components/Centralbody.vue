<template>
  <section class="hero">
      <div class="hero-content">
          <h1>Get in the driver's seat and <span>get paid</span></h1> 
          <p>Drive on the largest network of active riders</p>

          <button class="singup-btn">Sing Up To Drive</button>
          <button class="talk-btn">Talk To Us</button>
      </div>

      <div class="illustration">
        <Image/>
      </div>

  </section>
</template>

<script>
import Image from './Image'
import { gsap } from 'gsap';
export default {
    components:{
        Image
    },
    mounted: function(){
        gsap.from('.hero-content',{ duration: 1.5, ease: "bounce.out", y: -40, opacity:0, delay:0.5 })
        gsap.from('.singup-btn',{ duration: 1.5, ease: "bounce.out", y: -40, opacity:0, delay:0.7 })
        gsap.from('.talk-btn',{ duration: 1.5, ease: "bounce.out", y: -40, opacity:0, delay:0.7 })
        gsap.from('.illustration',{ duration: 1.5, ease: "power2.out", opacity:0, delay:1 })

        // let tl = gsap.timeline({delay:0.2})

        // tl.from('.hero-content',{ duration: 1.5, ease: "bounce.out", y: -40, opacity:0})
        // tl.from('.singup-btn',{ duration: 1.5, ease: "bounce.out", y: -40, opacity:0 })
        // tl.from('.talk-btn',{ duration: 1.5, ease: "bounce.out", y: -40, opacity:0})
        // tl.from('.illustration',{ duration: 1.5, ease: "power2.out", opacity:0})

    }
}
</script>

<style>
    section.hero{

        
        height: 100vh;
    }
    section.hero h1{
        font-family: inherit;
        color:  white;
        font-size: 2.6em;
        margin-bottom: 1em;
        line-height: 1.2em;
    }
    section.hero h1 span{
        color: #FFD500;

    }
    section.hero p{
        font-size: 1em;
        color: white;
        margin-bottom: 2em;
    }
    button{
        padding: 20px 10px;
        margin-right: 10px;
        font-family: inherit;
        border: 1px solid white;
        font-size: 1em;
        background-color: none;
    }
    .singup-btn{
        background-color: white;
        color: #180037;
    }
    .talk-btn{
        background-color:  #180037;
        color: #ffffff;    
    }
    .hero-content{
        max-width: 300px;
        position:relative;
        top: 30%;
        left: 10%;
    }
    .illustration{
        display: flex;
        overflow: hidden;
        height: 100vh;
        align-items: flex-end;
        
    }
    .illustration svg{
        position: absolute;
        right: -1;
        width: 100%;
        height: auto;
        padding-left: 10em;
        margin-top: -50px;
    }

</style>