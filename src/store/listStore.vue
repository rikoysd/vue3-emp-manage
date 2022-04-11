<template>
<div>
  <slot></slot>
</div>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { listKey, listStore } from './listStore';

provide(listKey,listStore());
</script>


<style scoped>
</style>