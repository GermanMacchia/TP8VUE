<template>
  <section class="src-components-formulario mx-auto w-75 mt-4">
    <vue-form :state="$store.state.formState" @submit.prevent="enviar()">
      <!--Campo de Entrada nombre entre 5 y 15 caracteres-->
      <validate tag="div">
        <label for="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          v-model.trim="$store.state.formData.nombre"
          required
          autocomplete="off"
          class="form-control"
          name="nombre"
          minlength="3"
          maxlength="15"
        />

        <field-messages name="nombre" show="$dirty">
          <div class="alert alert-info mt-1">OK</div>
          <div slot="required" class="alert alert-danger mt-1">
            El nombre es un campo requerido
          </div>
          <div slot="minlength" class="alert alert-danger mt-1">
            El nombre requiere como mínimo 5 caracteres
          </div>
        </field-messages>
      </validate>

      <!--Campo de Entrada  edad entre 18 y 120 años -->
      <validate tag="div">
        <label for="edad">Edad</label>
        <input
          id="edad"
          type="number"
          v-model.trim="$store.state.formData.edad"
          required
          class="form-control"
          name="edad"
          min="18"
          max="120"
        />
        <!--Mensajes de Validacion-->
        <field-messages name="edad" show="$dirty">
          <div class="alert alert-info mt-1">OK!</div>
          <div slot="required" class="alert alert-danger mt-1">
            La edad es un campo requerido
          </div>
          <div slot="min" class="alert alert-danger mt-1">
            El usuario no puede tener menos de 18 años
          </div>
          <div slot="max" class="alert alert-danger mt-1">
            El usuario no puede tener más de 120 años
          </div>
        </field-messages>
      </validate>

      <!--Campo de Entrada email válido--->
      <validate tag="div">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model.trim="$store.state.formData.email"
          required
          class="form-control"
          name="email"
        />
        <!--Mensajes de Validacion-->
        <field-messages name="email" show="$dirty">
          <div class="alert alert-info mt-1">OK!</div>
          <div slot="required" class="alert alert-danger mt-1">
            El email es un campo requerido
          </div>
          <div slot="email" class="alert alert-danger mt-1">
            El email debe tener un formato válido
        </div>
        </field-messages>
        </validate>
        <button :disabled="$store.state.formState.$invalid" class="btn btn-primary my-3">
        Enviar
      </button>
    </vue-form>

    <hr>
    <div class="jumbotron bg-dark border border-5 border-white">
      <h5>INGRESOS</h5>

      <div>
        <div v-if="$store.state.usuarios.length">
          <table class="table table-dark">
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Email</th>
            </tr>
            <tr v-for="(usuario, index) in $store.state.usuarios" :key="index">
              <td>{{ usuario.nombre }}</td>
              <td>{{ usuario.edad }}</td>
              <td>{{ usuario.email }}</td>
            </tr>
          </table>
        </div>
        <div v-else class="alert alert-danger" role="alert">
          No hay entradas 
        </div>
      </div>

    </div>

    <hr />
    <div class="d-flex mx-auto">
      <div class="jumbotron m-1 w-50 bg-dark">
        <h5>DATOS</h5>
        <pre class="texto">{{ $store.state.formData }}</pre>
      </div>
      <div class="jumbotron m-1 w-50 bg-dark">
        <h5>ESTADO</h5>
        <pre class="texto">{{ $store.state.formState }}</pre>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {
        this.$store.dispatch('iniciarForm')  
    },
    data () {
      return {
      }
    },
    methods: {
      async enviar(){
        this.$store.dispatch('insertarUsuario')    
        this.$store.dispatch('resetForm')
      }
    },
    computed: {

    }
}
</script>

<style>
.src-components-formulario {
  height: 100%;
}

.form-group {
  width: 50vw;
}
.texto {
  color: aliceblue;
  height: 19vh;
}
</style>
