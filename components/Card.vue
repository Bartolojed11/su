<template>
    <article
        class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-rounded tw-bg-lightgray tw-px-4 tw-py-8"
    >
        <slot></slot>
        <h2 class="tw-mb-2 tw-uppercase">{{ title }}</h2>
        <p class="tw-mb-2 tw-text-center tw-font-light">{{ description }}</p>
        <NuxtLink class="tw-uppercase" v-if="url" :to="'#'">{{
            urlLabel
        }}</NuxtLink>
    </article>
</template>

<script lang="ts" setup>
interface Props {
    title: string;
    description: string;
    url?: string;
    urlLabel?: string;
}

const props = defineProps<{ props: Props }>();
const { title, description, url, urlLabel } = props?.props;
</script>
