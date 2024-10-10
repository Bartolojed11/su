<template>
    <header>
        <nav class="tw-relative tw-h-16">
            <div
                :class="[
                    'tw-absolute tw-h-full tw-w-full tw-p-4',
                    isSearchbarOpen
                        ? 'tw-animate-fade-out'
                        : 'tw-animate-fade-in',
                ]"
            >
                <ul
                    class="tw-flex tw-w-full tw-items-center tw-justify-between tw-leading-[0]"
                >
                    <!-- Menu bar -->
                    <li>
                        <span class="tw-text-xl tw-leading-[0px]"
                            ><font-awesome-icon
                                :icon="['fas', 'bars']"
                                @click="isMenuOpen = !isMenuOpen"
                        /></span>
                    </li>
                    <!-- Company name - center -->
                    <li
                        class="tw-mt-1 tw-text-2xl tw-font-semibold tw-uppercase"
                    >
                        Ayase
                    </li>
                    <!-- Search bar -->
                    <li>
                        <span class="tw-text-1xl tw-text-xl tw-leading-[0]"
                            ><font-awesome-icon
                                :icon="['fas', 'magnifying-glass']"
                                @click="isSearchbarOpen = !isSearchbarOpen"
                        /></span>
                    </li>
                </ul>
            </div>
            <!-- Search Input-->
            <div
                :class="[
                    'tw-absolute tw-flex tw-h-full tw-w-full tw-content-center tw-items-center tw-justify-center tw-gap-4',
                    isSearchbarOpen
                        ? 'tw-animate-fade-in'
                        : 'tw-animate-fade-out',
                ]"
            >
                <input
                    v-model="searchInput"
                    ref="searchInputField"
                    class="tw-border-b-[1px] tw-border-solid tw-border-gray-200 focus-visible:tw-outline-none"
                    type="text"
                />
                <font-awesome-icon
                    :icon="['fas', 'xmark']"
                    @click="isSearchbarOpen = !isSearchbarOpen"
                />
            </div>
            <!-- Menu bar items -->
            <ul
                :class="[
                    isMenuOpen ? 'tw-animate-extend' : 'tw-animate-collapse',
                    'tw-absolute tw-left-0 tw-top-16 tw-z-10 tw-h-min tw-w-full tw-overflow-hidden tw-border-gray-900 tw-bg-white',
                ]"
            >
                <li
                    class="tw-border-b-[1px] tw-border-solid tw-border-gray-200 tw-py-2 tw-pt-3 tw-uppercase"
                    v-for="(link, index) in links"
                    :key="index"
                >
                    <NuxtLink
                        class="tw-ml-4 tw-block tw-w-auto tw-text-xs"
                        to="#"
                    >
                        {{ link }}</NuxtLink
                    >
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

const isSearchbarOpen = ref(false);
const isMenuOpen = ref(false);
const searchInput = ref(null);
const searchInputField = ref<HTMLInputElement | null>(null);

watch(isSearchbarOpen, (isOpen) => {
    searchInput.value = null;

    if (isOpen) {
        searchInputField?.value?.focus();
    }
});
</script>

<style lang="scss" scoped></style>
