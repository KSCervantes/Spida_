<script setup lang="ts">
import { ref, type Directive } from 'vue'

/* ------------------------------------------------------------------ *
 * EDIT ME: download + credit
 * ------------------------------------------------------------------ */
const APK_URL = '/spida.apk'
const APP_VERSION = '1.0.0'
const APK_SIZE = '81 MB'
const creator = {
  name: 'Kyle Cervantes',
  role: 'Creator of Spida',
  initials: 'KC',
  tagline: 'Designing delightful mobile experiences that bring real people together.',
  // 👉 Add your photo: drop an image in /public and point this at it
  //    (e.g. '/me.jpg'). Replace /public/creator-avatar.svg, or set this
  //    to '' to fall back to the initials.
  avatar: '/Kyle.png',
}
// Hide a broken/missing avatar image and show the initials instead.
const avatarError = ref(false)
// Social links — replace the '#' placeholders with your real profiles.
const socials = [
  { label: 'GitHub', icon: 'fi-brands-github', url: '#' },
  { label: 'LinkedIn', icon: 'fi-brands-linkedin', url: '#' },
  { label: 'Twitter', icon: 'fi-brands-twitter', url: '#' },
  { label: 'Website', icon: 'fi-sr-globe', url: '#' },
  { label: 'Email', icon: 'fi-sr-envelope', url: '#' },
]
const builtWith = ['Flutter', 'Vue', 'Firebase']

/* ------------------------------------------------------------------ *
 * Reveal-on-scroll directive  ( v-reveal="{ delay: 120 }" )
 * ------------------------------------------------------------------ */
const vReveal: Directive<HTMLElement, { delay?: number } | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value?.delay) el.style.transitionDelay = `${binding.value.delay}ms`
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add('reveal-in')
            io.unobserve(el)
          }
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
  },
}

/* ------------------------------------------------------------------ *
 * Content
 * ------------------------------------------------------------------ */
const hearts = Array.from({ length: 10 }, (_, i) => ({
  left: 4 + i * 9.5 + '%',
  delay: (i * 0.7).toFixed(1) + 's',
  dur: 8 + (i % 4) * 2.5 + 's',
  size: 12 + (i % 3) * 10 + 'px',
  char: ['💖', '💗', '💕', '❤️', '💘'][i % 5],
}))

const features = [
  {
    icon: 'fi-sr-flame',
    title: 'Smart Discover',
    text: 'Swipe through people who match your vibe — powered by interest-aware recommendations.',
  },
  {
    icon: 'fi-sr-badge-check',
    title: 'Verified Profiles',
    text: 'On-device face verification keeps bots and catfish out, so every match is a real person.',
  },
  {
    icon: 'fi-sr-comment-dots',
    title: 'Real-time Chat',
    text: 'Instant messaging with read receipts and push notifications the moment you match.',
  },
  {
    icon: 'fi-sr-marker',
    title: 'Nearby Matches',
    text: 'Location-aware suggestions help you meet people right around the corner.',
  },
  {
    icon: 'fi-sr-shield',
    title: 'Safety First',
    text: 'Block, report and safety tools built in — your comfort and privacy come first.',
  },
  {
    icon: 'fi-sr-bolt',
    title: 'Lightning Fast',
    text: 'Built with Flutter for a buttery-smooth native experience on every device.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Create your profile',
    text: 'Sign up in seconds, add your best photos and verify it’s really you.',
  },
  {
    n: '2',
    title: 'Discover & match',
    text: 'Swipe right on people you like. When the feeling is mutual, it’s a match.',
  },
  {
    n: '3',
    title: 'Start the spark',
    text: 'Break the ice, chat in real time and make plans to meet up safely.',
  },
]

// Overlapping faces under the hero CTA.
const trustAvatars = [
  '/avatars/u14.svg',
  '/avatars/u22.svg',
  '/avatars/u17.svg',
  '/avatars/u05.svg',
]

// Orbit avatars (the "singles around you" radar). Mix of real photos + illustrated people.
type Orb = { img: string; online?: boolean }
const orbitInner: Orb[] = [
  { img: '/girl.png', online: true },
  { img: '/avatars/u02.svg' },
  { img: '/boy.png' },
  { img: '/avatars/u11.svg', online: true },
]
const orbitOuter: Orb[] = [
  { img: '/avatars/u01.svg' },
  { img: '/avatars/u03.svg', online: true },
  { img: '/avatars/u12.svg' },
  { img: '/avatars/u18.svg' },
  { img: '/avatars/u21.svg', online: true },
  { img: '/avatars/u20.svg' },
]
</script>

