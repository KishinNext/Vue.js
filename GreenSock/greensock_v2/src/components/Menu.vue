<template>
    <header>
        <div class="logo">Ride.</div>
            <nav>
                <ul>
                        <li><router-link  to="/about" class="routerLink">Our Products</router-link></li>
                        <li><router-link  to="/about" class="routerLink">Our Company</router-link></li>
                        <li><router-link  to="/about" class="routerLink">Safety</router-link></li>
                        <li><router-link  to="/about" class="routerLink">Help</router-link></li>
                    
                </ul>
            </nav>
    </header>

</template>

<script>
import { gsap } from 'gsap';
export default {
    mounted: function(){
        gsap.from('header',{duration:0.6, ease:"power2.out", y:-200})
    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 100;
}
.logo{
    font-weight: 600;
    font-size: 2.2em;
    color: white;
    margin-top: 6px;

}

nav{
    color: white;
    margin-top: 10px;
}
nav ul{
    margin: 0;
    padding: 0;
    list-style: none;

}
nav ul li{
    display: inline;
    padding: 20px;
}
.routerLink{
    color: white;
    display: inline;
    text-decoration: none;
}
.menu-fixed {
	position:fixed;
	z-index:1000;
	top:0;
	max-width:1000px;
	width:100%;
	box-shadow:0px 4px 3px rgba(0,0,0,.5);
}
</style>