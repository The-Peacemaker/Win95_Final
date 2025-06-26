<template>
  <!-- Custom cursor -->
  <div
    ref="cursor"
    class="cursor-ring pointer-events-none fixed left-0 top-0 z-50
           h-8 w-8 rounded-2xl backdrop-brightness-60 transition-opacity duration-300"
  />
</template>

<script setup lang="ts">
import { ref, watchEffect, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

/* ------------------------------------------------------------------ */
/* refs                                                               */
/* ------------------------------------------------------------------ */
const cursor = ref<HTMLElement | null>(null)
const mouse = ref({ x: 0, y: 0 })
const hoverRect = ref<DOMRect | null>(null)

/* ------------------------------------------------------------------ */
/* utilities                                                          */
/* ------------------------------------------------------------------ */
function findInteractive(el: HTMLElement | null): HTMLElement | null {
  while (el) {
    if (['a', 'button'].includes(el.tagName.toLowerCase()) ||
        el.dataset.cursor === 'interactive')
      return el
    el = el.parentElement
  }
  return null
}

/* ------------------------------------------------------------------ */
/* handlers                                                           */
/* ------------------------------------------------------------------ */
function handleMove(e: MouseEvent) {
  mouse.value = { x: e.clientX, y: e.clientY }
  const target = findInteractive(e.target as HTMLElement | null)
  hoverRect.value = target ? target.getBoundingClientRect() : null
}

/* ------------------------------------------------------------------ */
/* lifecycle                                                          */
/* ------------------------------------------------------------------ */
onMounted(() => {
  if (cursor.value)
    gsap.set(cursor.value, { xPercent: -50, yPercent: -50 })

  window.addEventListener('mousemove', handleMove)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMove)
})

/* ------------------------------------------------------------------ */
/* animation watcher                                                  */
/* ------------------------------------------------------------------ */
watchEffect(() => {
  if (!cursor.value) return

  if (hoverRect.value) {
    // Snap to centre of hovered element
    gsap.to(cursor.value, {
      x: hoverRect.value.left + hoverRect.value.width / 2,
      y: hoverRect.value.top + hoverRect.value.height / 2,
      duration: 0.5, ease: 'power3.out',
    })
    // Scale instead of rewriting width/height for perfect circle
    gsap.to(cursor.value, {
      scale: (hoverRect.value.width + 16) / 32,
      duration: 0.35, ease: 'power4.out',
    })
  } else {
    // Follow the pointer
    gsap.to(cursor.value, {
      x: mouse.value.x,
      y: mouse.value.y,
      duration: 0.5, ease: 'power3.out',
    })
    gsap.to(cursor.value, { scale: 1, duration: 0.35, ease: 'power4.out' })
  }
})
</script>

<style scoped>
/* Tailwind can’t express these two properties, so keep them in CSS */

.cursor-ring {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  border-radius: 9999px;

  /* Modern glass effect */
  background: rgba(255, 0, 0, 0.29);
  border: 1.5px solid rgba(67, 1, 247, 0.877);
  
  

  /* Ring glow */
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.1);

  /* Blend mode for dark-light contrast */
  mix-blend-mode: exclusion;

  /* Animation setup */
  transition:
    width 0.3s ease,
    height 0.3s ease,
    background 0.3s ease,
    border 0.3s ease;

  z-index: 999;
  transform: translate(-50%, -50%);
  animation: pulseRing 5s infinite ease-in-out;
}

@keyframes pulseRing {
  0%, 100% { box-shadow: 0 0 0px rgba(255,255,255,0.1); }
  50%      { box-shadow: 0 0 10px rgba(255,255,255,0.3); }
}


</style>