<template>
  <div class="page">
    <!-- ANIMATED BACKDROP -->
    <div class="bg-decor" aria-hidden="true">
      <span class="blob b1"></span>
      <span class="blob b2"></span>
      <span class="blob b3"></span>
    </div>

    <!-- NAV -->
    <header class="nav">
      <a class="brand" href="#top" aria-label="Spida">
        <img src="/spida-logo.png" alt="Spida" class="brand-logo" />
      </a>
      <nav class="nav-links">
        <a href="#features">Features</a>
        <a href="#orbit">Nearby</a>
        <a href="#how">How it works</a>
        <a :href="APK_URL" download class="nav-cta">Get the app</a>
      </nav>
    </header>

    <!-- HERO -->
    <section id="top" class="hero">
      <div class="hero-hearts" aria-hidden="true">
        <span
          v-for="(h, i) in hearts"
          :key="i"
          class="fheart"
          :style="{
            left: h.left,
            animationDelay: h.delay,
            animationDuration: h.dur,
            fontSize: h.size,
          }"
          >{{ h.char }}</span
        >
      </div>

      <div class="hero-copy">
        <span class="pill"><span class="ping"></span> Now live on Android</span>
        <h1>Find your <span class="grad">spark</span>.</h1>
        <p class="lede">
          Spida is the modern dating app that connects real people nearby. Verified profiles, smart
          matching and real-time chat — your story starts with one swipe.
        </p>

        <div class="cta-row">
          <a :href="APK_URL" download class="btn-primary">
            <i class="btn-android fi-sr-download"></i> Download for Android
          </a>
          <div class="cta-meta">
            <strong>v{{ APP_VERSION }}</strong>
            <span>Android APK · {{ APK_SIZE }}</span>
          </div>
        </div>

        <div class="trust">
          <div class="faces">
            <img v-for="(a, i) in trustAvatars" :key="i" :src="a" alt="" class="face-av" />
          </div>
          <p>Real people, real connections near you</p>
        </div>
      </div>

      <!-- PHONE MOCKUP — Flutter "Get Started" welcome screen -->
      <div class="hero-art">
        <div class="badge badge-1"><i class="fi-sr-comment-dots"></i> New message</div>
        <div class="badge badge-2"><i class="fi-sr-marker"></i> 3 km away</div>
        <div class="phone">
          <div class="phone-notch"></div>
          <div class="phone-screen wp">
            <!-- Hero gradient panel -->
            <div class="wp-hero">
              <span class="wp-orb o1"></span>
              <span class="wp-orb o2"></span>
              <span class="wp-orb o3"></span>
              <img src="/spida-wordmark.png" alt="Spida" class="wp-brand" />
              <h3 class="wp-headline">Find someone<br />who matches<br />your spark.</h3>
              <span class="wp-chip"><i class="fi-sr-marker"></i> Singles near you</span>

              <!-- mini orbit illustration -->
              <div class="wp-mini">
                <span class="wp-ring"></span>
                <span class="wp-ring2"></span>
                <span class="wp-core">♥</span>
                <span class="wp-av a1"><img src="/girl.png" alt="" /></span>
                <span class="wp-av a2"><img src="/boy.png" alt="" /></span>
                <span class="wp-av a3"><img src="/boy.png" alt="" /></span>
              </div>
            </div>

            <!-- White bottom sheet -->
            <div class="wp-sheet">
              <span class="wp-handle"></span>
              <img src="/spida-wordmark.png" alt="Spida" class="wp-logo" />
              <p class="wp-title">
                Real connections,<br /><span class="pink">the modern way</span>
              </p>
              <p class="wp-sub">
                Meet new people, build your profile, and start matching with singles near you.
              </p>

              <div class="wp-social">
                <span class="wp-cluster">
                  <i class="c c1"><img src="/girl.png" alt="" /></i>
                  <i class="c c2"><img src="/boy.png" alt="" /></i>
                  <i class="c c3"><img src="/girl.png" alt="" /></i>
                  <i class="c heart">♥</i>
                </span>
                <span class="wp-social-text"><b>Real people,</b> real connections near you</span>
              </div>

              <div class="wp-btn">Get Started <span class="wp-arrow">→</span></div>
              <p class="wp-login">Already have an account? <a>Log in</a></p>
              <div class="wp-dots"><i class="on"></i><i></i><i></i></div>
              <p class="wp-credit">
                <span class="h">♥</span> Created by <b>{{ creator.name }}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ORBIT / NEARBY -->
    <section id="orbit" class="orbit">
      <div class="orbit-copy" v-reveal>
        <span class="pill"><span class="ping"></span> Live near you</span>
        <h2 class="section-title">Thousands of singles in your <span class="grad">orbit</span></h2>
        <p class="section-sub left">
          Spida puts real, verified people right around you. Open the app and watch your world fill
          with potential matches — someone special could be just a swipe away.
        </p>
        <a :href="APK_URL" download class="btn-primary sm">
          <i class="btn-android fi-sr-search"></i> Explore who’s nearby
        </a>
      </div>

      <div class="orbit-wrap" v-reveal="{ delay: 150 }">
        <div class="orbit-stage">
          <span class="radar r1"></span>
          <span class="radar r2"></span>
          <span class="radar r3"></span>

          <div class="orbit-core">
            <img src="/spida-logo.png" alt="Spida" />
          </div>

          <div class="orbit-ring ring-inner">
            <div
              v-for="(o, i) in orbitInner"
              :key="'in' + i"
              class="orbit-pos"
              :style="{ '--a': (i * 360) / orbitInner.length + 'deg', '--r': '118px' }"
            >
              <div class="orbit-face">
                <img :src="o.img" alt="" />
                <i v-if="o.online" class="dot"></i>
              </div>
            </div>
          </div>

          <div class="orbit-ring ring-outer">
            <div
              v-for="(o, i) in orbitOuter"
              :key="'out' + i"
              class="orbit-pos"
              :style="{ '--a': (i * 360) / orbitOuter.length + 'deg', '--r': '205px' }"
            >
              <div class="orbit-face sm">
                <img :src="o.img" alt="" />
                <i v-if="o.online" class="dot"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section id="features" class="features">
      <h2 class="section-title" v-reveal>
        Everything you need to <span class="grad">connect</span>
      </h2>
      <p class="section-sub" v-reveal>
        Thoughtfully designed features that make finding your person effortless.
      </p>
      <div class="feature-grid">
        <article
          v-for="(f, i) in features"
          :key="f.title"
          class="feature"
          v-reveal="{ delay: (i % 3) * 100 }"
        >
          <div class="feature-icon"><i :class="f.icon"></i></div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.text }}</p>
        </article>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section id="how" class="how">
      <h2 class="section-title" v-reveal>Get started in <span class="grad">3 steps</span></h2>
      <div class="steps">
        <div v-for="(s, i) in steps" :key="s.n" class="step" v-reveal="{ delay: i * 120 }">
          <div class="step-num">{{ s.n }}</div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </div>
      </div>
    </section>

    <!-- DOWNLOAD CTA -->
    <section class="download">
      <div class="download-inner" v-reveal>
        <h2>Your next great date is one tap away.</h2>
        <p>Join Spida today and start meeting people who get you.</p>
        <a :href="APK_URL" download class="btn-light pulse">
          <i class="btn-android fi-sr-download"></i> Download the Spida APK
        </a>
        <span class="download-note">Free · v{{ APP_VERSION }} · {{ APK_SIZE }} · Android 5.0+</span>
      </div>
    </section>

    <!-- CREATED BY -->
    <section class="creator" v-reveal>
      <div class="creator-card">
        <span class="creator-tag"><i class="fi-sr-heart"></i> Crafted with love</span>

        <div class="creator-main">
          <div class="creator-avatar">
            <img
              v-if="creator.avatar && !avatarError"
              :src="creator.avatar"
              :alt="creator.name"
              class="creator-photo"
              @error="avatarError = true"
            />
            <span v-else>{{ creator.initials }}</span>
            <i class="creator-ring"></i>
          </div>
          <div class="creator-meta">
            <span class="creator-label">Created by</span>
            <h3>{{ creator.name }}</h3>
            <p class="creator-role">{{ creator.role }}</p>
            <p class="creator-tagline">{{ creator.tagline }}</p>
            <div class="creator-socials">
              <a
                v-for="s in socials"
                :key="s.label"
                :href="s.url"
                class="social"
                :aria-label="s.label"
                target="_blank"
                rel="noopener"
              >
                <i :class="s.icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="creator-built">
          <span class="bw-label">Built with</span>
          <span v-for="t in builtWith" :key="t" class="bw-chip">{{ t }}</span>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="brand">
        <img src="/spida-logo.png" alt="Spida" class="brand-logo" />
      </div>
      <p>© 2026 Spida · Find your spark.</p>
    </footer>
  </div>
