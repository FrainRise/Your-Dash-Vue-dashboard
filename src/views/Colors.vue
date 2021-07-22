<template>
    <div class="colors">
        <colors-palette :colors="colors" />
        <color-picker :defaultColor="defaultColor" v-model="defaultColor" />
    </div>
</template>

<script>
import ColorsPalette from "@/components/ColorsPalette.vue"
import ColorPicker from "@/components/ColorPicker.vue"
export default {
    components: {
        ColorsPalette,
        ColorPicker
    },
    data() {
        return {
            colors: [
                {id: 1, name: 'Jet', hex: '#2A2B2E', text: '#fff'},
                {id: 2, name: 'Dark Liver', hex: '#5A5A66', text: '#fff'},
                {id: 3, name: 'Cambridge Blue', hex: '#A4C2A8', text: '#000'},
                {id: 4, name: 'Granny Smith Apple', hex: '#ACEB98', text: '#000'},
                {id: 5, name: 'Screamin Green', hex: '#87FF65', text: '#000'},
            ],

            defaultColor: '#87FF65'
        }
    },
}
</script>

<style scoped>
.colors {
    padding: 50px;
}
</style>