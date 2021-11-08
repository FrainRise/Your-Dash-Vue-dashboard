<template>
    <my-loader v-if="isLoading" />
    <div class="news" v-else>
        <my-alert   
            v-show="isRefreshed" 
            :closeAlert="closeAlert" 
        />
        <my-title class="news__title" :titleText="titleText"/>
        <button class="btn__refresh" @click="refreshTheNews"><font-awesome-icon icon="sync-alt"/></button>
        <div class="news-list">
            <div class="article-item" 
                v-for="article in news" :key="article.contentKey" 
                :style="[
                    article.images[0] ? 
                    {'backgroundImage': 'url(' + article.images[0].url + ')'}
                    : {'backgroundImage': 'url('+ noImage +')'}
                ]"
            >
                <div class="text-caption">
                    <h2 class="article__title">{{ article.headline }}</h2>
                    <p class="article__description">{{ article.description}}</p>
                    <div class="article-footer">
                        <h6 class="article__author">{{ article.byline ? article.byline: 'Anonymous'}}</h6>
                        <h6 class="article__date">{{ article.published.slice(11, 16) }} {{ article.published.slice(0, 10).split('-').reverse().join('.') }}</h6>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fecthLiveNewsData } from '../api/index'
import MyAlert from '@/components/UI/MyAlert.vue'
import MyLoader from '@/components/UI/MyLoader.vue'
import MyTitle from '@/components/UI/MyTitle.vue'
import * as noImage from '@/assets/img/no-image.svg'

export default {
    components: {
        MyAlert,
        MyLoader,
        MyTitle
    },
    data() {
        return {
            news: [],
            isRefreshed: false,
            componentKey: 0,
            isLoading: true,
            noImage: noImage,
            titleText: 'Live news only for you'
        }
    },
    async mounted() {
        setTimeout(()=> {
            this.isLoading = false
        }, 4000)
        const receivedData = await fecthLiveNewsData()
        this.news = receivedData.data.feed;
    },
    methods: {
        refreshTheNews() {
            this.$forceUpdate()
            this.isRefreshed = true
            setTimeout(() => {
                this.isRefreshed = false
            }, 3000)
        },
        closeAlert(){
            this.isRefreshed = false
        }
    }
}
</script>

<style>
.btn__refresh {
    background: transparent;
    border: none;
    font-size: 30px;
    float: right;
    padding: 0 50px;
    cursor: pointer;
    
    transition: all .25s linear;
}

.btn__refresh:hover {
    color: #87FF65;
    animation: 1s infinite linear spin;
}

.news-list {
    padding: 25px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.article-item {
    position: relative;
    background-size: cover!important;   
    background-repeat: no-repeat;
    background-position: center center!important; 
    max-width: 100%;
    width: 30%;
    height: 400px;
    margin: 15px auto;
    padding: 25px;
    background: #fff;
}

.article-item:hover .text-caption {
    height: 100%;
    max-height: 100%;
}

.article-item:hover .text-caption .article__description,
.article-item:hover .text-caption .article__title {
    overflow: visible;
    display: block;
    margin: 25px 0;
}

.text-caption {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    max-height: 300px;
    padding: 25px;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9));
    color: #fff;
    text-align: justify;
    transition: all .5s linear;    
}

.article-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.article__title {
    overflow: hidden; 
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 10px 0;
    font-size: 22px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
}

.article__description {
    overflow: hidden; 
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 25px;
}

.article__author,
.article__date {
    padding: 20px 0;
    font: italic 700 15px sans-serif;
}

@keyframes spin {
    0% { transform: rotate(0deg);}
    100%{ transform: rotate(360deg);}
}

@media (max-width: 1500px) {
    .article-item {
        max-width: 100%;
        width: 45%;
    }
}

@media (max-width: 1100px) {
    .article-item {
        max-width: 100%;
        width: 80%;
    }
}

@media (max-width: 800px) {
    .article-item {
        max-width: 100%;
        width: 80%;
    }

    .article__title {
        font-size: 18px;
    }

    .article__description {
        font-size: 15px;
    }
}
</style>