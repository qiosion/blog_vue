<script setup>
    import { ref } from 'vue'
    import axios from 'axios'

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
                <div class="text-h5 font-weight-bold">강은선's POSTS</div>
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

        <v-row>
            <v-col>
 
            </v-col>
        </v-row>

        <v-row justify-start class="mt-7">
            <v-col>
                <v-card v-for="item in cards"
                    :key="item.id"
                    elevation="12"
                    class="ma-4">
                    <!-- <v-row> -->
                        <div class="d-flex">
                            <div class="flex-0-0">
                                <v-avatar
                                    class="ma-3"
                                    size="140"
                                    rounded="0">
                                    <v-img src = "http://34.22.80.242:9991/static/foster.jpg"></v-img>
                                </v-avatar>
                            </div>
                        
                            <!-- <v-col cols="auto"> -->
                            <div class="flex-1-1">
                                <v-card-title>
                                    {{ item.title }}
                                </v-card-title>

                                <v-card-subtitle>
                                    written by {{ item.author }}
                                </v-card-subtitle>

                                <v-card-text>
                                    {{ item.content }}
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn
                                        color="blue-darken-4 ma-1"
                                        variant="flat"
                                        prepend-icon="mdi-book-open-page-variant">
                                    더보기</v-btn>

                                    <v-spacer></v-spacer>
                                    <v-btn size="small" color="surface-variant"
                                        variant="text"
                                        icon="mdi-heart"></v-btn>
                                    <v-btn size="small" color="surface-variant"
                                        variant="text"
                                        icon="mdi-bookmark"></v-btn>
                                    <v-btn size="small" color="surface-variant"
                                        variant="text"
                                        icon="mdi-share-variant"></v-btn>
                                </v-card-actions>
                            </div>
                            <!-- </v-col> -->
                        </div>
                    <!-- </v-row> -->
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>