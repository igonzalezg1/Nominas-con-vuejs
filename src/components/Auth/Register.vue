<template>
    <div class="register">
        <h1>Crear cuenta</h1>
        <!-- Prevent es para que no se refresque la pagina al hacer submit -->
        <form class="ui form" @submit.prevent="onRegister">
            <div class="field">
                <input type="text" placeholder="Correo electronico" v-model="formData.email" />
            </div>
            <div class="field">
                <input type="password" placeholder="Contrasena" v-model="formData.password" />
            </div>
            <div class="field">
                <input type="password" placeholder="Repetir contrasena" v-model="formData.repeatPassword" />
            </div>
            <button type="submit" class="ui button positive fluid">Registrar</button>
        </form>
        <p @click="changeForm">Iniciar sesion</p>
    </div>
</template>
<script>
export default {
    name: "Register",
    props:{
        changeForm: Function,
    },
    setup()
    {
        let formData = {};
        const onRegister = () => {
            console.log(formData);
        }
        return {
            formData,
            onRegister
        }
    }
}
</script>
<style lang="scss" scoped>
.register{
    background-color: #fff;
    padding: 30px;
    box-shadow: 0px 0px 38px -5px rgba(0,0,0,0.45);
    width: 400px;
    border-radius: 10px;
}
h1{
    text-align: center;
    margin-bottom: 30px;
}

form{
    input.error {
        border-color: #faa !important;
        background-color: #ffeded !important;
    }
}

p {
    text-align: center;
    margin-top: 30px;
    &:hover{
        cursor: pointer;
        opacity: 0.6;
    }
}
</style>