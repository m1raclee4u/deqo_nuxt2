<template>
    <div class="catalog">
        <HeaderBlack/>
        <main class="main">
            <aside class="aside">
                <aside-categories/>
                <aside-filter/>
                <aside-color/>
            </aside>
            <div class="items__main">
                <div class="aic">
                    <p>Показаны 16 из 30 результатов</p>
                    <div
                    v-for="category in $store.state.categories"  
                    :key="category.id"
                     v-if="category.checked == true"
                    >  
                        <button>
                            <i class="delete"></i>       
                            {{category.name}}
                        </button>                        
                    </div>  
                </div>                       
                
                <div class="items row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div
                    v-for="item in $store.state.items" 
                    :key="item.id"
                    class="col item"
                    >                
                        <item 
                        :item="item" 
                        :key="item.id"                        
                        >
                        </item>
                    </div>   
                </div>
            </div>
            
        </main>
    </div>
</template>

<script>
import AsideCategories from '~/components/Aside/AsideCategories.vue'
import AsideFilter from '~/components/Aside/AsideFilter.vue'
import Filters from '~/components/General/Filters.vue'
import HeaderBlack from '~/components/General/HeaderBlack.vue'
import Item from '~/components/General/Item.vue'
export default {
  components: { HeaderBlack, Item, AsideFilter, Filters, AsideCategories },

    methods: {
        // addChecked () {
        //     this.$store.commit('checkedChange', this.categoriesChecked)
        // }
    }
}

    
</script>

<style lang="scss" scoped>
    .delete{
    display: block;
    flex-shrink: 0;
    width: 11px;
    height: 11px;
    margin-right: 9px;
    background: url('../assets/img/icons/delete.svg');
    background-size: cover;
    cursor: pointer;
    }
    button{
        display: flex;
        align-items: center;
        font-size: 11px;
        padding: 10px 9px;
        font-weight: 600;
    }



    .aic{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;        
        margin-bottom: 40px;
        min-height: 32px;
        gap: 20px;
        p{
            width: 195px;
        }
    }
    .items__main{
        p{
            display: flex;
            gap: 20px;
            font-size: 12.5px;
            font-weight: 600;
        }
    }
    .items{
        display: flex;
        flex-wrap: wrap;
        // gap: 17.6px;
    }
    .item:nth-child(3n+3) {
        margin-right: 0;
    }
    main {
        display: flex;
        justify-content: space-between;
        gap: 60px;
        padding: 40px 60px;
    }
    aside{
        width: 280px;
    }
</style>