</template>

<style scoped>
:global(:root) {
  --rose: #e94b79;
  --rose-light: #ff7aa6;
  --rose-deep: #d7376a;
  --ink: #111827;
  --muted: #6b7280;
  --bg-soft: #fff5f8;
}
:global(html) {
  scroll-behavior: smooth;
}
:global(body) {
  margin: 0;
  background: #fff;
}

.page {
  position: relative;
  font-family:
    'Segoe UI',
    system-ui,
    -apple-system,
    sans-serif;
  color: var(--ink);
  line-height: 1.5;
  overflow-x: clip;
}

/* Reveal-on-scroll */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal-in {
  opacity: 1;
  transform: none;
}

/* Offset anchored scrolling so the sticky nav doesn't cover section titles */
#top,
#orbit,
#features,
#how {
  scroll-margin-top: 92px;
}

.grad {
  background: linear-gradient(90deg, var(--rose), var(--rose-light), #6a4be0, var(--rose));
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: grad-pan 8s linear infinite;
}
@keyframes grad-pan {
  to {
    background-position: 300% 0;
  }
}

/* Animated backdrop */
.bg-decor {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
}
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.5;
}
.b1 {
  width: 480px;
  height: 480px;
  background: #ffd9e5;
  top: -120px;
  right: -80px;
  animation: drift1 18s ease-in-out infinite;
}
.b2 {
  width: 420px;
  height: 420px;
  background: #e2f8f7;
  top: 40%;
  left: -120px;
  animation: drift2 22s ease-in-out infinite;
}
.b3 {
  width: 380px;
  height: 380px;
  background: #ede9fe;
  bottom: -120px;
  right: 20%;
  animation: drift1 26s ease-in-out infinite reverse;
}
@keyframes drift1 {
  50% {
    transform: translate(-40px, 50px) scale(1.1);
  }
}
@keyframes drift2 {
  50% {
    transform: translate(50px, -40px) scale(1.08);
  }
}

