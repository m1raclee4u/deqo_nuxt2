<template>
    <div class="filter">
        <h3>Цена</h3>
        <div class="row">
            <p>Цена: &nbsp; <span>₽ <b>{{value[0]}}</b> — ₽ <b>{{this.maxPrice}}</b></span> </p>
            <button
            @click="updateFiltered"
            >Фильтр</button>
        </div>
            <el-slider
            class="filter"
            v-model="value"            
            range
            :max="Number(this.maxPrice)"
            >
            </el-slider>
        </div>
</template>

<script>
export default {
    props: ['maxPrice'],
    data () {        
        return {
            value: [0, 0]
        }
    },
    updated() {

        console.log(this.value[1]);
        this.value[1] = Number(this.maxPrice)
    },
    methods: {
        updateFiltered() {
            this.$emit('updateFiltered', this.value);
        }
    }
}
</script>

<style lang="scss" scoped>
    .el-slider__runway{
        color: white !important; 
    }
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