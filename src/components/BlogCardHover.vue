<template>
    <v-hover v-slot="{ isHovering, props }">
    <v-card elevation="12" class="ma-4" v-bind="props">
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

        <v-overlay
            :model-value="isHovering"
            contained
            scrim="#0d47a1"
            class="align-center justify-center">
            <v-btn variant="flat">더보기</v-btn>
        </v-overlay>
    </v-card>
</v-hover>
</template>

<script setup>
</script>