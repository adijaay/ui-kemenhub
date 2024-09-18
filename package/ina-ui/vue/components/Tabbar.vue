<template>
  <i-toolbar v-bind="toolbarProps">
    <slot />
  </i-toolbar>
</template>
<script>
  import { computed } from 'vue';
  import iToolbar from './Toolbar.vue';

  export default {
    name: 'k-tabbar',
    components: {
      iToolbar,
    },
    props: {
      ...iToolbar.props,
      labels: {
        type: Boolean,
      },
      icons: {
        type: Boolean,
      },
    },
    setup(props) {
      const toolbarProps = computed(() => {
        return {
          ...props,
          tabbar: true,
          tabbarLabels: props.labels,
          tabbarIcons: props.icons,
        };
      });
      return {
        toolbarProps,
      };
    },
  };
</script>
