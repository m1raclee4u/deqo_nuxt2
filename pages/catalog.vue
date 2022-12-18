<template>
    <div class="catalog">
        <BurgerMenu v-if="$store.state.burgerMenuOpened != false"/>
        <HeaderBlack/>
        <main class="main">
            <aside class="aside">
                <aside-categories 
                    @updateChecked="sortByChecked"                    
                />
                <!-- <aside-filter
                    @updateFiltered="sortByFiltered"
                /> -->
                <aside-color/>
            </aside>
            <div class="items__main">   
                <div class="aic">
                    <p>Найдено {{}} подходящих товаров</p>
                    <div
                    v-for="category in $store.state.categories.filter(el=>el.checked == true)"  
                    :key="category.id"                 
                    >  
                        <button>
                            <i class="delete"></i>       
                            {{category.name}}
                        </button>                        
                    </div>  
                </div>  
                <div class="items row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-3">
                    <div
                    v-for="item in this.paginatedProducts" 
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
                <button @click="loadMore" v-if="currentPage * maxPerPage < this.products.length">Загрузить больше</button>
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
import BurgerMenu from '~/components/General/BurgerMenu.vue'


export default {
    components: { HeaderBlack, Item, AsideFilter, Filters, AsideCategories, BurgerMenu},

    props: ["category"],
    data() {

        return {
        showFilter: false,
        filterLabel: "цене",
        productsInCartId: [],
        checkedId: '',
        checkedFiltered: '',
        currentPage: 1,
        maxPerPage: 9,
        showReadMore: true
        };
    },
    methods: {
        sortByChecked(checkedId) {
           this.checkedId = checkedId
        },
        sortByFiltered(checkedFiltered) {
            this.checkedFiltered = checkedFiltered
            console.log(this.checkedFiltered);
        },
        loadMore() {
            this.currentPage += 1;
        }
    },
    computed: {        
        products() {
            let checkedArray = [];
            if (this.checkedId.length !== 0) {
                for (let i = 0; i < this.checkedId.length; i++) {
                    const checked = this.checkedId[i]
                    for (let j = 0; j < this.$store.getters["products"].length; j++) {
                        const find = this.$store.getters["products"][j];
                        if (find.category == checked) {     
                            checkedArray.push(find);
                        }
                    }
                }
            return checkedArray
            } 
            else                
                return this.$store.getters["products"];
        },
        productsInCart() {
            return this.$store.getters["productsInCart"];
        },
        totalResults() {
            return Object.keys(this.orders).length;
        },
        pageCount() {
            return Math.ceil(this.totalResults / this.maxPerPage);
        },
        pageOffest() {
         return this.maxPerPage * this.currentPage;
        },
        paginatedProducts() {
            return this.products.slice(0, this.currentPage * this.maxPerPage);
        }
    },
    mounted() {
        if (this.$store.getters["products"].length === 0) {
        this.$store.dispatch("fetchProducts");
        }
        if (this.$store.getters["categories"].length === 0) {
        this.$store.dispatch("fetchCategories");
        }
    },
};

    
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
        width: 100%;
        p{
            display: flex;
            gap: 20px;
            font-size: 12.5px;
            font-weight: 600;
        }
        button{
            margin: 0 auto;
            justify-content: center;
            align-items: center;
            padding: 20px 109px;
            gap: 10px;

            width: 410px;
            height: 64px;

            /* основной */

            background: #685F5F;
            border-radius: 4px;

            font-weight: 400;
            font-size: 18px;
            line-height: 22px;

            color: white;
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
        display: flex;
        flex-direction: column;
        gap: 45px;
    }
</style>