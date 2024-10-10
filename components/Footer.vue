<template>
    <footer class="tw-bg-dark tw-px-4 tw-py-12">
        <div>
            <div class="tw-mb-8 tw-text-3xl tw-uppercase">Ayase</div>
            <!-- Links -->
            <ul class="tw-mb-3 tw-flex tw-gap-4">
                <li>
                    <NuxtLink to="#">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#">Blog</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#">Contact</NuxtLink>
                </li>
            </ul>
            <!-- Social Media -->
            <ul class="tw-mb-8 tw-flex tw-gap-4">
                <li>
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                </li>
                <li>
                    <font-awesome-icon :icon="['fab', 'x-twitter']" />
                </li>
                <li>
                    <font-awesome-icon :icon="['fab', 'google-plus-g']" />
                </li>
                <li><font-awesome-icon :icon="['fab', 'pinterest']" /></li>
                <li>
                    <font-awesome-icon :icon="['fab', 'dribbble']" />
                </li>
            </ul>
        </div>
        <p>Copyright {{ year }} - Ayase</p>
    </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
