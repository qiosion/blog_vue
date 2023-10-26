<script setup>
    import { ref } from 'vue'
    import axios from 'axios'
    import BlogCardHover from '@/components/BlogCardHover.vue'

    const cards = ref([{}])

    const axiospost = () => {
        axios.get('http://34.22.80.242:9991/posts/?format=json', {}, {
        }).then(function(response) {
            console.log(response)
            cards.value = response.data.results
        })
    }

    const refresh = () => {
        axios.get('http://34.22.80.242:9991/posts/?format=json', {}, {
            headers: {
                'Access-Control-Allow-Headers': '*',
            }
        })
        .then(function(response) {
            cards.value = response.data.results
        })
    }

    refresh()

</script>

<style scoped>
.v-card .complete .mdi-check-circle-outline {
    color: #fff;
}
</style>

<template>
    <v-container class="pa-10">
        <v-row>
            <v-col>
                <div class="text-h5 font-weight-bold">SUN's POSTS</div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="text-right">
                <v-btn
                    density="comfortable"
                    icon="mdi-refresh"
                    @click="refresh">
                </v-btn>
            </v-col>
            <v-col text-right align-self="center">
                <v-btn
                    variant="elevated" color="red" class="text-none mr-5"
                    to="/post">
                    <span class="mr-2">
                        <v-icon class="mr-2">mdi-plus</v-icon>Create New Post
                    </span>
                </v-btn>
            </v-col>
        </v-row>

        <v-row justify-start class="mt-7">
            <v-col>
                <BlogCardHover v-for="item in cards" :key="item.id">
                                
                    <template #title>
                        {{ item.title }}
                    </template>

                    <template #author>
                        {{ item.author }}
                    </template>

                    <template #content>
                        {{ item.content }}
                    </template>
                </BlogCardHover>
            </v-col>
        </v-row>
    </v-container>
</template>