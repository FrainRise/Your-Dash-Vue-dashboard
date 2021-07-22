<template>
    <div class="news">
        <my-alert v-show="isRefreshed" :closeAlert="closeAlert" />
        <h2 class="news__title">Live news only for you</h2>
        <button class="btn__refresh" @click="refreshTheNews"><font-awesome-icon icon="sync-alt"/></button>
        <div class="news-list">
            <div class="article-item" v-for="article in news" :key="article.contentKey" :style="{backgroundImage: 'url(' + article.images[0].url + ')' }">
                <div class="text-caption">
                    <h2 class="article__title">{{ article.headline }}</h2>
                    <p class="article__description">{{ article.description}}</p>
                    <div class="article-footer">
                        <h6 class="article__author">{{ article.byline !== undefined || null ? article.byline: 'Anonymous'}}</h6>
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

export default {
    components: {
        MyAlert
    },
    data() {
        return {
            news: [],
            isRefreshed: false,
            componentKey: 0
        }
    },
    async mounted() {
        const receivedData = await fecthLiveNewsData()
        this.news = receivedData.data.feed;

        console.log(this.news)
    },
    methods: {
        async refreshTheNews() {
            const refreshedData = await fecthLiveNewsData()
            this.news = refreshedData.data.feed;

            this.isRefreshed = true
            setTimeout(() => {
                this.isRefreshed = false
            }, 5000)

            console.log('Refreshed data')
        },
        closeAlert(){
            this.isRefreshed = false
        }
    }
}
</script>

<style >
.news__title {
    padding: 75px 0 50px 0;
    font-size: 35px;    
    text-transform: uppercase;
}

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

.article-item:hover .text-caption .article__description {
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
</style>