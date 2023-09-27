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
            <div class="bg-white rounded shadow-xl shadow-gray-600 p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div class="mb-10">
                    <h1 class="text-grey-darkest">Todo List</h1>
                    <div class="flex mt-4">
                        <input ref="taskInputItem" v-model="taskInput"
                            @keydown.enter="todoStore.AddTask({ completed: false, title: taskInput, lastUpdated: '' }); taskInput = ''"
                            class="shadow-md shadow-gray-400 appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                            placeholder="Add Todo">
                        <button @click.prevent="todoStore.AddTask({ completed: false, title: taskInput, lastUpdated: '' })"
                            class="shadow-md shadow-gray-400 flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
                    </div>
                </div>
                <div>
                    <!-- {{ todoStore.tasks }} -->
                    <div class="flex mb-4 items-center border-b-2 border-spacing-12" v-for="task, index in todoStore.tasks"
                        :key="index">
                        <p class="w-full text-grey-darkest" :class="task.completed ? 'line-through' : ''">{{ task['title']
                        }}
                        </p>
                        <button v-if="!task.completed" @click.prevent="todoStore.MarkAsCompleted(index)"
                            class="flex-no-shrink p-2 ml-4 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6  text-green-900 hover:bg-green-800 hover:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>

                        <button v-else @click.prevent="todoStore.MarkAsPending(index)" class="flex-no-shrink p-2 ml-4 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 text-green-900 hover:bg-green-800 hover:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                            </svg>
                        </button>

                        <button @click.prevent="todoStore.DeleteTask(index)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6 rounded-full  text-red-900 hover:bg-red-800 hover:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
