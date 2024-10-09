<template>
    <header>
        <nav class="tw-relative">
            <ul class="tw-flex tw-justify-between tw-p-4">
                <!-- Menu bar -->
                <li>
                    <span class="tw-text-xl"
                        ><font-awesome-icon :icon="['fas', 'bars']"
                    /></span>
                    <ul
                        class="tw-absolute tw-left-0 tw-top-16 tw-hidden tw-w-full tw-border-gray-900"
                    >
                        <li
                            class="tw-border-b-[1px] tw-border-solid tw-border-gray-200 tw-pt-1 tw-uppercase"
                            v-for="(link, index) in links"
                            :key="index"
                        >
                            <NuxtLink
                                class="tw-ml-4 tw-block tw-w-full tw-leading-8"
                                to="#"
                            >
                                {{ link }}</NuxtLink
                            >
                        </li>
                    </ul>
                </li>
                <!-- Company name - center -->
                <li class="tw-text-2xl tw-font-semibold tw-uppercase">Ayase</li>
                <!-- Search bar -->
                <li>
                    <span class="tw-text-xl"
                        ><font-awesome-icon
                            :icon="['fas', 'magnifying-glass']"
                            class=""
                    /></span>
                </li>
                <!-- Add tw-flex if not hidden -->
                <li
                    class="tw-hidden tw-w-full tw-flex-row tw-content-center tw-justify-center tw-gap-4"
                >
                    <input
                        class="tw-border-b-[1px] tw-border-solid tw-border-gray-200"
                        type="text"
                    />
                    <div class="">
                        <font-awesome-icon :icon="['fas', 'xmark']" />
                    </div>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts" setup>
const links = [
    "Home",
    "Features",
    "Portfolio",
    "Elements",
    "About",
    "Team",
    "Blog",
    "Contact",
];
</script>

<style lang="scss" scoped></style>
