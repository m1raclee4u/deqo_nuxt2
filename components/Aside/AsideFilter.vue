<template>
    <div class="filter todo">
        <h3>Цена</h3>
        <div class="customRow">
            <p>Цена: &nbsp; <span>₽ <b>{{value[0]}}</b> — ₽ <b>{{value[1]}}</b></span> </p>            
        </div>        
        <el-slider
        class="filterRange"
        range
        v-model="value"
        :min="min"
        :max="max"
        >
        </el-slider>
        <button
            @click="updateFiltered"
            >Фильтр</button>
    </div>
        
</template>

<script>
export default {
    data(){
    return {
        value: [0, 3500]
        }
    },
    computed: {
        // value:{
        //     get: function (){
        //         return [this.min, this.max]
        //     },
        //     set: function (newValue) {
        //         var names = newValue
        //         this.min = names[0]
        //         this.max = names[1]
        //         // newValue[0] = newValue[0]  
        //         // newValue[1] = newValue[1]
        //     }
        // },
        max(){
            return Math.max(...this.$store.getters["products"].map(o => o.price))
        },
        min(){
            return Math.min(...this.$store.getters["products"].map(o => o.price))
        }
    },
    updated(){
        this.max;
        this.min;
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
    button{
            font-size: 11px;
            font-weight: bold;
            width: 100px;
            height: 35px;
            text-transform: uppercase;
    }
    .customRow{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;
        flex-wrap: nowrap;
        
    }
    .filter{
        display: flex;
        flex-direction: column;
        gap: 20px;
        h3{
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 23px;

            /* основной */

            color: #685F5F;
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