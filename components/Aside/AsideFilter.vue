<template>
    <div class="filter">
        <h3>Цена</h3>
        <div class="row">
            <p>Цена: &nbsp; <span>₽ <b>{{value[0]}}</b> — ₽ <b>{{value[1]}}</b></span> </p>
            <button>Фильтр</button>
        </div>
            <el-slider
            class=""
            v-model="value"
            range
            :max="200">
            </el-slider>
        </div>
</template>

<script>
export default {
    data () {
        return {
            value: [0, 200]
        }
    }
}
</script>

<style lang="scss" scoped>
    .row{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;
        button{
            font-size: 11px;
            font-weight: bold;
            width: 100px;
            height: 35px;
            text-transform: uppercase;
        }
    }
    .filter{
        margin-top: 60px;
        margin-bottom: 60px;
        h3{
            margin-bottom: 20px;
        }
        P{
            font-size: 12.5px;
            color: #a8a8a8;
            span{
                font-weight: 600;
            }
        }
        input[type=range] {
            width: 100%;
        }
    }
</style>