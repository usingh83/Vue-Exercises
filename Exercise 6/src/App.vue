<template>
    <div class="container">
        <server-status></server-status>
        <hr>
        <div class="row">
            <server-list></server-list>
            <server-detail></server-detail>
        </div>
        <hr>
        <server-footer></server-footer>
    </div>
</template>

<script>
import ServerStatus from './ServerStatus.vue';
import ServerList from './ServerList.vue';
import ServerDetail from './ServerDetail.vue';
import ServerFooter from './ServerFooter.vue';

export default{
    components:{
        'server-status':ServerStatus,
        'server-list':ServerList,
        'server-detail':ServerDetail,
        'server-footer':ServerFooter
    }
}
</script>

<style>

</style>
