<template>
    <div class="todo" :class="{isDone}">
        <div class="edit-todo__wrapper" v-if="isEditing" @click="finishEditing">
            <form class="edit-todo-form" @submit.prevent="finishEditing" @click.stop>
                <h3 class="edit-form__title">Edit your plans</h3>
                <input type="text" class="edit-form__input" v-model="newTodo.newName">
                <input type="text" class="edit-form__input" v-model="newTodo.newDescription">
                <input type="text" class="edit-form__input" v-model="newTodo.newExpirationDate">
                <button class="btn__edit" @click="finishEditing">Save Changes</button>
            </form>
        </div>
        <div class="todo__info-group" @click.prevent="$emit('completeTodo')">
            <h2 class="todo-info todo-name">{{ todo.name }}</h2>
            <p class="todo-info todo-description">{{ todo.description }}</p>
            <p class="todo-info todo-expirationDate">Finish: <small>{{ todo.expirationDate }}</small> </p>
        </div>
        <div class="todo__btns-group">
            <button class="btn__todo edit" :disabled="isDone" @click="editTodo">
                <font-awesome-icon class="todo-item-icons" icon="pen" />
            </button>
            <button class="btn__todo delete" @click="removeTodo(todo)">
                <font-awesome-icon class="todo-item-icons" icon="trash-alt" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        },
        removeTodo: {
            type: Function,
            required: true
        },
        isDone: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            newTodo: {
                newName: '',
                newDescription: '',
                newExpirationDate: ''
            },
            isEditing: false
        }
    },
    methods: {
        editTodo() {
            if(this.isEditing){
                this.finishEditing()
            } else {

                this.newTodo.newName = this.todo.name
                this.newTodo.newDescription = this.todo.description
                this.newTodo.newExpirationDate = this.todo.expirationDate
                this.isEditing = true
            }
        },
        finishEditing() {
            this.isEditing = false
            this.$emit('editTodo', this.newTodo)
            
        }
    }
}
</script>

<style scoped>
.isDone{
    background: rgb(164, 194, 168, .3)!important;
}

.isDone .todo-info {
    opacity: .3;
}
.todo {
    margin: 10px 250px;
    padding: 15px 0;
    background: #A4C2A8;
    border-radius: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;

}

.todo__info-group {
    padding: 0 5%;
    width: 60%;
    font-size: 20px;
    text-align: start;
    cursor: pointer;
}

.todo-info {
    max-width: 600px;
    margin: 10px 0;
    color: #2A2B2E;
    word-wrap: break-word;
}

.todo-expirationDate {
    padding-top: 15px;
}

.todo__btns-group {
    width: 20%;
}

.btn__todo {
    background: transparent;
    border: none;
}

.todo-item-icons {
    font-size: 22px;
    margin: 0 15px;
    transition: color .25s ease-in-out;
}

.btn__todo.edit:hover {
    color: #87FF65;
    cursor: pointer;
}

.btn__todo.edit:disabled {
    opacity: .3!important;
    color: inherit;
    cursor: auto!important;
}

.btn__todo.delete:hover {
    color: rgb(190, 7, 7);
    cursor: pointer;
}

.edit-todo__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5); 
    z-index: 2;
}

.edit-todo-form {
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

.edit-form__title {
    margin: 10px 0;
    font-size: 25px;
    text-transform: uppercase;
}

.edit-form__input {
    margin: 15px 0;
    padding: 15px 0  15px 25px;
    background: rgb(214, 214, 214);
    border: 2px solid transparent;

    font-size: 15px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
}

.edit-form__input:hover,
.edit-form__input:focus,
.edit-form__input:active {
    border: 2px solid #2A2B2E;
}

.btn__edit {
    margin-top: 50px;
    padding: 15px 25px;
    border: none;
    background: #ACEB98;
    color: #2A2B2E;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all .25s ease-in-out;
}

.btn__edit:hover,
.btn__edit:focus {
    background: #87FF65;
    color: #000;
    box-shadow: 1px 2px 5px  #000;
}

</style>