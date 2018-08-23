<template>
  <div>
    <div class="form-group">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" class="form-control" :value="firstname" @input="nameChange(true,$event)">
    </div>

    <div class="form-group">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" class="form-control" :value="lastname" @input="nameChange(false,$event)">
    </div>
  </div>
</template>

<script>
export default{
  props : ['value'],
  methods:{
    nameChange:function(isFirst,event){
      let name=''
      if(isFirst){
          name=event.target.value+' '+this.lastname
      }else{
        name=this.firstname+' '+event.target.value
      }
      this.value=name
      this.$emit('input',name)
    }
  },
  computed:{
    firstname:function(){
      return this.value.split(" ")[0]
    },
    lastname:function(){
      return this.value.split(" ")[1]
    }
  }
}
</script>
