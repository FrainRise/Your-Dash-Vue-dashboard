<template>
    <div class="todo-form__wrapper" v-if="isDialogActive" @click="showDialog">
        <form class="todo-form" @submit.prevent @click.stop>
            <font-awesome-icon class="btn__close" icon="times" @click="showDialog" />
            <h3 class="todo-form__title">Add new plans</h3>
            <input type="text" class="todo-form__input" v-model="todo.name" placeholder="Name of activity..." />
            <input type="text" class="todo-form__input" v-model="todo.description" placeholder="Description..." />
            <input type="text" class="todo-form__input" v-model="todo.expirationDate" placeholder="Expiration date..." />
            <button class="todo-form__add" @click="createTodo">Create</button>            
        </form>
    </div>
</template>

<script>
export default {
    props: {
        isDialogActive: {
            type: Boolean
        },
        showDialog: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            todo: {
                name: '',
                description: '',
                expirationDate: '',
                isDone: false
            },
        }
    },
    methods: {
        createTodo() {
            this.todo.id = Date.now()
            this.$emit('createTodo', this.todo)
            
            this.todo = {
                name: '',
                description: '',
                expirationDate: ''
            }
        }
    },
}
</script>

<style scoped>
.todo-form__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5); 
    z-index: 2;
}

.todo-form {
    display: flex;
    flex-direction: column;
    padding: 50px;
    width: 500px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    background: #fff;
}

.todo-form__title {
    margin: 10px 0;
    font-size: 25px;
    text-transform: uppercase;
}

.todo-form__input {
    margin: 15px 0;
    padding: 15px 0  15px 25px;
    background: rgb(214, 214, 214);
    border: 2px solid transparent;

    font-size: 15px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
}

.todo-form__input:hover,
.todo-form__input:focus,
.todo-form__input:active {
    border: 2px solid #2A2B2E;
}

.todo-form__btn-group {
    display: flex;
    justify-content: space-between;
}

.todo-form__add,
.todo-form__cancel {
    margin-top: 50px;
    padding: 15px 25px;
    border: none;
    color: #2A2B2E;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all .25s ease-in-out;
}

.todo-form__add {
    background: #ACEB98;
}

.todo-form__add:hover,
.todo-form__add:focus {
    background: #87FF65;
    color: #000;
    box-shadow: 1px 2px 5px  #000;
}

.todo-form__cancel:hover {
    background: #bebebe;
    color: #000;
    box-shadow: 1px 2px 5px  #000;
}

.btn__close {
    position: absolute;
    top: 25px;
    right: 45px;
    font-size: 20px;

    cursor: pointer;
    transition: color .25s ease-in-out;
}

.btn__close:hover {
    color: rgb(190, 7, 7);
}
</style>