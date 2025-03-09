<template>
    <button @click="handleClick">Increment</button>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const count = ref(0);
const emit = defineEmits(['increment']);

const handleClick = () => {
    count.value += 1;
    emit('increment', {count: count.value, isEven: count.value % 2 === 0});
};
</script>