<script setup>
// Hero illustration: a flat-roof home with a raised solar array.
// Stand-in for photography. Swap this component for an <img> once real installation photos exist.
</script>

<template>
  <svg class="scene" viewBox="0 0 560 460" role="img" aria-label="Illustration of a home with solar panels on the terrace">
    <defs>
      <linearGradient id="rs-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#9CC3FF" />
        <stop offset="0.62" stop-color="#DCEBFF" />
        <stop offset="1" stop-color="#FFE7AE" />
      </linearGradient>
      <linearGradient id="rs-panel" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#2A5FD0" />
        <stop offset="1" stop-color="#0B2A6B" />
      </linearGradient>
      <radialGradient id="rs-glow">
        <stop offset="0" stop-color="#FFF3C4" stop-opacity="0.95" />
        <stop offset="1" stop-color="#FFF3C4" stop-opacity="0" />
      </radialGradient>
    </defs>

    <rect width="560" height="460" fill="url(#rs-sky)" />

    <!-- sun -->
    <circle cx="430" cy="104" r="130" fill="url(#rs-glow)" />
    <circle cx="430" cy="104" r="46" fill="#FFC21A" />

    <!-- clouds -->
    <g fill="#fff" opacity="0.85">
      <rect x="52" y="74" width="120" height="26" rx="13" />
      <rect x="84" y="56" width="64" height="28" rx="14" />
      <rect x="300" y="168" width="92" height="20" rx="10" opacity="0.7" />
    </g>

    <!-- skyline -->
    <g fill="#A9C2EC" opacity="0.75">
      <rect x="0" y="286" width="70" height="174" />
      <rect x="58" y="252" width="46" height="208" />
      <rect x="452" y="262" width="56" height="198" />
      <rect x="498" y="296" width="62" height="164" />
    </g>

    <!-- trees -->
    <g>
      <rect x="54" y="380" width="8" height="50" fill="#7A5A3A" />
      <circle cx="58" cy="362" r="34" fill="#2E9A5B" />
      <circle cx="38" cy="380" r="22" fill="#237F49" />
      <rect x="506" y="388" width="8" height="42" fill="#7A5A3A" />
      <circle cx="510" cy="372" r="30" fill="#2E9A5B" />
    </g>

    <!-- house -->
    <rect x="104" y="268" width="352" height="170" fill="#FFFFFF" />
    <rect x="104" y="268" width="352" height="170" fill="#0B2A6B" opacity="0.04" />
    <rect x="104" y="346" width="352" height="6" fill="#D6DEEC" />
    <rect x="92" y="252" width="376" height="18" rx="3" fill="#E8EEF8" />
    <rect x="92" y="266" width="376" height="4" fill="#C9D4E8" />

    <!-- windows and door -->
    <g fill="#FFEFC2" stroke="#0B2A6B" stroke-width="3">
      <rect x="132" y="290" width="62" height="40" rx="3" />
      <rect x="366" y="290" width="62" height="40" rx="3" />
      <rect x="132" y="370" width="62" height="44" rx="3" />
      <rect x="366" y="370" width="62" height="44" rx="3" />
    </g>
    <g stroke="#0B2A6B" stroke-width="3">
      <path d="M163 290v40M397 290v40M163 370v44M397 370v44" />
    </g>
    <rect x="254" y="366" width="52" height="72" rx="3" fill="#163D8F" />
    <circle cx="296" cy="404" r="3" fill="#FFC21A" />
    <rect x="232" y="286" width="96" height="48" rx="3" fill="#DCEBFF" stroke="#0B2A6B" stroke-width="3" />
    <path d="M232 334h96" stroke="#0B2A6B" stroke-width="6" />

    <!-- water tank -->
    <rect x="404" y="214" width="40" height="38" rx="6" fill="#1F2937" />
    <rect x="410" y="208" width="28" height="8" rx="3" fill="#374151" />

    <!-- array: legs, then the tilted panel face -->
    <g stroke="#6B7C99" stroke-width="5" stroke-linecap="round">
      <path d="M134 252v-34M258 252v-34M382 252v-34M166 252v-92M290 252v-92" opacity="0.9" />
    </g>
    <path d="M116 222h282l-34-82H150z" fill="url(#rs-panel)" stroke="#E8EEF8" stroke-width="4" stroke-linejoin="round" />
    <g stroke="#9DB9F2" stroke-width="2" opacity="0.9">
      <path d="M133 181h248M163 222l22.7-82M210 222l11.3-82M257 222v-82M304 222l-11.3-82M351 222l-22.7-82" />
    </g>
    <path d="M150 140h86l-40 82h-80z" fill="#fff" opacity="0.1" />

    <!-- ground -->
    <rect x="0" y="436" width="560" height="24" fill="#2E9A5B" />
    <rect x="0" y="436" width="560" height="5" fill="#237F49" />
  </svg>
</template>

<style scoped>
.scene { display: block; width: 100%; height: auto; border-radius: 28px; }
</style>
