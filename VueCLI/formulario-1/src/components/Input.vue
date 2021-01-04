<template>
    <div class="row justify-content-md-center">
        <input 
        type="text"
        class="form-control mt-5 w-auto"
        placeholder="Ingrese Nombre"
        v-model.trim="tarea.nombre"
        maxlength="25"
        >
    </div>
    <div class="row justify-content-md-center">
        <input
        type="text"
        class="form-control my-3 w-auto"
        placeholder="Ingrese Correo"
        v-model="tarea.correo"
        maxlength="25"
        >
    </div>

    <div class="row justify-content-md-center">
        <div class="form-check form-check-inline col-md-auto">
        <input type="checkbox" class="form-check-input" id="inlineChecokbox1" value="JavaScript" v-model="tarea.categorias">
        <label for="inlineCheckbox1" class="form-check-label">JavaScript</label>
        </div>
        <div class="form-check form-check-inline col-md-auto">
        <input type="checkbox" class="form-check-input" id="inlineChecokbox2" value="Python" v-model="tarea.categorias">
        <label for="inlineCheckbox2" class="form-check-label">Python</label>
        </div>
        <div class="form-check form-check-inline col-md-auto">
        <input type="checkbox" class="form-check-input" id="inlineChecokbox3" value="Node.js" v-model="tarea.categorias">
        <label for="inlineCheckbox3" class="form-check-label">Node.js</label>
        </div>

    </div>


    <div class="mt-2 row justify-content-md-center">
        <div class="form-check form-check-inline col-md-auto">
        <input type="radio" id="radio_1" class="form-check-input" value="Urgente" v-model="tarea.estado">
        <label for="radio_1">Urgente</label>
        </div>
        <div class="form-check form-check-inline col-md-auto">
        <input type="radio" id="radio_2" class="form-check-input" value="Relax" v-model="tarea.estado">
        <label for="radio_2">Relax</label>
        </div>
    </div>

    <div class="row justify-content-md-center">
        <input type="number" class="form-control mt-2 w-auto" v-model.number="tarea.numero" maxlength="10" placeholder="Ingrese celular" required>
    </div>

    <div class="row justify-content-md-center">
        <button class="btn btn-dark mt-5 btn-block row justify-content-md-center w-auto" type="submit" :disabled="bloquear">Procesar</button>
    </div>
</template>

<script>
export default {
    props:{
        tarea: Object
    },
    computed: {
        bloquear(){
        if(this.tarea.nombre.trim() === "" || this.tarea.correo.trim() === "" || this.tarea.numero.toString().length != 10){
            return true
        }
        else
            return false

    }
  }
}
</script>

<style>

</style>