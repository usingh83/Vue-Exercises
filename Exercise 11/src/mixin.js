export const myMixin={
  data:function(){
    return{
      text:''
    }
  },
  filters:{
    reverse:function(value){
      return value.split('').reverse().join('')
    }
  },
  computed:{
    reverse:function(){
       return this.text.split('').reverse().join('')
    },
    appendLength:function(){
      return this.text+'('+this.text.length+')'
    }
  }
}
