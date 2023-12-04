<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
    onClick: {
        type: Function as PropType<() => void>,
        default: () => {}
    }
})

</script>


<template>
    <button class="btn" @click="onClick">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.btn {
    background: var(--vp-c-brand);
    border: 1px solid var(--vp-c-brand-light);
    color: var(--vp-c-white);
    padding: 2px 16px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    transition: 0.25s;
    border-radius: 5px;

    &:hover {
        background: var(--vp-c-brand-light);
        border: 1px solid var(--vp-c-brand);
    }
}
</style>