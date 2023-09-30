<script setup>

import usersStore from '../store/usersStore'

const auth = usersStore()


</script>


<template>
    <div>
      <h1 class="text-3xl font-semibold text-center my-10">Welcome to the Dashboard</h1>
      <template  v-if="auth.authStore.isAuthenticated">
        <p class="text-center text-2xl font-semibold" v-if="auth.authStore.user.value && auth.authStore.user.value.email">Hello, {{ auth.authStore.user.value.email }}!</p>
      </template>
    </div>
  </template>
  

  