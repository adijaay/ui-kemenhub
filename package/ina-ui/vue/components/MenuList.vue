<template>
  <i-list v-bind="listProps">
    <slot />
  </i-list>
</template>
<script>
  import { computed } from 'vue';
  import iList from './List.vue';

  export default {
    name: 'k-menu-list',
    components: {
      iList,
    },
    props: {
      ...iList.props,
    },
    setup(props) {
      const listProps = computed(() => ({
        ...props,
        menuList: true,
      }));
      return { listProps };
    },
  };
</script>
