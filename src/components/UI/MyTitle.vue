<template>
    <h2 class="title">
        {{ titleText }}
    </h2>
</template>

<script>
export default {
    props:{
        titleText: {
            type: String
        }
    }
}
</script>

<style scoped>
.title {
    padding: 50px 0;
    font-size: 35px;
    text-transform: uppercase;
}
</style>