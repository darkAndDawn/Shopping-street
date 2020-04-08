<template>
    <div class="tab-bar">
        <!--    <div class="tab-bar-item"></div>-->
        <div class="tab-bar">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    .tab-bar {
        width: 100vw;
        height: 50px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        z-index: 99;
    }

    .tab-bar {
        box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
        background: white;
    }
</style>
