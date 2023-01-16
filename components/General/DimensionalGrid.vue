<template>
    <div class="dimensionalGrid">
        <header>
            <div class="title">
                <img src="../../assets/img/icons/iconPopup.svg" alt="">
                <h5>размерная сетка</h5>
                <img src="../../assets/img/icons/iconPopup.svg" alt="">
            </div>
            <p>общая таблица размеров показывает нашу стандартную размерную линейку</p>
        </header>
        <main>
            <div class="lines">
                <div class="line header">
                    <p>INT</p>
                    <p>RU</p>
                    <P>Обхват груди</P>
                    <p>Обхват талии</p>
                    <p>Обхват бедер</p>
                </div>
                
                <div class="line" v-for="oneSize in sizes" :key="oneSize.size">
                    <p class="size">{{oneSize.size}}</p>
                    <p>{{oneSize.ruSize}}</p>
                    <p>{{oneSize.chest}}</p>
                    <p>{{oneSize.waist}}</p>
                    <p>{{oneSize.hip}}</p>
                </div>
            </div>
            
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return{
            sizes: [
                {
                    size: 'os',
                    ruSize: 40,
                    chest: 88,
                    waist: 61,
                    hip: 88,
                    
                },
                {
                    size: 'xs',
                    ruSize: 40,
                    chest: 88,
                    waist: 61,
                    hip: 88,
                    
                },
                {
                    size: 's',
                    ruSize: 40,
                    chest: 88,
                    waist: 61,
                    hip: 88,
                    
                },
                {
                    size: 'm',
                    ruSize: 40,
                    chest: 88,
                    waist: 61,
                    hip: 88,
                    
                },
                {
                    size: 'l',
                    ruSize: 40,
                    chest: 88,
                    waist: 61,
                    hip: 88,
                    
                },
                {
                    size: 'xl',
                    ruSize: 40,
                    chest: 88,
                    waist: 61,
                    hip: 88,
                    
                },
                {
                    size: '2xl',
                    ruSize: 40,
                    chest: 88,
                    waist: 61,
                    hip: 88,
                    
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .dimensionalGrid{
        overflow-y: scroll;
        position: fixed;
        top: 100px;
        left: 0;
        right: 0;
        z-index: 100;

        background: #685F5F;
        border-radius: 4px;

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60px;
        gap: 40px;

        margin: 0 auto;
        width: 100%;
        height: 100%;
        max-width: 748px;
        max-height: 680px;
        header{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            .title{
                display: flex;
                align-items: start;
                gap: 20px;
                h5{
                    text-transform: uppercase;
                    font-weight: 500;
                    font-size: 19px;
                    line-height: 100%;
                    color: #fff;
                }
            }
            p{
                font-weight: 400;
                font-size: 16px;
                line-height: 100%;
                color: #A9A1A1;
            }
        }
    }
    main{
        /* W3C standard
        сейчас только для Firefox */
        
        width: 100%;
        height: 428px;
        // overflow-y: scroll;
        display: flex;        
        .lines{
            width: 100%;
            display: flex;
            flex-direction: column;
            .header{
                display: flex;
                align-items: center;
                
                border-top: 2px solid #5B5353;
                p{
                    color: #A9A1A1 !important;
                    width: 56px !important;

                }
            }
            .line{
                display: flex;
                align-items: center;
                padding-top: 23px;
                padding-bottom: 23px;
                border-top: 2px solid #5B5353;
                justify-content: space-between;
                .size{
                    width: 46px;
                    // height: 38px;
                    background: #4A4444;
                    /* средний */
                    box-sizing: border-box;
                    padding: 8px 13px;
                    border: 2px solid #A9A1A1;
                    border-radius: 4px;

                }
                p{
                    width: 38px;
                    // height: 38px;
                    text-align: center;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 100%;

                    color: #DBD7D2;
                }
            }
        }
    }
</style>