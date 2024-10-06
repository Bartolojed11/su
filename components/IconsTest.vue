<template>
  <div id="icons">
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      target="blank"
    >
      <font-awesome-icon :icon="['fab', link.icon]" />
      <p>{{ link.name }}</p>
    </a>
  </div>
</template>

<script setup>
const socialLinks = [
  {
    name: "Twitter",
    url: "https://twitter.com/ceceliacreates",
    icon: "twitter-square",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@ceceliacreates",
    icon: "youtube-square",
  },
  {
    name: "GitHub",
    url: "https://github.com/ceceliacreates",
    icon: "github-square",
  },
];
</script>
