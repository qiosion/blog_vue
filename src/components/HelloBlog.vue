<template>
    <v-container class="fill-height">
      <v-responsive class="align-center text-center fill-height">
        <v-img height="300" src="http://34.22.80.242:9991/static/blog.svg" />
  
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>
  
        <h1 class="text-h2 font-weight-bold">VueJS Blog</h1>
  
        <div class="py-14" />
  
        <v-row class="d-flex align-center justify-center"> 
          <v-col cols="auto">
            <v-btn
              color="primary"
              to="/blog"
              min-width="228"
              rel="noopener noreferrer"
              size="x-large"
              target="_blank"
              variant="flat"
            >
              <v-icon
                icon="mdi-account-group"
                size="large"
                start
              />
  
              BLOG
            </v-btn>
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </template>
  
  <script setup>
    //
  </script>
  