<template>
    <div id="app">
        <Header />
        <Sidebar @selected="onSelected" />
        <div class="content" v-if="products">
            <Product :title="title" :products="products" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

export default {
    components: {
        Header,
        Sidebar,
        Product: () => import(/* webpackChunkName: "product" */ './components/Product')
    },
    data(){
        return {
            title: '',
            products: [],
        }
    },
    methods: {
        onSelected: function(_type){
            this.title = _type
            this.makeRequest(_type);
        },
        makeRequest: async function(type) {
            try {
                const response = await axios.get(`http://localhost:3000/api/${type}`, {}, {
                    headers: {
                        'content-type': 'application/json',
                    }
                });
                
                this.products = response.data;
            } catch (_err) {
                console.error(_err);
            }
        }
    }
}
</script>

<style lang="scss">
    body {
        margin: 0;
        padding: 0;
    }

    #app {
        box-sizing: border-box;
        display: grid;
        grid: {
            template-columns: 100px 1fr;
            template-rows: 100px 1fr;
            template-areas: "header header"
                            "sidebar content";
            gap: 0;
        }
        min: {
            height: 100vh;
            width: 100%;
        }
        margin: 0;
        padding: 0;
    }
</style>