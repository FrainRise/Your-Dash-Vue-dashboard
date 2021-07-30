<template>
    <div class="colors-palette">
        <my-title :titleText="titleTextPalette" />
        <div class="colors-group">
            <div class="color-item" v-for="color in colors" :key="color.id" :style="{backgroundColor: color.hex, color: color.text}">
                <h2 class="color-hex">{{ color.hex }}</h2>
                <h6 class="color-name">{{ color.name }}</h6>
            </div>
        </div>
    </div>
</template>

<script>
import MyTitle from '@/components/UI/MyTitle.vue'

export default {
    components: {
        MyTitle
    },
    props: {
        colors: {
            type: Array,
            require: true
        }
    },
    data() {
        return {
            titleTextPalette: 'Colors Palette'
        }
    },
}
</script>

<style scoped>

.colors-palette__title {
    padding: 50px 0;
    font-size: 35px;    
    text-transform: uppercase;
}

.colors-group {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #fff;
    padding: 2% 5%;
    border-radius: 25px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .3);
}

.color-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 300px;
    width: 20%;
    padding: 3%;
}

@media (max-width: 1300px) {
    .color-item {
        height: 200px;
        padding: 3% 1%;
    } 

    .color-hex {
        font-size: 20px; 
    }
    .color-name {
        font-size: 10px;
    }
}

@media (max-width: 950px) {
    .color-hex {
        font-size: 15px; 
    }
    .color-name {
        font-size: 10px;
    }
}
</style>