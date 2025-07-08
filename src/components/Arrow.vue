<template>
  <div class="arrow-container">
    <!-- Row 1: 1 box (arrow tip) -->
    <div class="arrow-row row-1">
      <div class="arrow-box" :class="{ 'filled': filled }"></div>
    </div>
    
    <!-- Row 2: 3 boxes -->
    <div class="arrow-row row-2">
      <div class="arrow-box" :class="{ 'filled': filled }"></div>
      <div class="arrow-box" :class="{ 'filled': filled }"></div>
      <div class="arrow-box" :class="{ 'filled': filled }"></div>
    </div>
    
    <!-- Row 3: 5 boxes (arrow shaft) -->
    <div class="arrow-row row-3">
      <div class="arrow-box" :class="{ 'filled': filled }"></div>
      <div class="arrow-box" :class="{ 'filled': filled }"></div>
      <div class="arrow-box" :class="{ 'filled': filled }"></div>
      <div class="arrow-box" :class="{ 'filled': filled }"></div>
      <div class="arrow-box" :class="{ 'filled': filled }"></div>
    </div>
    
    <!-- Row 4: 3 boxes -->
    <div class="arrow-row row-4">
      <div class="arrow-box" :class="{ 'filled': filled }"></div>
      <div class="arrow-box" :class="{ 'filled': filled }"></div>
      <div class="arrow-box" :class="{ 'filled': filled }"></div>
    </div>
    
    <!-- Row 5: 1 box (arrow base) -->
    <div class="arrow-row row-5">
      <div class="arrow-box" :class="{ 'filled': filled }"></div>
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
.arrow-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.arrow-row {
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

.arrow-box {
  width: 3px;
  height: 3px;
  background-color: var(--color-gray-medium);
  border-radius: 1px;
  transition: all 0.3s ease;
}

.arrow-box.filled {
  background-color: var(--color-red);
}

.arrow-container:hover .arrow-box {
  background-color: var(--color-red);
  transform: scale(1.1);
}

/* Responsive sizing */
@media (max-width: 768px) {
  .arrow-container {
    width: 20px;
    height: 20px;
  }
  
  .arrow-box {
    width: 2.5px;
    height: 2.5px;
  }
}

@media (max-width: 480px) {
  .arrow-container {
    width: 18px;
    height: 18px;
  }
  
  .arrow-box {
    width: 2px;
    height: 2px;
  }
}
</style> 