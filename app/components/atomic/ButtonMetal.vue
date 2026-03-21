<template>
  <a
    href="#"
    class="button-metal"
  >
    <div class="button-metal__outer_border">
      <div class="button-metal__outer_area">
        <div class="button-metal__inner_border">
          <div class="button-metal__inner_area">
            <span class="button-metal__label">{{ label }}</span>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<style lang="scss" scoped>
.button-metal {
  display: inline-flex;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover { opacity: 0.85; }

  &__outer_border {
    padding: 0.84px;
    border-radius: 835px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.32) 51.44%, rgba(255, 255, 255, 0) 100%);
  }

  &__outer_area {
    padding: 4px;
    border-radius: 835px;
    background: linear-gradient(90deg, #0D0D0D 0%, #575757 13.94%, #3C3C3C 29.33%, #969696 50.59%, #3C3C3C 72.6%, #575757 86.06%, #0D0D0D 100%);
  }

  &__inner_border {
    padding: 1px;
    border-radius: 835px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.5) 17.09%, rgba(255, 255, 255, 0.5) 51.12%, rgba(0, 0, 0, 0.5) 80.92%);
  }

  &__inner_area {
    border-radius: 835px;
    background: linear-gradient(90deg, #0D0D0D 0%, #575757 13.94%, #3C3C3C 29.33%, #969696 50.59%, #3C3C3C 72.6%, #575757 86.06%, #0D0D0D 100%);
    padding: 11.709px 26.763px 11.709px 33.453px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__label {
    font-family: 'Schibsted Grotesk', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: -0.56px;
    font-feature-settings: 'calt' 0, 'liga' 0;
    white-space: nowrap;
  }
}
</style>
