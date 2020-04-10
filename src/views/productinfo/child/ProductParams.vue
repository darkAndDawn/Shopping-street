<template>
    <div class="params">
        <table class="param-info">
            <tr v-for="(item,index) in productParams.rele" :key="index">
               <td v-for="(item1,index1) in item" :key="index1">{{item1}}</td>
            </tr>
        </table>
        <table class="param-rule">
            <tr v-for="(item,index) in productParams.info" :key="index">
                <td class="key">{{item.key}}:</td>
                <td class="value">{{item.value}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ProductParams",
        props:{
            productParams:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
.params{
    padding: 20px 15px;
    font-size: 14px;
}
    .param-info{
        width: 100%;
    }
.param-info tr{
    height: 40px;
}
    .param-info tr td{
        border-bottom: 1px solid rgba(0,0,0,.1);
    }
    .param-rule{
        font-size: 14px;
    }
    .param-rule .key{
        width: 95px;
    }
.param-rule tr{
    height: 40px;

}
.param-rule tr td{
    border-bottom: 1px solid rgba(0,0,0,.1);
}
.param-rule .value{
    color: #ff5777;
}
</style>