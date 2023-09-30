<script setup>

</script>

<template>
    <nav class="bg-purple-500 flex justify-between  flex-wrap px-10 py-5">
        <router-link to="/"><h1 class="text-2xl font-bold"><i class="fa-solid fa-clipboard-list mr-2"></i>Todo List</h1></router-link>
        <ul class="flex space-x-10 text-lg font-semibold">
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="/login"><li>Login</li></router-link>
        <router-link to="/register"><li>Register</li></router-link>
        </ul>
    </nav>
</template>

<style scoped>
</style>
