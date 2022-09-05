<template>
    <div class="filter">
        <h3>Фильтр по цене</h3>
        <div class="row">
            <p>Цена: &nbsp; <span>₽ <b>0</b> — ₽ <b>270</b></span> </p>
            <button>Фильтр</button>
        </div>
        <input type="range" name="" id="">
    </div>
</template>

<script>
export default {
    
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