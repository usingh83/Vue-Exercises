<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <app-full-name v-model="fullname"></app-full-name>
                    <div class="form-group">
                      <label for="mail">Mail</label>
                      <input type="text" id="mail" class="form-control" v-model="mail">
                    </div>

                    <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" id="password" class="form-control" v-model="password">
                    </div>
                    <div class="form-group">
                      <label for="storedData">Store Data?</label>
                      <label for="Yes"><input type="radio" id="Yes" value="Yes" v-model="storedData">Yes
                      </label>
                      <label for="No"><input type="radio" id="No" value="No" v-model="storedData">No
                      </label>
                    </div>
                    <button class="btn btn-primary" @click.prevent="submitted">submit</button>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullname}} </p>
                        <p>Mail: {{mail}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{storedData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from "./FullName.vue"
    export default {
      data: function(){
        return{
          fullname:'',
          mail:'',
          storedData:'Yes',
          isSubmitted:false
        }
      },
      methods:{
        submitted:function(){
          this.isSubmitted=true
        }
      },
      components:{
        appFullName:FullName
      }

    }
</script>

<style>
</style>
