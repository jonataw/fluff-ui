<!-- SourceCode.vue -->
<template>
  <div class="snippet">
    <span class="copy" @click="onClick">{{ copied ? 'Copied!' : 'Copy' }}</span>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.snippet {
  position: relative;
  > .copy {
    z-index: 9;
    color: #fff;
    padding: 6px 0;
    border-bottom-left-radius: 4px;
    position: absolute;
    right: 0;
    top: 0;
    min-width: 84px;
    text-align: center;
    cursor: pointer;

    background-color: #eef2ff28;
    color: #ebedf3 !important;
    &:hover {
      background-color: #eef2ff11;
    }
    @media screen and(max-width: 419px) {
      margin-right: -1.5rem;
    }
  }
}
</style>

<script>
export default {
  methods: {
    async onClick() {
      const element = this.$slots.default[0].elm;
      try {
        await navigator.clipboard.writeText(
          element.innerText || element.textContent
        );
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 5000);
      } catch (err) {
        alert('Could not copy text: ', err);
      }
    }
  },

  data: function() {
    return {
      copied: false
    };
  }
};
</script>
