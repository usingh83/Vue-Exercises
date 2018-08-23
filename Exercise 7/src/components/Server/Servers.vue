<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server 
            v-for="Server in Servers" 
            :server="Server"></app-server>
        </ul>
    </div>
</template>

<script>
import AppServer from "./Server.vue"

export default{
    data: function(){
        return {
            Servers:[
                {id:1,status:'Normal'},
                {id:2,status:'Critical'},
                {id:3,status:'Unknown'},
                {id:4,status:'Normal'}
            ]
        }
    },
    components:{
        'app-server':AppServer
    }
}
</script>

<style>

</style>
