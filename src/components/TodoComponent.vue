<script setup>
import { ref, onMounted } from 'vue'
import { useTodoStore } from '../stores/TodoStore'

const todoStore = useTodoStore()

const taskInput = ref('')
const taskInputItem = ref()

onMounted(() => {
    taskInputItem.value.focus()
})
</script>


<template>
    <div>
        <div class="h-100 w-full flex items-center justify-start bg-teal-lightest font-sans">
            <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div class="mb-4">
                    <h1 class="text-grey-darkest">Todo List</h1>
                    <div class="flex mt-4">
                        <input ref="taskInputItem" v-model="taskInput"
                            @keydown.enter="todoStore.AddTask({ completed: false, title: taskInput, lastUpdated: '' }); taskInput = ''"
                            class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                            placeholder="Add Todo">
                        <button @click.prevent="todoStore.AddTask({ completed: false, title: taskInput, lastUpdated: '' })"
                            class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
                    </div>
                </div>
                <div>
                    <!-- {{ todoStore.tasks }} -->
                    <div class="flex mb-4 items-center" v-for="task, index in todoStore.tasks" :key="index">
                        <p class="w-full text-grey-darkest" :class="task.completed ? 'line-through' : ''">{{ task['title']
                        }}
                        </p>
                        <button v-if="!task.completed" @click.prevent="todoStore.MarkAsCompleted(index)"
                            class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                        <button v-else @click.prevent="todoStore.MarkAsPending(index)"
                            class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Un-Done</button>
                        <button @click.prevent="todoStore.DeleteTask(index)"
                            class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
