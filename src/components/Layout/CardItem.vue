<script>
  export default {
    name: "CardItem"
  }

</script>

<template>
  <div class="card card-div" style="width: 18rem">
    <div class="card-body ">
      <h5 class="card-title">
        <slot name="title"></slot>
      </h5>
      <p class="card-text"><slot name="char-desc"></slot></p>
      <a href="#" class="btn-gallery btn btn-primary">Plus d'informations</a>
    </div>
  </div>
</template>
