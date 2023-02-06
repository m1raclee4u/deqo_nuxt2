<template>
    <div class="colors">
        <h3>Размер</h3>
        <div class="sizes flex">
            <div class="form_radio_btn" v-for="size in $store.state.sizes" :key="size.id">
            <input name="size" type="checkbox" :value="size" :id="size">
            <label :id="size" :for="size">{{size}}</label>
            
            <!-- <p class="p_size"></p> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {       
        checkedColor: []
      }
    },
    methods: {
         addCheckedColor(){
            this.$emit('updateCheckedColor', this.checkedColor);
         }
    },
}
</script>

<style lang="scss" scoped>
    .sizes{
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
    }
    .custom-radio {
    position: absolute;
    z-index: -1;
    opacity: 0;
    }
    .custom-radio+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    }
    .custom-radio+label {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    }
    .custom-radio:checked+label {
    border-color: #0b76ef;
    background-color: #0b76ef;
    // background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }
        /* стили при наведении курсора на radio */
    .custom-radio:not(:disabled):not(:checked)+label:hover {
    border-color: #b3d7ff;
    }
    /* стили для активного состояния чекбокса (при нажатии на него) */
    .custom-radio:not(:disabled):active+label {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
    }
    /* стили для чекбокса, находящегося в фокусе */
    .custom-radio:focus+label {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
    /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
    .custom-radio:focus:not(:checked)+label {
    border-color: #80bdff;
    }
    /* стили для чекбокса, находящегося в состоянии disabled */
    .custom-radio:disabled+label {
    background-color: #e9ecef;
    }
    .colors{
        display: flex;
        flex-direction: column;
        gap: 25px;
        width: 320px;      
            h3{
                font-weight: 600;
                font-size: 20px;
                line-height: 24px;
                /* identical to box height */


                /* основной */

                color: #685F5F;
            }
    }
</style>