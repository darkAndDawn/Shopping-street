<template>
    <div class="tab">
        <div v-for="(item,index) in tabData" :key="index" class="item" :class="{active:index==activeIndex}" @click="tabFn(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    const comTabIndex = {activeIndex:0}
    export default {
        name: "HomeTabControl",
        data() {
            return comTabIndex
        },
        props: {
            tabData: {
                type: Array,
                default() {
                    return ['流行', '新款', '精选']
                }
            }
        },
        methods: {
            tabFn(index) {
                this.activeIndex = index
                this.$emit("tabClick",index)
            }
        }

    }
</script>

<style scoped>
    .tab {
        width: 100vw;
        height: 40px;
        display: flex;
        text-align: center;
        line-height: 40px;
    }

    .item {
        flex: 1;
    }

    .item span {
        padding: 5px;
    }

    .active span {
        color: #ff5777;
        border-bottom: 3px solid #ff5777;
    }
</style>