<template>
    <div class="todos">
        <h2 class="todos__title">Welcome to your Plans list</h2>
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
export default {
    components:{
        TodoList
    }    
}
</script>

<style scoped>
.todos {
    height: 90vh;
    position: relative;
    padding: 25px;
}

.todos__title {
    margin-top: 50px;
    font-size: 35px;
    text-transform: uppercase;
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