/* NAV */
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 6vw;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid #f3e1e9;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--ink);
}
.brand-logo {
  height: 80px;
  width: auto;
  object-fit: contain;
}
.footer .brand-logo {
  height: 80px;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}
.nav-links a {
  text-decoration: none;
  color: var(--ink);
  font-weight: 600;
  font-size: 0.95rem;
}
.nav-cta {
  background: var(--rose);
  color: #fff !important;
  padding: 9px 18px;
  border-radius: 999px;
  box-shadow: 0 8px 20px -8px rgba(233, 75, 121, 0.7);
}

/* HERO */
.hero {
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
  padding: 72px 6vw 96px;
}
.hero-hearts {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.fheart {
  position: absolute;
  bottom: -40px;
  opacity: 0;
  animation-name: floatup;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes floatup {
  10% {
    opacity: 0.9;
  }
  90% {
    opacity: 0.9;
  }
  100% {
    transform: translateY(-95vh) rotate(40deg);
    opacity: 0;
  }
}
.hero-copy {
  position: relative;
  z-index: 2;
}
.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ffe0ec;
  color: var(--rose-deep);
  font-weight: 700;
  font-size: 0.85rem;
  padding: 7px 14px;
  border-radius: 999px;
}
.ping {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--rose);
  box-shadow: 0 0 0 0 rgba(233, 75, 121, 0.6);
  animation: ping 1.6s ease-out infinite;
}
@keyframes ping {
  70%,
  100% {
    box-shadow: 0 0 0 10px rgba(233, 75, 121, 0);
  }
}
.hero h1 {
  font-size: clamp(2.7rem, 6vw, 4.4rem);
  line-height: 1.04;
  letter-spacing: -2px;
  margin: 18px 0 14px;
  font-weight: 900;
}
.lede {
  font-size: 1.15rem;
  color: var(--muted);
  max-width: 30em;
}
.cta-row {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 28px;
  flex-wrap: wrap;
}
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(90deg, var(--rose), var(--rose-light));
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.05rem;
  padding: 15px 26px;
  border-radius: 14px;
  box-shadow: 0 12px 30px -8px rgba(233, 75, 121, 0.6);
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
}
.btn-primary.sm {
  padding: 13px 22px;
  font-size: 1rem;
  margin-top: 22px;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 38px -8px rgba(233, 75, 121, 0.75);
}
.btn-android {
  font-size: 0.95rem;
  line-height: 1;
}
.cta-meta {
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  color: var(--muted);
}
.cta-meta strong {
  color: var(--ink);
}
.trust {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 30px;
}
.faces {
  display: flex;
}
.faces .face-av {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  margin-left: -12px;
  box-shadow: 0 4px 10px -4px rgba(17, 24, 39, 0.4);
}
.faces .face-av:first-child {
  margin-left: 0;
}
.trust p {
  margin: 0;
  font-size: 0.92rem;
  color: var(--muted);
}

