<template>
    <div class="colors">
        <h3>Категории товаров</h3>
        <div class="checkboxes">
            <div class="color" 
            v-for="color in $store.state.colors" 
            :key="color.id">
                <input type="checkbox" class="custom-checkbox" name="" :id="color.id" >
                <label :for="color.id">{{color.name}}</label>
            </div>
            
        </div>      
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
    }
    .custom-checkbox+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    }
    .custom-checkbox+label::before {
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
    .custom-checkbox:checked+label::before {
    border-color: #0b76ef;
    background-color: #0b76ef;
    // background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }
        /* стили при наведении курсора на checkbox */
    .custom-checkbox:not(:disabled):not(:checked)+label:hover::before {
    border-color: #b3d7ff;
    }
    /* стили для активного состояния чекбокса (при нажатии на него) */
    .custom-checkbox:not(:disabled):active+label::before {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
    }
    /* стили для чекбокса, находящегося в фокусе */
    .custom-checkbox:focus+label::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
    /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
    .custom-checkbox:focus:not(:checked)+label::before {
    border-color: #80bdff;
    }
    /* стили для чекбокса, находящегося в состоянии disabled */
    .custom-checkbox:disabled+label::before {
    background-color: #e9ecef;
    }
    .colors{
        width: 280px;
        h3{
            margin-bottom: 40px;
        }
        .color:not(:last-child){
            margin-bottom: 25px;
        }
        label::before{
            margin-right: 25px;

        }
    }
</style>