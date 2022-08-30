<template>
    <header>
        <button class="burger__menu">
           <svg 
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="17px" height="16px">
            <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
            d="M0.0,15.999 L0.0,13.999 L16.999,13.999 L16.999,15.999 L0.0,15.999 ZM0.0,6.999 L16.999,6.999 L16.999,8.999 L0.0,8.999 L0.0,6.999 ZM0.0,0.0 L16.999,0.0 L16.999,1.999 L0.0,1.999 L0.0,0.0 Z"/>
            </svg>
        </button>
        <Nuxt-link to="/"><img src="../../assets/img/logo.png" alt=""></Nuxt-link>
        <div class="buttons">
            <button>
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="15px" height="18px">
                <image  x="0px" y="0px" width="15px" height="18px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAQAAAAul0yEAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmCBUDLQh3ydLXAAAAzklEQVQoz32PPUtCURyHn3sJg0oEoUHaiqLBKSqH5j5Tm3uLe1/AL+AqUkS70NvSENHgIAQWl8ThcfF6z7lpz5nO7znn/5JIQIUGE76CxPzUvDFT9d7TPM3ltkMLfr2IdduYF5NQP1mmKZIuRtijTANY6o8/+jPU3ZIc8houtulD0Pfbk3hy3PLasTqz53GeJsZFa2TMiusGsMMVLSrRM3mnwyNi39X8uI+Hrqed8h8p4t2av5kHiLverpAjL4vFzjjniDpVpkx445kBGcwBhvcFFtTux6MAAAAASUVORK5CYII=" />
                </svg>
            </button>
            <button class="cart">
            <svg 
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="15px" height="18px">
            <image  x="0px" y="0px" width="15px" height="18px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAQAAAAul0yEAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmCBUDLDEx12ueAAAAqklEQVQoz6WNMQ4BURRFz4wZJDJjKhvQCSug09mABUiUFmAdYgEWgIZaobIHiikkSiJBkKvxZxQ+Evc1L+fkvueIJD4d6uwYskmYzDia6ay51tqrZmiqm5IaQjmtNDbUTc5U2LIELkyoGpjqDNfndiJroAe06AJlSkzhZYvpITSQLbhAiC3BZx26QGTVxR/aX3TwR9sn/0kXsCdyOXKw6tjjRpv+m/93FoweFX9WSgjzMd4AAAAASUVORK5CYII=" />
            </svg>
        </button>
        </div>
        
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    header{
        z-index: 1;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    button{        
        cursor: pointer;
        background: none;
    }
    .cart{
        padding-left: 30px;
    }
    
</style>