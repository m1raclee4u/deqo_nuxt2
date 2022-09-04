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
                    :key="category.id">                
                        <filters
                        :category="category" 
                        :key="category.id"
                        v-if="{}"
                        >
                        </filters>
                    </div>  
                </div>                       
                
                <div class="items">
                    <div
                    v-for="item in $store.state.items" 
                    :key="item.id"
                    class="item"
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
    
}
</script>

<style lang="scss" scoped>
    .aic{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;        
        margin-bottom: 40px;
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
        gap: 19.6px;
    }
    .item:nth-child(3n+3) {
        margin-right: 0;
    }
    .item{
    }
    main {
        display: flex;
        justify-content: space-between;
        gap: 60px;
        padding: 0 60px;
    }
    aside{
        width: 280px;
    }
</style>