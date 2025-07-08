<template>
  <div class="icon-grid-demo">
    <h3 class="demo-title">Icon Grid Demo (5x5)</h3>
    
    <!-- Star Grid -->
    <div class="grid-section">
        <Star :filled="true" />
        <Arrow :filled="true" />
    </div>
  </div>
</template>

<script setup>
import Star from './Star.vue'
import Arrow from './Arrow.vue'


</script>

<style scoped>
.icon-grid-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

</style> 