<script setup>
    import { ref } from 'vue'
    import axios from 'axios';

    const title = ref('')
    const content = ref('')
    const author = ref('')

    const submitForm = () => {
        axios.post('http://34.22.80.242:9991/posts/', {
            title: title.value,
            content: content.value,
            author: author.value
        }).then((res) => {
            console.log(res)
            alert('성공')
        }).catch((error) => {
            console.log(error)
            alert('실패')
        })
    }
</script>

<template>
    <v-container>
        <v-sheet width="400" class="mx-auto">
            <v-col>
                <div class="text-h5 font-weight-bold">POST</div>
            </v-col>
            <v-form>
                <v-text-field
                    v-model="title"
                    prepend-icon="mdi-format-title"
                    label="title"></v-text-field>
                <v-textarea
                    v-model="content"
                    prepend-icon="mdi-content-paste"
                    label="content"
                    clearable></v-textarea>
                <v-text-field
                    v-model="author"
                    prepend-icon="mdi-subtitles"
                    label="author"></v-text-field>
                
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-btn
                            variant="elevated"
                            color="blue"
                            class="text-none ma-2"
                            @click="submitForm">
                            <v-icon>mdi-plus</v-icon>저장</v-btn>
                            <!-- prepend-icon="mid-plus"><v-icon>mdi-plus</v-icon>저장</v-btn> -->
                        <v-btn
                            variant="elevated"
                            class="text-none ma-2"
                            to="/blog">
                            <v-icon>mdi-close</v-icon>닫기</v-btn>
                            <!-- prepend-icon="mid-close">닫기</v-btn> -->
                    </v-row>
            </v-form>
        </v-sheet>
    </v-container>
</template>