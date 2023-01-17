<template>
    <div class="">
        <div class="wrapperBack" @click="$store.commit('SET_POPUP_OPENED', !$store.state.dimensionalGrid)">
    </div>
    <div class="popup">
        
        <div class="dimensionalGrid">
            <header>
                <div class="title">
                    <img src="../../assets/img/icons/popup/iconPopup.svg" alt="" style="height: 18px">
                    <h5>размерная сетка</h5>
                    <img src="../../assets/img/icons/popup/iconPopup.svg" alt="" style="height: 18px">
                </div>
                <p>общая таблица размеров показывает нашу стандартную размерную линейку</p>
            </header>
            <main class="gridSizes">
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
        <div class="productType">
            <div class="sizesModule opened">
                <header>
                    <p>Обмеры изделия</p>
                    <div class="form_radio_btn_size_popup t-shirt">
                        <input name="sizePopup" type="radio" value="tshirt" v-model="checked" @change="checkedLog" id="sizePopup_1">
                        <label  for="sizePopup_1"></label>
                    </div>
                    <div class="form_radio_btn_size_popup hoodie">
                        <input name="sizePopup" type="radio" value="hoodie" v-model="checked" @change="checkedLog" id="sizePopup_2">
                        <label  for="sizePopup_2"></label>
                    </div>
                    <div class="form_radio_btn_size_popup pants">
                        <input name="sizePopup" type="radio" value="pants" v-model="checked" @change="checkedLog" id="sizePopup_3">
                        <label  for="sizePopup_3"></label>
                    </div>                   
                    <i :class="{downActive: checkedOpened}" @click="checkedOpenedMethod" class="down"></i>
                </header>
                <main class="gridClothes">
                    <div class="lines">
                        <div class="line header">                            
                            <p>INT</p>
                            <P>Обхват груди</P>
                            <p>Обхват талии</p>
                            <p>Длина</p>
                            <p>Длина рукава</p>
                            <p>Обхват бедер</p>
                        </div>
                        <div v-if="checkedOpened != false || checked != ''" class="wrapperLines">
                            <div v-if="checked === 'tshirt'" class="wrapperLine">
                                <div class="line"  v-for="oneSize in sizesClothesTShirt" :key="oneSize.size">
                                    <p class="size">{{oneSize.size}}</p>
                                    <p>{{oneSize.chest}}</p>
                                    <p>{{oneSize.waist}}</p>
                                    <p>{{oneSize.lenght}}</p>
                                    <p>{{oneSize.lenghtSleeve}}</p>
                                    <p>{{oneSize.hip}}</p>
                                </div>
                            </div>        
                            <div v-if="checked === 'hoodie'" class="wrapperLine">
                                <div class="line"  v-for="oneSize in sizesClothesHoodie" :key="oneSize.size">
                                <p class="size">{{oneSize.size}}</p>
                                    <p>{{oneSize.chest}}</p>
                                    <p>{{oneSize.waist}}</p>
                                    <p>{{oneSize.lenght}}</p>
                                    <p>{{oneSize.lenghtSleeve}}</p>
                                    <p>{{oneSize.hip}}</p>
                                </div>
                            </div>        
                            <div v-if="checked === 'pants'" class="wrapperLine">
                                <div class="line"  v-for="oneSize in sizesClothesPants" :key="oneSize.size">
                                    <p class="size">{{oneSize.size}}</p>
                                    <p>{{oneSize.chest}}</p>
                                    <p>{{oneSize.waist}}</p>
                                    <p>{{oneSize.lenght}}</p>
                                    <p>{{oneSize.lenghtSleeve}}</p>
                                    <p>{{oneSize.hip}}</p>
                                </div>
                            </div>     
                        </div>
                        
                    </div>
                </main>
            </div>
        </div>
        <span>Все размеры указаны в сантиметрах.</span>
    </div>
    </div>
    
</template>

