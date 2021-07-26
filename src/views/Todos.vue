<template>
    <div class="todos">
        <my-title :titleText="titleTextTodos" />
        <p class="todos__descrp">Use '+' button below to add new plan</p>
        <hr class="divine-line" />
        <todo-list 
            :todos="todos" 
            :removeTodo="removeTodo"
            :editModeActivation="editModeActivation"
            :isDialogActive="isDialogActive"
            :showDialog="showDialog"
        />
        
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import MyTitle from '@/components/UI/MyTitle.vue'

export default {
    components:{
        TodoList,
        MyTitle
    },
    data() {
        return {
            titleTextTodos: 'Your Plans list'
        }
    }, 
}
</script>

<style scoped>
.todos {
    height: 90vh;
    position: relative;
    padding: 25px;
}

.todos__descrp {
    margin: 20px 0;
    opacity: .5;
    font-style: italic;
}

.divine-line {
    margin: 0 auto;
    max-width: 600px;
    border: 1px solid rgb(211, 202, 202);
}

</style>