/* PHONE */
.hero-art {
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 2;
}
.badge {
  position: absolute;
  z-index: 4;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #fff;
  padding: 10px 14px;
  border-radius: 14px;
  font-size: 0.82rem;
  font-weight: 700;
  box-shadow: 0 14px 30px -12px rgba(17, 24, 39, 0.4);
  animation: bob 4s ease-in-out infinite;
}
.badge i {
  font-size: 0.82rem;
  line-height: 1;
}
.badge-1 {
  top: 60px;
  left: 2%;
  color: var(--rose-deep);
}
.badge-2 {
  bottom: 90px;
  right: 0;
  color: #16b9c2;
  animation-delay: 1.2s;
}
@keyframes bob {
  50% {
    transform: translateY(-12px);
  }
}
.phone {
  position: relative;
  z-index: 1;
  width: 290px;
  height: 600px;
  background: #111827;
  border-radius: 42px;
  padding: 11px;
  box-shadow: 0 40px 80px -20px rgba(17, 24, 39, 0.5);
  animation: bob 6s ease-in-out infinite;
}
.phone-notch {
  position: absolute;
  top: 13px;
  left: 50%;
  transform: translateX(-50%);
  width: 130px;
  height: 22px;
  background: #111827;
  border-radius: 0 0 16px 16px;
  z-index: 5;
}
.phone-screen {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ---- Flutter welcome screen replica ---- */
.wp-hero {
  position: relative;
  flex: none;
  height: 208px;
  overflow: hidden;
  background: linear-gradient(135deg, #1fc7c7 0%, #6a4be0 52%, #e94b79 100%);
}
.wp-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(20px);
}
.wp-orb.o1 {
  width: 130px;
  height: 130px;
  top: -55px;
  left: -35px;
  background: rgba(52, 224, 196, 0.5);
}
.wp-orb.o2 {
  width: 150px;
  height: 150px;
  bottom: -65px;
  right: -45px;
  background: rgba(255, 111, 165, 0.6);
}
.wp-orb.o3 {
  width: 90px;
  height: 90px;
  top: -30px;
  right: -20px;
  background: rgba(255, 255, 255, 0.4);
}
.wp-brand {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 84px;
  height: auto;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18));
}
.wp-headline {
  position: absolute;
  top: 84px;
  left: 18px;
  width: 145px;
  margin: 0;
  color: #fff;
  font-size: 15px;
  font-weight: 900;
  line-height: 1.14;
  letter-spacing: -0.3px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.22);
}
.wp-chip {
  position: absolute;
  top: 158px;
  left: 18px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 8.5px;
  font-weight: 700;
  color: #fff;
  padding: 5px 9px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(6px);
}
.wp-chip i {
  font-size: 10px;
  line-height: 1;
}
.wp-mini {
  position: absolute;
  right: 6px;
  bottom: 6px;
  width: 104px;
  height: 104px;
}
.wp-ring,
.wp-ring2 {
  position: absolute;
  border-radius: 50%;
}
.wp-ring {
  inset: 4px;
  border: 1.5px dashed rgba(255, 255, 255, 0.55);
  animation: spin 16s linear infinite;
}
.wp-ring2 {
  inset: 22px;
  border: 1px solid rgba(255, 255, 255, 0.35);
}
.wp-core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 34px;
  height: 34px;
  margin: -17px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 15px;
  background: linear-gradient(135deg, #ff7aa6, #e94b79);
  box-shadow: 0 6px 16px -4px rgba(233, 75, 121, 0.9);
  animation: beat 2s ease-in-out infinite;
}
.wp-av {
  position: absolute;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  border: 2px solid #fff;
  overflow: hidden;
  box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.3);
  animation: bob 5s ease-in-out infinite;
}
.wp-av img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.wp-av.a1 {
  top: 4px;
  left: 12px;
}
.wp-av.a2 {
  top: 40px;
  right: 2px;
  animation-delay: 1s;
}
.wp-av.a3 {
  bottom: 6px;
  left: 22px;
  animation-delay: 2s;
}
.wp-sheet {
  position: relative;
  flex: 1;
  margin-top: -22px;
  background: #fff;
  border-radius: 30px 30px 0 0;
  padding: 12px 18px 14px;
  box-shadow: 0 -10px 30px rgba(16, 24, 40, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.wp-handle {
  width: 38px;
  height: 4px;
  border-radius: 10px;
  background: #e6eaf0;
  margin-bottom: 8px;
}
.wp-logo {
  width: 80px;
  height: auto;
}
.wp-title {
  margin: 4px 0 0;
  font-size: 15px;
  font-weight: 900;
  color: #111827;
  line-height: 1.16;
  letter-spacing: -0.3px;
}
.wp-title .pink {
  color: #e94b79;
}
.wp-sub {
  margin: 6px 0 0;
  font-size: 9px;
  color: #9aa3af;
  line-height: 1.45;
  max-width: 195px;
}
.wp-social {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
}
.wp-cluster {
  position: relative;
  width: 72px;
  height: 26px;
  flex: none;
}
.wp-cluster .c {
  position: absolute;
  top: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid #fff;
  overflow: hidden;
}
.wp-cluster .c img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.wp-cluster .c1 {
  left: 0;
  background: #ffe0ec;
}
.wp-cluster .c2 {
  left: 15px;
  background: #ffefc6;
}
.wp-cluster .c3 {
  left: 30px;
  background: #e2f8f7;
}
.wp-cluster .heart {
  left: 45px;
  background: linear-gradient(135deg, #ff6b9a, #e94b79);
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 12px;
}
.wp-social-text {
  font-size: 8.5px;
  text-align: left;
  line-height: 1.3;
  color: #9aa3af;
  font-weight: 600;
}
.wp-social-text b {
  color: #e94b79;
  font-weight: 900;
}
.wp-btn {
  margin-top: 14px;
  width: 100%;
  height: 40px;
  border-radius: 22px;
  color: #fff;
  font-weight: 800;
  font-size: 12px;
  background: linear-gradient(135deg, #ff7aa6, #e94b79 60%, #d7376a);
  box-shadow: 0 10px 20px -6px rgba(233, 75, 121, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.wp-arrow {
  font-size: 13px;
}
.wp-login {
  margin: 9px 0 0;
  font-size: 9px;
  color: #9aa3af;
}
.wp-login a {
  color: #e94b79;
  font-weight: 800;
}
.wp-dots {
  display: flex;
  gap: 4px;
  margin-top: 9px;
}
.wp-dots i {
  width: 6px;
  height: 6px;
  border-radius: 10px;
  background: #e0e5ec;
}
.wp-dots i.on {
  width: 18px;
  background: #e94b79;
}
.wp-credit {
  margin: 9px 0 0;
  font-size: 8px;
  color: #9aa3af;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}
.wp-credit .h {
  color: #e94b79;
}
.wp-credit b {
  color: #e94b79;
  font-weight: 900;
}

/* ORBIT */
.orbit {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 30px;
  padding: 80px 6vw;
}
.orbit-copy .section-title {
  text-align: left;
}
.section-sub.left {
  margin: 0 0 6px;
  text-align: left;
}
.orbit-wrap {
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.orbit-stage {
  position: relative;
  width: 460px;
  height: 460px;
  max-width: 92vw;
}
.radar {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90px;
  height: 90px;
  margin: -45px 0 0 -45px;
  border-radius: 50%;
  border: 2px solid rgba(233, 75, 121, 0.5);
  animation: radar 3s ease-out infinite;
}
.r2 {
  animation-delay: 1s;
}
.r3 {
  animation-delay: 2s;
}
@keyframes radar {
  0% {
    transform: scale(0.6);
    opacity: 0.9;
  }
  100% {
    transform: scale(4.6);
    opacity: 0;
  }
}
.orbit-core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 96px;
  height: 96px;
  margin: -48px 0 0 -48px;
  border-radius: 50%;
  background: #fff;
  display: grid;
  place-items: center;
  box-shadow: 0 18px 40px -12px rgba(233, 75, 121, 0.6);
  z-index: 3;
}
.orbit-core img {
  width: 64px;
  height: 64px;
  border-radius: 16px;
}
.orbit-ring {
  position: absolute;
  inset: 0;
}
.ring-inner {
  animation: spin 28s linear infinite;
}
.ring-outer {
  animation: spin 44s linear infinite reverse;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.orbit-pos {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(var(--a)) translate(var(--r)) rotate(calc(-1 * var(--a)));
}
.orbit-face {
  position: absolute;
  top: 0;
  left: 0;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  background: #ffe0ec;
  border: 3px solid #fff;
  box-shadow: 0 10px 22px -8px rgba(17, 24, 39, 0.45);
  overflow: visible;
  transform: translate(-50%, -50%);
}
.orbit-face.sm {
  width: 50px;
  height: 50px;
  font-size: 1.3rem;
}
.orbit-face img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.orbit-face .dot {
  position: absolute;
  right: 2px;
  bottom: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #22c55e;
  border: 2px solid #fff;
}
.ring-inner .orbit-face {
  animation: faceUp 28s linear infinite;
}
.ring-outer .orbit-face {
  animation: faceUpRev 44s linear infinite;
}
@keyframes faceUp {
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
@keyframes faceUpRev {
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* FEATURES + HOW + sections */
.features,
.how {
  padding: 80px 6vw;
  text-align: center;
}
.section-title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 900;
  letter-spacing: -1px;
  margin: 0 0 10px;
}
.section-sub {
  color: var(--muted);
  max-width: 36em;
  margin: 0 auto 48px;
  font-size: 1.05rem;
}
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
  max-width: 1100px;
  margin: 0 auto;
}
.feature {
  text-align: left;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);
  border: 1px solid #f3e6ec;
  border-radius: 20px;
  padding: 26px;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
}
.feature:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 44px -18px rgba(233, 75, 121, 0.4);
}
.feature-icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, #ffe0ec, #ffd9e5);
  margin-bottom: 16px;
}
.feature-icon i {
  font-size: 1.4rem;
  line-height: 1;
  color: var(--rose);
}
.feature h3 {
  margin: 0 0 8px;
  font-size: 1.2rem;
}
.feature p {
  margin: 0;
  color: var(--muted);
}

/* HOW */
.how {
  background: linear-gradient(180deg, rgba(255, 245, 248, 0.6), rgba(255, 255, 255, 0));
}
.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 28px;
  max-width: 1000px;
  margin: 40px auto 0;
}
.step {
  background: #fff;
  border-radius: 20px;
  padding: 30px 24px;
  text-align: center;
  box-shadow: 0 12px 30px -20px rgba(17, 24, 39, 0.3);
}
.step-num {
  width: 52px;
  height: 52px;
  margin: 0 auto 16px;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 1.3rem;
  color: #fff;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--rose), var(--rose-light));
}
.step h3 {
  margin: 0 0 8px;
}
.step p {
  margin: 0;
  color: var(--muted);
}

/* DOWNLOAD */
.download {
  padding: 90px 6vw;
}
.download-inner {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(135deg, var(--rose), var(--rose-deep) 55%, #6a4be0);
  border-radius: 30px;
  padding: 60px 30px;
  color: #fff;
  box-shadow: 0 30px 60px -24px rgba(233, 75, 121, 0.7);
}
.download-inner h2 {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  margin: 0 0 12px;
  font-weight: 900;
}
.download-inner p {
  margin: 0 0 28px;
  opacity: 0.95;
  font-size: 1.1rem;
}
.btn-light {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  color: var(--rose-deep);
  text-decoration: none;
  font-weight: 800;
  font-size: 1.05rem;
  padding: 15px 28px;
  border-radius: 14px;
  transition: transform 0.15s ease;
}
.btn-light:hover {
  transform: translateY(-2px);
}
.pulse {
  animation: pulse 2.2s ease-in-out infinite;
}
@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 0 16px rgba(255, 255, 255, 0);
  }
}
.download-note {
  display: block;
  margin-top: 18px;
  font-size: 0.85rem;
  opacity: 0.9;
}

/* CREATED BY — creator template card */
.creator {
  padding: 30px 6vw 84px;
  display: flex;
  justify-content: center;
}
.creator-card {
  position: relative;
  width: 100%;
  max-width: 640px;
  text-align: center;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid #f3e6ec;
  border-radius: 28px;
  padding: 40px 34px 30px;
  box-shadow: 0 30px 70px -34px rgba(17, 24, 39, 0.45);
  overflow: hidden;
}
.creator-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--rose), var(--rose-light), #6a4be0);
}
.creator-card::after {
  content: '';
  position: absolute;
  top: -90px;
  right: -90px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(233, 75, 121, 0.16), transparent 70%);
  pointer-events: none;
}
.creator-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #ffe0ec;
  color: var(--rose-deep);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  padding: 6px 14px;
  border-radius: 999px;
}
.creator-tag i {
  line-height: 1;
  animation: beat 1.4s ease-in-out infinite;
}
.creator-main {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  margin-top: 22px;
  text-align: left;
}
.creator-avatar {
  position: relative;
  width: 86px;
  height: 86px;
  flex: none;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 1.7rem;
  color: #fff;
  background: linear-gradient(135deg, var(--rose), #6a4be0);
  box-shadow: 0 14px 30px -10px rgba(233, 75, 121, 0.7);
}
.creator-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
.creator-ring {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 2px solid rgba(233, 75, 121, 0.4);
  animation: ringpulse 2.4s ease-out infinite;
}
@keyframes ringpulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.28);
    opacity: 0;
  }
}
.creator-label {
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}
.creator-meta h3 {
  margin: 3px 0 0;
  font-size: 1.5rem;
  letter-spacing: -0.4px;
}
.creator-role {
  margin: 2px 0 0;
  color: var(--rose);
  font-weight: 700;
  font-size: 0.95rem;
}
.creator-tagline {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 0.95rem;
  max-width: 34em;
}
.creator-socials {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}
.social {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  color: var(--ink);
  background: #fff;
  border: 1px solid #f0e0e8;
  font-size: 1rem;
  text-decoration: none;
  transition:
    transform 0.15s ease,
    background 0.15s ease,
    color 0.15s ease,
    box-shadow 0.15s ease;
}
.social i {
  line-height: 1;
}
.social:hover {
  transform: translateY(-3px);
  color: #fff;
  background: linear-gradient(135deg, var(--rose), #6a4be0);
  box-shadow: 0 12px 22px -10px rgba(233, 75, 121, 0.8);
}
.creator-built {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 26px;
  padding-top: 20px;
  border-top: 1px dashed #f0e0e8;
}
.bw-label {
  font-size: 0.8rem;
  color: var(--muted);
  font-weight: 600;
}
.bw-chip {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--ink);
  background: var(--bg-soft);
  border: 1px solid #f3e6ec;
  padding: 5px 12px;
  border-radius: 999px;
}
@keyframes beat {
  0%,
  100% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.25);
  }
}