<script>
export default {
    methods: {
        checkedOpenedMethod(){
            console.log(this.checkedOpened);
            console.log(this.checked);
            if (this.checkedOpened === false && this.checked === ''){
                this.checkedOpened = true
                this.checked = 'tshirt'
            } else if (this.checkedOpened === false || this.checked != '') {
                this.checkedOpened = false
                this.checked = ''
            } 
        },
        checkedLog(){
            console.log(this.checked);
        }
    },
    data() {
        return{
            checkedOpened: false,
            checked: '',
            sizes: [
                {
                    size: 'os',
                    ruSize: 40,
                    chest: 84,
                    waist: 64,
                    hip: 92,
                    
                },
                {
                    size: 'xs',
                    ruSize: 42,
                    chest: 84,
                    waist: 64,
                    hip: 92,
                    
                },
                {
                    size: 's',
                    ruSize: 44,
                    chest: 88,
                    waist: 68,
                    hip: 96,
                    
                },
                {
                    size: 'm',
                    ruSize: 46,
                    chest: 92,
                    waist: 72,
                    hip: 100,
                    
                },
                {
                    size: 'l',
                    ruSize: 48,
                    chest: 96,
                    waist: 76,
                    hip: 104,
                    
                },
                {
                    size: 'xl',
                    ruSize: 50,
                    chest: 100,
                    waist: 80,
                    hip: 108,
                    
                },
                {
                    size: '2xl',
                    ruSize: 52,
                    chest: 104,
                    waist: 84,
                    hip: 112,
                    
                },
            ],
            sizesClothesTShirt: [
                {
                    size: 'os',
                    chest: 80,
                    waist: 80,
                    lenght: 49,
                    lenghtSleeve: 20,
                    hip: 88                    
                },
                {
                    size: 'xs',
                    chest: 84,
                    waist: 84,
                    lenght: 52,
                    lenghtSleeve: 21,
                    hip: 92                    
                },
                {
                    size: 's',
                    chest: 88,
                    waist: 88,
                    lenght: 55,
                    lenghtSleeve: 22,
                    hip: 96
                },
                {
                    size: 'm',
                    chest: 92,
                    waist: 92,
                    lenght: 56,
                    lenghtSleeve: 23,
                    hip: 100
                },
                {
                    size: 'l',
                    chest: 96,
                    waist: 96,
                    lenght: 58,
                    lenghtSleeve: 24,
                    hip: 104
                },
                {
                    size: 'xl',
                    chest: 100,
                    waist: 100,
                    lenght: 62,
                    lenghtSleeve: 25,
                    hip: 108
                },
                {
                    size: '2xl',
                    chest: 104,
                    waist: 104,
                    lenght: 66,
                    lenghtSleeve: 26,
                    hip: 112
                },
            ],
            sizesClothesHoodie: [
                {
                    size: 'os',
                    chest: 80,
                    waist: '-',
                    lenght: 49,
                    lenghtSleeve: 64,
                    hip: 88                    
                },
                {
                    size: 'xs',
                    chest: 84,
                    waist: '-',
                    lenght: 52,
                    lenghtSleeve: 65,
                    hip: 92                    
                },
                {
                    size: 's',
                    chest: 88,
                    waist: '-',
                    lenght: 54,
                    lenghtSleeve: 66,
                    hip: 96
                },
                {
                    size: 'm',
                    chest: 92,
                    waist: '-',
                    lenght: 56,
                    lenghtSleeve: 67,
                    hip: 100
                },
                {
                    size: 'l',
                    chest: 96,
                    waist: '-',
                    lenght: 58,
                    lenghtSleeve: 68,
                    hip: 104
                },
                {
                    size: 'xl',
                    chest: 100,
                    waist: '-',
                    lenght: 62,
                    lenghtSleeve: 69,
                    hip: 108
                },
                {
                    size: '2xl',
                    chest: 104,
                    waist: '-',
                    lenght: 66,
                    lenghtSleeve: 70,
                    hip: 112
                },
            ],
            sizesClothesPants: [
                {
                    size: 'os',
                    chest: '-',
                    waist: 62,
                    lenght: 52,
                    lenghtSleeve: '-',
                    hip: 88                    
                },
                {
                    size: 'xs',
                    chest: '-',
                    waist: 64,
                    lenght: 52,
                    lenghtSleeve: '-',
                    hip: 92                    
                },
                {
                    size: 's',
                    chest: '-',
                    waist: 68,
                    lenght: 54,
                    lenghtSleeve: '-',
                    hip: 96
                },
                {
                    size: 'm',
                    chest: '-',
                    waist: 72,
                    lenght: 56,
                    lenghtSleeve: '-',
                    hip: 100
                },
                {
                    size: 'l',
                    chest: '-',
                    waist: 76,
                    lenght: 58,
                    lenghtSleeve: '-',
                    hip: 104
                },
                {
                    size: 'xl',
                    chest: '-',
                    waist: 80,
                    lenght: 62,
                    lenghtSleeve: '-',
                    hip: 108
                },
                {
                    size: '2xl',
                    chest: '-',
                    waist: 84,
                    lenght: 66,
                    lenghtSleeve: '-',
                    hip: 112
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrapperBack{
        width: 100vw;
        height: 100vh;
        position: fixed;
        background-color: #000;
        opacity: 0.5;
        z-index: 100;
        margin-top: -110px;
    }
    .gridSizes{
        // height: 428px;
        // overflow-y: scroll;

    }
    .gridClothes{
        .lines{
            padding: 0 14px;
        }
    }
    .popup{
        overflow-y: scroll; 

        position: fixed;
        top: 100px;
        left: 0;
        right: 0;
        z-index: 100;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        max-width: 748px;
        max-height: 1000px;

        background: #685F5F;
        border-radius: 4px;

        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 42px;
        gap: 40px;
        span{
            padding: 0 60px;
            width: 100%;
            font-weight: 400;
            font-size: 14px;
            line-height: 100%;

            color: #A9A1A1;
        }
    }
    .productType{
        width: 100%;
        padding: 0 60px;
        .opened{
            border-radius: 4px;
            background-color: #4A4444;
        }
        .sizesModule{
            header{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 22px;
                .t-shirt{
                width: 30px;
                height: 30px;
                cursor: pointer;
                background-image: url('../../assets/img/icons/popup/t-shirt.svg');
                &:hover{
                    background-image: url('../../assets/img/icons/popup/t-shirt_on.svg');
                }
                }
                .hoodie{
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    background-image: url('../../assets/img/icons/popup/hoodie.svg');
                    &:hover{
                        background-image: url('../../assets/img/icons/popup/hoodie_on.svg');
                    }
                }
                .pants{
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    background-image: url('../../assets/img/icons/popup/pants.svg');
                    &:hover{
                        background-image: url('../../assets/img/icons/popup/pants_on.svg');
                    }
                }            
                .downActive{
                    background-image: url('../../assets/img/icons/popup/down_on.svg') !important;
                }
                .down{
                    width: 26px;
                    height: 26px;
                    cursor: pointer;
                    background-image: url('../../assets/img/icons/popup/down.svg');
                    transition: 0.5s ease all;
                    &:hover{
                        background-image: url('../../assets/img/icons/popup/down_on.svg');
                    }

                }
                p{
                    font-size: 18px;
                    line-height: 100%;
                    font-weight: 500;

                    color: #DBD7D2;
                }
            }            
        }
        
    }
    .dimensionalGrid{

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60px 60px 0 60px;
        gap: 40px;
        
        // max-height: 680px;
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
                    font-size: 18px;
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
                &:nth-last-child(1){
                    border-bottom: 2px solid #5B5353;
                }
                .size{
                    width: 38px;
                    height: 38px;
                    background: #4A4444;
                    /* средний */
                    box-sizing: border-box;
                    padding: 8px 8px;
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
    .form_radio_btn_size_popup {
        display: inline-block;
        width: 30px;
        height: 30px;
    }
    .form_radio_btn_size_popup input[type=radio] {
        display: none;
    }
    .form_radio_btn_size_popup label {
        text-transform: uppercase;
        font-size: 18px;
        letter-spacing: -0.02em;
        width: 30px;
        height: 30px;
        text-align: center;
        display: inline-block;
        cursor: pointer;
        // line-height: 35px;
        // color: #A9A1A1;
        // border: 2px solid #A9A1A1;
        // border-radius: 4px;
        user-select: none;
        transition: 0.3s all;
    }
    .form_radio_btn_size_popup.t-shirt input[type=radio]:checked + label {
        color: white;
        background-image: url('../../assets/img/icons/popup/t-shirt_on.svg');
        // background-color: #685F5F;
    }
    .form_radio_btn_size_popup.hoodie input[type=radio]:checked + label {
        color: white;
        background-image: url('../../assets/img/icons/popup/hoodie_on.svg');
        // background-color: #685F5F;
    }
    .form_radio_btn_size_popup.pants input[type=radio]:checked + label {
        color: white;
        background-image: url('../../assets/img/icons/popup/pants_on.svg');
        // background-color: #685F5F;
    }
    /* Hover */
    .form_radio_btn_size_popup.t-shirt label:hover {
        color: white;
        background-image: url('../../assets/img/icons/popup/t-shirt_on.svg');
        // background-color: #685F5F;
    }
    .form_radio_btn_size_popup.hoodie label:hover {
        color: white;
        background-image: url('../../assets/img/icons/popup/hoodie_on.svg');
        // background-color: #685F5F;
    }
    .form_radio_btn_size_popup.pants label:hover {
        color: white;
        background-image: url('../../assets/img/icons/popup/pants_on.svg');
        // background-color: #685F5F;
    }
    /* Disabled */
    .form_radio_btn_size_popup input[type=radio]:disabled + label {
        // background: #efefef;
        color: #666;
    }

</style>