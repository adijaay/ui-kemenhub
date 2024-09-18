<template>
  <i-link :component="component" :class="c.base" navbar>
    <span :class="c.icon">
      <i-back-icon :theme="theme" />
    </span>
    <span v-if="shouldShowText">{{ text }}</span>
    <slot />
  </i-link>
</template>
<script>
  import { computed } from 'vue';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import iBackIcon from './icons/BackIcon.vue';
  import iLink from './Link.vue';
  import { NavbarBackLinkClasses } from '../../shared/esm/classes/NavbarBackLinkClasses.js';

  export default {
    name: 'k-navbar-back-link',
    components: {
      iLink,
      iBackIcon,
    },
    props: {
      component: {
        type: String,
        default: 'a',
      },
      colors: {
        type: Object,
      },
      ios: {
        type: Boolean,
        default: undefined,
      },
      material: {
        type: Boolean,
        default: undefined,
      },
      text: {
        type: String,
        default: 'Back',
      },
      showText: {
        type: [Boolean, String],
        default: 'auto',
      },
    },
    setup(props) {
      const theme = useTheme(props);
      const shouldShowText = computed(
        () =>
          (props.showText === 'auto' && theme.value === 'ios') ||
          props.showText === true
      );
      const c = useThemeClasses(props, () => NavbarBackLinkClasses());
      return {
        c,
        shouldShowText,
        theme,
      };
    },
  };
</script>
