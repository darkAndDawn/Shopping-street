<template>
    <div>
        <div class="recommend">
            <div class="item" v-for="(item,index) in recommendList" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                    <p class="title">{{item.title}}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props: {
            recommendList: {
                type: Array,
                default() {
                    return []
                }
            }
        },
    }
</script>

<style scoped>
    .recommend {
        width: 100vw;
        display: flex;
        text-align: center;
        border-bottom: 10px solid #eee;
        padding: 10px 0;
    }
    .item{
        flex: 1;
    }
    .recommend img {
        width: 80px;
        height: 80px;
    }
    .recommend .title{
        font-size: 13px;
        color: #666;
    }
</style>