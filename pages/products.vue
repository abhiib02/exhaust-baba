<template>
  <div class="container">
    <br>
    <br>
    <br>
    <h4 class="py-6" style="color:#f68320;">Products</h4>
    <hr>
    <div class="row">
      <div v-for="(Product,index) in Products" :key="index" class="col-lg-4">
        <div @click="showImage(Product.Image,Product.Name)" class="card dark m-2">
          <img style="height: 100%;object-fit: contain;" :src="require('../static/product_images/'+Product.Image)" alt="">
          <!--<img :src="require('../static/'+Product.Image)" alt="">
          <div class="product_name p-3 center">{{Product.Name}}</div>-->
        </div>
      </div>
    </div>
    <div v-if="show" @click="removeImage" class="overlay center-column text-light">
      <img :src="require('../static/product_images/'+show)" alt="">
      <hr style="border-color: white; width:100%;" class="bg-light">
      <h1>{{caption}}</h1>
      <!--<img :src="require('../static/product_images/'+show)" alt="">-->
    </div>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show:'',
        caption:'',
        Products: [{
            Name: 'Product 1',
            Image: '1.png'
          },
          {
            Name: 'Product 2',
            Image: '2.png'
          },
          {
            Name: 'Product 3',
            Image: '3.png'
          },
          {
            Name: 'Product 4',
            Image: '4.png'
          },
          {
            Name: 'Product 5',
            Image: '5.png'
          },
          {
            Name: 'Product 6',
            Image: '6.png'
          },
          {
            Name: 'Product 7',
            Image: '7.png'
          },
          {
            Name: 'Product 8',
            Image: '8.png'
          },
          {
            Name: 'Product 9',
            Image: '9.png'
          },
          {
            Name: 'Product 10',
            Image: '10.png'
          },
          {
            Name: 'Product 11',
            Image: '11.png'
          },
          {
            Name: 'Product 12',
            Image: '12.png'
          },
          {
            Name: 'Product 13',
            Image: '13.png'
          },
          {
            Name: 'Product 14',
            Image: '14.png'
          },
          {
            Name: 'Product 15',
            Image: '15.png'
          },

        ]
      }
    },
    methods:{
      showImage(ImageName,ImageCap){
        this.show = ImageName;
        this.caption = ImageCap;
      },
      removeImage(){
        this.show = '';
        this.caption = '';
      }
    }
  }

</script>

<style>
  

</style>
