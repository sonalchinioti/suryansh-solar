<script setup>
// Page assembly. Each section is its own component; reorder or remove sections here.
import AnnouncementBar from './components/layout/AnnouncementBar.vue'
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import MobileCallBar from './components/layout/MobileCallBar.vue'

import HeroSection from './components/sections/HeroSection.vue'
import SegmentsSection from './components/sections/SegmentsSection.vue'
import WhySection from './components/sections/WhySection.vue'
import SystemSection from './components/sections/SystemSection.vue'
import FinanceSection from './components/sections/FinanceSection.vue'
import CalculatorSection from './components/sections/CalculatorSection.vue'
import SubsidySection from './components/sections/SubsidySection.vue'
import ProcessSection from './components/sections/ProcessSection.vue'
import StoriesSection from './components/sections/StoriesSection.vue'
import CtaBanner from './components/sections/CtaBanner.vue'
import SupportSection from './components/sections/SupportSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <AnnouncementBar />
  <SiteHeader />
  <main>
    <HeroSection />
    <SegmentsSection />
    <WhySection />
    <SystemSection />
    <FinanceSection />
    <CalculatorSection />
    <SubsidySection />
    <ProcessSection />
    <StoriesSection />
    <CtaBanner />
    <SupportSection />
    <FaqSection />
    <ContactSection />
  </main>
  <SiteFooter />
  <MobileCallBar />
</template>
