<template>
    <transition name="fade-alert">
        <div class="alert__wrapper" @click="closeAlert">
            <font-awesome-icon class="btn__close" icon="times"/>
            <h2 class="alert__title">The news were refreshed!</h2>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        closeAlert: {
            type: Function,
            required: true
        }
    }
}
</script>

<style scoped>
.alert__wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-20%);
    margin: auto;
    width: 500px;
    height: 55px;
    border-radius: 0 0 15px 15px;
    background: rgb(251, 225, 109);
    
}

.alert__title {
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.btn__close {
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 20px;

    cursor: pointer;
    transition: color .25s ease-in-out;
}

.btn__close:hover {
    color: rgb(190, 7, 7);
}

.fade-alert-enter-active, .fade-alert-leave-active {
  transition: opacity .5s;
}


.fade-alert-enter, .fade-alert-leave-to {
  opacity: 0;
}
</style>