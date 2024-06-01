<template>
    <div class="auth-form">
      <h2>{{ formTitle }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="form-actions">
          <button type="submit">{{ action }}</button>
          <router-link v-if="isLogin" to="/signup">Don't have an account? Sign up</router-link>
          <router-link v-else to="/login">Already have an account? Log in</router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isLogin: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        email: '',
        password: ''
      };
    },
    computed: {
      formTitle() {
        return this.isLogin ? 'Log In' : 'Sign Up';
      },
      action() {
        return this.isLogin ? 'Log In' : 'Sign Up';
      }
    },
    methods: {
      handleSubmit() {
        const credentials = {
          email: this.email,
          password: this.password
        };
  
        // Emit event to parent component with the form data
        this.$emit(this.isLogin ? 'login' : 'signup', credentials);
  
        // Reset form fields
        this.email = '';
        this.password = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .auth-form {
    max-width: 300px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-actions {
    margin-top: 1rem;
  }
  
  .form-actions button {
    margin-right: 0.5rem;
  }
  </style>
  