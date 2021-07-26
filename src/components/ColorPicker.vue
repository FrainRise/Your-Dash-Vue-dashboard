<template>
    <div class="color-picker">
        <my-title :titleText="titleTextPicker" />
        <div class="color-picker-group">
            <color-picker 
                class="picker"
                v-model="color"
                @changeColor="changeColor"
            />
            <div 
                class="color-preview"
                :style="{backgroundColor: color}"
            ></div>
        </div>

    </div>
</template>

<script>
import { ColorPicker } from 'vue-color-kit'
import MyTitle from '@/components/UI/MyTitle.vue'
import 'vue-color-kit/dist/vue-color-kit.css'
export default {
    components: {
        ColorPicker,
        MyTitle
    },
    props: {
        defaultColor: {
            type: String
        }
    },
    data() {
        return {
            color: this.defaultColor,
            titleTextPicker: 'Color Picker'
        }
    },
    methods: {
        changeColor(color) {
            const { r, g, b, a } = color.rgba
            this.color = `rgba(${r}, ${g}, ${b}, ${a})`
        },
    }
}
</script>

<style scoped>
.color-picker-group {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #fff;
    padding: 2% 5%;
    border-radius: 25px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .3);
}

.picker {
    width: 250px!important;
}

.color-preview {
    width: 500px;
    height: 300px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .3);
}

</style>