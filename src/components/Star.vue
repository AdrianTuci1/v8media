<template>
  <div class="star-container">
    <!-- Row 1: 1 box -->
    <div class="star-row row-1">
      <div class="star-box" :class="{ 'filled': filled }"></div>
    </div>
    
    <!-- Row 2: 3 boxes -->
    <div class="star-row row-2">
      <div class="star-box" :class="{ 'filled': filled }"></div>
      <div class="star-box" :class="{ 'filled': filled }"></div>
      <div class="star-box" :class="{ 'filled': filled }"></div>
    </div>
    
    <!-- Row 3: 5 boxes -->
    <div class="star-row row-3">
      <div class="star-box" :class="{ 'filled': filled }"></div>
      <div class="star-box" :class="{ 'filled': filled }"></div>
      <div class="star-box" :class="{ 'filled': filled }"></div>
      <div class="star-box" :class="{ 'filled': filled }"></div>
      <div class="star-box" :class="{ 'filled': filled }"></div>
    </div>
    
    <!-- Row 4: 3 boxes -->
    <div class="star-row row-4">
      <div class="star-box" :class="{ 'filled': filled }"></div>
      <div class="star-box" :class="{ 'filled': filled }"></div>
      <div class="star-box" :class="{ 'filled': filled }"></div>
    </div>
    
    <!-- Row 5: 1 box -->
    <div class="star-row row-5">
      <div class="star-box" :class="{ 'filled': filled }"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  filled: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.star-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.star-row {
  display: flex;
  gap: 1px;
}

.row-1 {
  justify-content: center;
}

.row-2 {
  justify-content: center;
}

.row-3 {
  justify-content: center;
}

.row-4 {
  justify-content: center;
}

.row-5 {
  justify-content: center;
}

.star-box {
  width: 3px;
  height: 3px;
  background-color: var(--color-gray-medium);
  border-radius: 1px;
  transition: all 0.3s ease;
}

.star-box.filled {
  background-color: var(--color-red);
}

.star-container:hover .star-box {
  background-color: var(--color-red);
  transform: scale(1.1);
}

/* Responsive sizing */
@media (max-width: 768px) {
  .star-container {
    width: 20px;
    height: 20px;
  }
  
  .star-box {
    width: 2.5px;
    height: 2.5px;
  }
}

@media (max-width: 480px) {
  .star-container {
    width: 18px;
    height: 18px;
  }
  
  .star-box {
    width: 2px;
    height: 2px;
  }
}
</style> 