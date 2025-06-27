<!--  CURSOR TRIAL 1 -->>

<template>
  <!--  FOLLOWER CIRCLE  -->
  <div
    ref="cursor"
    class="animated-cursor"
    :style="{ width: size + 'px', height: size + 'px', opacity: hidden ? 0 : 1 }"
  />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

/* ------------------------------------------------------------- */
/*  Reactive state                                               */
/* ------------------------------------------------------------- */
const cursor = ref(null)
const size   = ref(32)           // default diameter
const hidden = ref(true)
const mouse  = { x: 0, y: 0 }    // initialized in onMounted

/* ------------------------------------------------------------- */
/*  Handlers                                                     */
/* ------------------------------------------------------------- */
function updateMouse (e) {
  hidden.value = false
  mouse.x = e.clientX
  mouse.y = e.clientY
}

function leaveWindow () {
  hidden.value = true
}

function handleEnter () {
  const rect = this.getBoundingClientRect()
  size.value = Math.max(rect.width, rect.height) + 16
}
function handleLeave () {
  size.value = 32
}

/* ------------------------------------------------------------- */
/*  Lifecycle                                                    */
/* ------------------------------------------------------------- */
const hoverEls = []

onMounted(() => {
  /* initialise mouse centre AFTER window exists (SSR-safe) */
  mouse.x = window.innerWidth  / 2
  mouse.y = window.innerHeight / 2

  gsap.set(cursor.value, { xPercent: -50, yPercent: -50 })

  addEventListener('mousemove', updateMouse)
  addEventListener('mouseleave', leaveWindow)

  gsap.ticker.add(() => {
    gsap.to(cursor.value, {
      x: mouse.x,
      y: mouse.y,
      duration: 0.4,
      ease: 'power3.out'
    })
  })

  // enlarge on links / buttons / custom targets
  document.querySelectorAll('a,button,.hover-target').forEach(el => {
    el.addEventListener('mouseenter', handleEnter)
    el.addEventListener('mouseleave', handleLeave)
    hoverEls.push(el)
  })
})

onBeforeUnmount(() => {
  removeEventListener('mousemove', updateMouse)
  removeEventListener('mouseleave', leaveWindow)
  gsap.ticker.removeAll()

  hoverEls.forEach(el => {
    el.removeEventListener('mouseenter', handleEnter)
    el.removeEventListener('mouseleave', handleLeave)
  })
})
</script>

<style scoped>
/* 1. Hide native cursor app-wide */
html, body {
  cursor: none;
}

/* 2. Circle styling */
.animated-cursor {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  border-radius: 50%;
  background: rgba(255,255,255,0.12);
  pointer-events: none;
  will-change: transform, width, height, opacity;
  transition: opacity .25s ease;
}
</style>

