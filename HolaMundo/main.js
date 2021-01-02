const app = Vue.createApp({
    data(){
        return{
            titulo: 'Mi banco con Vue.js',
            cantidad: 1500,
            enlace: 'https://youtube.com/bluuweb',
            estado: true,
            servicios: ['Transferencias', 'Pagos', 'Prestamos', 'Vender el alma al diablo', 'Cheques'],
            desactivar: false
        }
    },
    methods: {
        agregarSaldo(){
            if(this.cantidad >= 0){
                this.cantidad = this.cantidad + 100
                this.desactivar = false                
            }

        },
        quitarSaldo(valor){
            if(this.cantidad == 0){
                this.desactivar = true
                alert('Saldo en cero')
                return
            }
            else{
                this.cantidad = this.cantidad - valor
            }
        }
    },
    computed:{
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success':'text-danger'
        },
        mayusculasTexto(){
            return this.titulo.toUpperCase()
        }
    }
})
