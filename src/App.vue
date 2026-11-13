<script setup>
// Page assembly. Each section is its own component; reorder or remove sections here.
import TopBar from './components/layout/TopBar.vue'
import SiteHeader from './components/layout/SiteHeader.vue'
import OfferStrip from './components/layout/OfferStrip.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import MobileCallBar from './components/layout/MobileCallBar.vue'

import HeroSection from './components/sections/HeroSection.vue'
import BillProblemSection from './components/sections/BillProblemSection.vue'
import FinanceSection from './components/sections/FinanceSection.vue'
import SubsidySection from './components/sections/SubsidySection.vue'
import StoriesSection from './components/sections/StoriesSection.vue'
import ProcessSection from './components/sections/ProcessSection.vue'
import SupportSection from './components/sections/SupportSection.vue'
import CalculatorSection from './components/sections/CalculatorSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <TopBar />
  <SiteHeader />
  <OfferStrip />
  <main>
    <HeroSection />
    <BillProblemSection />
    <FinanceSection />
    <SubsidySection />
    <StoriesSection />
    <ProcessSection />
    <SupportSection />
    <CalculatorSection />
    <ContactSection />
  </main>
  <SiteFooter />
  <MobileCallBar />
</template>
