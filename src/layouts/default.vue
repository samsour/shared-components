<template>
  <div id="app" :class="computedClass">
    <v-header v-bind="headerData" :lang="lang"></v-header>
    <main class="page-content" aria-label="Content">
      <hero v-bind="heroData"></hero>
      <slot />
    </main>

    <v-footer v-bind="footerData" :lang="lang"></v-footer>
  </div>
</template>

<script setup>
const props = defineProps({
  headerData: Object,
  footerData: Object,
  heroData: Object,
  lang: {
    type: String,
    default: 'en',
  },
  theme: String,
  hasBackToTop: Boolean,
  hasFabHint: Boolean,
});

const computedClass = computed(() => {
  return [
    'shared-components',
    props.theme,
    { 'has-back-to-top': props.hasBackToTop },
    { 'has-fab-hint': props.hasFabHint },
  ];
});
</script>
