<template>
    <div class="colors">
        <colors-palette :colors="colors" />
        <color-picker :defaultColor="defaultColor" v-model="defaultColor" />
    </div>
</template>

<script>
import ColorsPalette from "@/components/ColorsPalette.vue"
import ColorPicker from "@/components/ColorPicker.vue"
import { colorsList } from '@/localdata/index.js'

export default {
    components: {
        ColorsPalette,
        ColorPicker
    },
    data() {
        return {
            colors: colorsList,
            defaultColor: '#87FF65'
        }
    },
}
</script>

<style scoped>
.colors {
    padding: 25px 50px;
}
</style>