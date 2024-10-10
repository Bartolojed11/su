<template>
    <NuxtLink
        class="tw-rounded tw-px-4 tw-py-4 tw-tracking-widest"
        :to="props.url"
        >{{ props.label }}</NuxtLink
    >
</template>

<script lang="ts" setup>
interface Props {
    url: string;
    label: string;
}

const props = defineProps<Props>();
console.log({ props });
</script>
