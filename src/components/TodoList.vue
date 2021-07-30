<template>
    <todo-form  
            :isDialogActive="isDialogActive" 
            :showDialog="showDialog"
            @createTodo="createTodo"
     />
    <div class="markers-group" v-show="todos.length > 0">
        <h2 class="marker total">Total: {{ totalTodos }}</h2>
        <h2 class="marker done">Done: {{ doneTodos }} </h2>
    </div>
    <div class="todo-list" v-if="todos.length > 0">
        <transition-group name="todo-list">
            <todo-item 
                v-for="todo in todos"
                :key="todo.id"
                :todo="todo"
                :isDone="todo.isDone"
                :removeTodo="removeTodo"
                @completeTodo="completedTodo(todo)"
                @editTodo="editTodo(todo, $event)"
                 
            />
        </transition-group>
    </div>
    <h2 class="warning-message" v-else style="color: red">
        Todo list is empty
    </h2>
    <button class="btn__add-todo" @click="showDialog"><span>+</span></button>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
import TodoForm from '@/components/TodoForm.vue'
import { todoListDefault } from '@/localdata/index.js'

export default {
    components: {
        TodoItem,
        TodoForm
    },
    data() {
        return {
            todos: todoListDefault,
            isEdit: false,
            isDialogActive: false
        }
    },
    methods: {
        createTodo(todo) {
            this.todos.push(todo)
            // console.log(this.todos)
        },
        completedTodo(todo) {
            todo.isDone = !todo.isDone
        },
        removeTodo(todo) {
            this.todos = this.todos.filter(itemTodo => itemTodo.id !== todo.id)
        },
        editTodo(todo, newTodo){
            // console.log(newTodo)
            todo.name = newTodo.newName
            todo.description = newTodo.newDescription
            todo.expirationDate = newTodo.newExpirationDate
        },
        showDialog() {
            this.isDialogActive = !this.isDialogActive
        }
    },
    computed: {
        totalTodos() {
            return this.todos.length
        },
        doneTodos() {
            return this.todos.filter(item => item.isDone).length
        }
    }
}
</script>

<style  scoped>
.todo-list {
    position: relative;
    margin: 50px 0;
}

.warning-message {
    position: absolute;
    top: 50%;
    left: 50%;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
}

.todo-list-enter-active,
.todo-list-leave-active {
    transition: all .4s ease;
}

.todo-list-enter-from,
.todo-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.btn__add-todo {
    position: fixed;
    bottom: 50px;
    right: 50px;
    background: #87FF65;
    width: 50px;
    height: 50px;
    color: #2A2B2E;
    font-size: 25px;
    line-height: 50px;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    transition: all .25s ease-in-out;
}

.btn__add-todo:hover,
.btn__add-todo:focus {
    color: #000;
    box-shadow: 1px 1px 2px #000;
    transform: scale(1.2);
}

.btn__add-todo span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.markers-group {
    display: flex;
    justify-content: center;
}

.markers-group .marker {
    margin: 25px 25px 0 25px;
}
</style>