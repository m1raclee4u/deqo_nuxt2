<template>
    <div class="help">
        <span>Возникли вопросы или нужна помощь  —  свяжитесь с нами:</span>
        <div class="buttons_help">
            <a href="https://t.me/whodatandrey" target="_blank" class="telegram" ></a>
            <a href="https://vk.com/" target="_blank" class="vk"></a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .help{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 270px;
        span{
            font-weight: 400;
            font-size: 16px;
            line-height: 160%;
            text-align: right;
            color: #A9A1A1
        }
    }
    .buttons_help{
        display: flex;
        justify-content: end;
        gap: 20px;
    }
    .telegram{
        width: 50px;
        height: 50px;
        border-radius: 10px;
        cursor: pointer;
        background-color: inherit;
        background-size: cover;
        background-image: url('../../assets/img/icons/aside-help/telegram.svg');
        &:hover{
            background-image: url('../../assets/img/icons/aside-help/telegram_on.svg');
        }
        
    }
    .vk{
        width: 50px;
        height: 50px;
        border-radius: 10px;
        cursor: pointer;
        background-color: inherit;
        background-size: cover;
        background-image: url('../../assets/img/icons/aside-help/vk.svg');
        &:hover{
            background-image: url('../../assets/img/icons/aside-help/vk_on.svg');
        }
    }
</style>