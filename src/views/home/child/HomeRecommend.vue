<template>
    <div>
        <div class="recommend">
            <div class="item" v-for="(item,index) in recommendList">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                    <span class="title">{{item.title}}</span>
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
        font-size: 13px;
        text-align: center;
        border-bottom: 10px solid #eee;
        padding: 10px 0;
    }
    .recommend img {
        width: 25vw;
        /*height: 80px;*/
        flex: 1;
        margin-bottom: 5px;
    }
    .recommend .title{
        color: #666;
    }
</style>