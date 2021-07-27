<template>
    <div class="guideline">
         <my-title class="custom-title" :titleText="titleTextGuide" />
         <div class="guideline-list">
            <div class="guideline-list__item" v-for="guideline in guideLineList" :key="guideline.id">
                <div class="image__wrapper">
                    <img :src="guideline.img" alt="" class="guideline-image">
                </div>
                <div class="text__wrapper">
                    <h2 class="guideline-item__title">{{ guideline.title }}</h2>
                    <p class="guideline-item__descrp">{{ guideline.description }}</p>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
import MyTitle from '@/components/UI/MyTitle.vue'
import todosImage from '@/assets/img/todos.jpg'
import statsImage from '@/assets/img/stats.jpg'
import chartsImage from '@/assets/img/charts.png'
import newsImage from '@/assets/img/news.jpg'
import colorsImage from '@/assets/img/colors.jpg'

export default {
    components: {
        MyTitle
    },
    data() {
        return {
            titleTextGuide: 'Guideline',
            guideLineList: [
                {id: 1, img: todosImage, title: 'MyTodos', description: "MyTodos is pretty simple approach to plan your day the way you want. You can create different 'todos' and set the finish date. Sounds cool, doesn't it?"},
                {id: 2, img: statsImage, title: 'Stats', description: 'Stats is a module for detection of your business activities. You can check out all your incomes, expenses and net profit by using this dash!'},
                {id: 3, img: chartsImage, title: 'Charts', description: 'Charts is an advanced version of Stats. There are a lot of graphics and diagrams of your business activities. It will help you to get more accurate information!'},
                {id: 4, img: newsImage, title: 'News', description: 'The news module, as the name implies, provides the latest news from an ESPN source. Only fresh, interesting and intriguing news in our News module'},
                {id: 5, img: colorsImage, title: 'Colors', description: 'Colors is consisting of two components: Colors Palette and Colors Picker. Colors Palette shows you our dashboard palette. In turn, Color Picker give you advantage to get the color as you want!'},
            ],
            todosImage: todosImage,
            statsImage: statsImage,
            chartsImage: chartsImage,
            newsImage: newsImage,
            colorsImage: colorsImage

        }
    },
}
</script>

<style  scoped>
.custom-title {
    padding: 0;
}

.guideline-list {
    margin-top: 50px;
}

.guideline-list__item {
    background: #ACEB98;
    margin: 25px auto;
    width: 50%;
    height: 300px;
    display: flex;
    justify-content: center;
}

.image__wrapper {
    width: 50%;
    height: 100%;
}

.image__wrapper img {
    height: 300px;
    width: 350px;
}

.text__wrapper {
    padding: 50px;
    text-align: justify;
}

.text__wrapper h2 {
    padding: 25px 0;
    text-transform: uppercase;
}

.text__wrapper p {
    font-size: 16px;
    line-height: 25px;
}
</style>