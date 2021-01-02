app.component('footer-banco',{
    props:['valor', 'fecha'],

    template: /*html*/`
    <div class="bg-dark my-3 mt-2 text-white">
        <h3>{{text}} - {{valor}}</h3>
        <p>{{fecha}}</p>
    </div>
    `,
    data(){
        return{
            text:'Footer de mi sitio web',
            
        }
    }

})