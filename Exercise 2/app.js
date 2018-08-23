new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods:{
        	alertMe:function(){
        		alert("Alert")
        	},
        	valueUpdate:function(event){
        		this.value=event.target.value
        	}
        }
    });