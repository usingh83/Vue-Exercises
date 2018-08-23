new Vue({
        el: '#exercise',
        data: {
            value: 0,
            result: 'not there yet'
        },
        watch:{
        	value:function(value){
        		this.result=value!=37 ? 'not there yet'  : 'done'
        	},
        	result:function(){
        		var vm=this
        		setTimeout(function(){
        			vm.value=0
        		},5000)
        	}
        }
    });

/*

new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed:{
        	result:function(){
        		return this.value!=37 ? 'not there yet'  : 'done'
        	}
        },
        watch:{
        	result:function(value){
        		var vm=this
        		setTimeout(function(){
        			vm.value=0
        		},5000)
        	}
        }
    });
*/