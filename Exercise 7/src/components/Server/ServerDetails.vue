<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Select a server</p>
        <p v-else>Server #{{server.id}}'s current status is {{server.status}}</p>
        <hr>
        <button @click="resetStatus">Reset to Normal</button>
    </div>

</template>

<script>
import {serverBus} from "../../main.js"

export default{
    data:function(){
        return{
            server:null
        }
    },
    created(){
        serverBus.$on("serverSelected",(server)=>{
            this.server=server
        })
    },
    methods:{
        resetStatus:function(){
            this.server.status='Normal'
        }
    }
}
</script>

<style>

</style>
