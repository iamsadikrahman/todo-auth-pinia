import {defineStore} from 'pinia';

import {ref, reactive} from 'vue'

const taskStore = defineStore('tasks', ()=>{
    const data = reactive({
        inputTask: "",
        tasks: [],
      });
      
      const createNewTask = ()=> {
      
        if (data.inputTask === "") {
          alert("Please Write at least one letter!");
        } else {
          data.tasks.push({
            completeInput: false,
            showTaskName: data.inputTask,
            deleteTask: "",
          });
          data.inputTask = "";
        }
      }
      
      const deleteTask = (index)=> {
        data.tasks.splice(index, 1);
      }
      
      // .........
      const getRemainingTask = ()=> {
        const result = data.tasks.filter((task) => {
          return !task.completeInput;
        });
        return result.length;
      }


      const getCompletedTask = () => {
        const result = data.tasks.filter((task) => {
          return task.completeInput;
        });
        return result.length;
      }

      

      return {
        data,
        createNewTask,
        deleteTask,
        getRemainingTask,
        getCompletedTask
      }
})

export default taskStore