/* FOOTER */
.footer {
  padding: 40px 6vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f3e1e9;
  color: var(--muted);
  flex-wrap: wrap;
  gap: 12px;
}
.footer p {
  margin: 0;
  font-size: 0.9rem;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero,
  .orbit {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero {
    padding-top: 48px;
  }
  .hero .lede {
    margin-left: auto;
    margin-right: auto;
  }
  .cta-row,
  .trust {
    justify-content: center;
  }
  .hero-art {
    margin-top: 26px;
  }
  .orbit-copy .section-title,
  .section-sub.left {
    text-align: center;
  }
  .orbit-copy .btn-primary.sm {
    margin-left: auto;
    margin-right: auto;
  }
  .nav-links a:not(.nav-cta) {
    display: none;
  }
}

@media (max-width: 560px) {
  .creator-main {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
  .creator-socials {
    justify-content: center;
  }
  .creator-tagline {
    margin-left: auto;
    margin-right: auto;
  }
}

/* Scale the orbit so all avatars stay on-screen on small devices */
@media (max-width: 560px) {
  .orbit-wrap {
    overflow: visible;
  }
  .orbit-stage {
    transform: scale(0.74);
    margin: -60px 0;
  }
}
@media (max-width: 400px) {
  .orbit-stage {
    transform: scale(0.64);
    margin: -83px 0;
  }
}
@media (max-width: 340px) {
  .orbit-stage {
    transform: scale(0.56);
    margin: -101px 0;
  }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .grad,
  .blob,
  .fheart,
  .ping,
  .badge,
  .phone,
  .wp-ring,
  .wp-core,
  .wp-av,
  .ring-inner,
  .ring-outer,
  .ring-inner .orbit-face,
  .ring-outer .orbit-face,
  .radar,
  .pulse,
  .creator-tag i,
  .creator-ring {
    animation: none !important;
  }
  .reveal {
    opacity: 1;
    transform: none;
  }
}
</style>
