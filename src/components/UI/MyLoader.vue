<template>
    <div class="loader-wrapper">
        <div class="loader">
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
            <div class="sk-cube3 sk-cube"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.loader-wrapper{
    width: 100%;
    height: 100%;
}

.loader {
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    transform: rotateZ(45deg);
}

.loader .sk-cube {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    transform: scale(1.1);
}

.loader .sk-cube:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    animation: sk-foldCubeAngle 2.4s infinite linear both;
    transform-origin: 100% 100%;
}

.loader .sk-cube2 {
    transform: scale(1.1) rotateZ(90deg);
}

.loader .sk-cube3 {
    transform: scale(1.1) rotateZ(180deg);
}

.loader .sk-cube4 {
    transform: scale(1.1) rotateZ(270deg);
}

.loader .sk-cube2:before {
    animation-delay: 0.3s;
}

.loader .sk-cube3:before {
    animation-delay: 0.6s;
}

.loader .sk-cube4:before {
    animation-delay: 0.9s;
}

@keyframes sk-foldCubeAngle {
    0%, 10% {
        transform: perspective(140px) rotateX(-180deg);
        opacity: 0;
    }
    25%, 75% {
        transform: perspective(140px) rotateX(0deg);
        opacity: 1;
    }
    90%, 100% {
        transform: perspective(140px) rotateY(180deg);
        opacity: 0;
    }      
}
</style>