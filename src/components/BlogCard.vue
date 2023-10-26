<template>
    <v-card elevation="12" class="ma-4">
        <div class="d-flex">
            <div class="flex-0-0">
                <v-avatar
                    class="ma-3" size="142" rounded="0">
                    <v-img src = "http://34.22.80.242:9991/static/foster.jpg"></v-img>
                </v-avatar>
            </div>
        
            <div class="flex-1-1">
                <v-card-title>
                    <slot name="title"></slot>
                </v-card-title>
                
                <v-card-subtitle>
                    written by
                    <slot name="author"></slot>
                </v-card-subtitle>
                
                <v-card-text>
                    <slot name="content"></slot>
                </v-card-text>

                <v-card-actions>
                    <!-- <v-btn
                        color="blue-darken-4 ma-1"
                        variant="flat"
                        prepend-icon="mdi-book-open-page-variant">
                    더보기</v-btn> -->

                    <v-spacer></v-spacer>
                    <v-btn color="surface-variant"
                        variant="text">
                        <template v-slot:prepend>
                            <v-icon size="large"
                                    icon="mdi-eye-outline"></v-icon>
                        </template>
                        2000
                    </v-btn>
                    <v-btn color="surface-variant"
                        variant="text">
                        <template v-slot:prepend>
                            <v-icon style="font-size:20px;"
                                    icon="mdi-comment-text-multiple"></v-icon>
                        </template>
                        3
                    </v-btn>
                    <v-btn  style="font-size: 20px;"
                            color="surface-variant"
                            variant="text"
                            icon="mdi-share-variant"></v-btn>
                </v-card-actions>
            </div>
        </div>
    </v-card>
</template>

<script setup>
</script>