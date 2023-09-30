<script setup>

import { ref,reactive, onMounted } from 'vue'

import taskStore from '../store/tasksStore'

const tasks = taskStore()



</script>

<template>
    <div>
        <h1 class="text-3xl font-semibold text-center my-10">Welcome, Guest</h1>
        <div class="flex items-center justify-center space-x-2 pb-10">
            <div class="flex flex-col justify-center items-center border w-20 px-5 py-5">
                <h2 class="text-2xl font-semibold">{{ tasks.data.tasks.length}}</h2>
                <p class="text-lg font-medium">Tasks</p>
            </div>
            <div class="text-lg font-medium">
                <p>{{ tasks.getRemainingTask() }} are active</p>
            <p>{{ tasks.getCompletedTask() }} are completed</p>
            </div>
        </div>
    </div>
    <div class="flex justify-center mt-5 space-x-10 w-full">
        <input class="border-2 border-purple-500 px-5 w-6/12" type="text" name="" id="" v-model="tasks.data.inputTask" placeholder="Add New Task...">
        <button  @click="tasks.createNewTask()"  type="button" class="w-6/12 px-5 py-5 bg-purple-500 text-lg font-semibold ">Add New Task <span class="border p-3 border-black ml-5"><i class="fa-solid fa-plus"></i></span></button>
    </div>
    <section>
        <h1 v-if="tasks.data.tasks.length > 0" class="text-3xl font-semibold text-center my-10">Task List</h1>
        <div v-for="(task, index) in tasks.data.tasks"
        :key="index" class="border py-5 bg-purple-300 px-10 flex justify-between items-center">
           <div class="flex justify-center items-center">
            <span class=" flex items-center space-x-2"><input class="w-6 h-6" type="checkbox" v-model="task.completeInput" value="false">
                <h2 :class="task.completeInput ? 'line-through' : '' " class="text-2xl font-semibold">{{ task.showTaskName }}</h2>
            </span>
            
           </div>
        <button @click="tasks.deleteTask(index)" type="button"  class="text-2xl"><i class="fa-solid fa-delete-left"></i></button>
            

        </div>
    </section>
   
</template>

<style scoped>
</style>
