<template>
    <div class="color-picker">
        <h2 class="color-picker__title">Color Picker</h2>
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
import 'vue-color-kit/dist/vue-color-kit.css'
export default {
    components: {
        ColorPicker
    },
    props: {
        defaultColor: {
            type: String
        }
    },
    data() {
        return {
            color: this.defaultColor
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
.color-picker__title {
    padding: 50px 0;
    font-size: 35px;    
    text-transform: uppercase;
}

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
}

</style>