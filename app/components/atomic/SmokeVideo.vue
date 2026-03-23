<template>
  <video
    ref="videoRef"
    autoplay
    loop
    muted
    playsinline
    class="absolute inset-0 w-full h-full object-cover pointer-events-none mix-blend-screen"
  />
</template>

<script setup lang="ts">
// Module-level singleton — only one download per page load
const _state: { primary: HTMLVideoElement | null } = { primary: null }

const videoRef = useTemplateRef<HTMLVideoElement>('videoRef')

onMounted(() => {
  const el = videoRef.value
  if (!el) return

  if (!_state.primary) {
    _state.primary = el
    el.src = '/videos/smoke-2.mp4'
  } else {
    try {
      const primary = _state.primary as HTMLVideoElement & { captureStream(): MediaStream }
      el.srcObject = primary.captureStream()
    } catch {
      // Fallback if captureStream is not supported
      el.src = '/videos/smoke-2.mp4'
    }
  }
})

onUnmounted(() => {
  if (videoRef.value === _state.primary) {
    _state.primary = null
  }
})
</script>
