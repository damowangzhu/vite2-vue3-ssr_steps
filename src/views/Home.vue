<template>
  <div>Home Page</div>
  <div>{{ store.state.message }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    return { store };
  },
  asyncData({ store }) {
    return store.dispatch('fetchMessage');
  },
});
</script>
