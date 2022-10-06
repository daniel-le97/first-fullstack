<template>
  <div class="comment-creator container my-3">
    <div class="row">
      <div class="col-1 text-center p-0">
       <img :src="comment.creator.picture" class="img rounded-circle" >
      </div>
      <div class="col-11 bg-light text-dark rounded">
        <h5>{{comment.creator.name}}</h5>
        <div>
          <p>{{comment.body}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Comment } from '../models/Comment.js';

export default {
  props:{
    comment:{type: Comment, required: true}},
  setup(){

    return {}
  }
}
</script>

<style lang="scss" scoped>
  .img{
    height: 79px;
  }
</style>
