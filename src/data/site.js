// Company details used across the header, footer, contact section and call bar.
// PLACEHOLDERS: phone, whatsappUrl and email must be replaced before going live.
export const site = {
  name: 'Suryansh Solar',
  tagline: 'Rooftop Solar · Finance · Service',
  phone: '+91 00000 00000',
  phoneHref: 'tel:+910000000000',
  whatsappUrl: 'https://wa.me/910000000000',
  email: 'hello@suryanshsolar.example',
  hours: 'Mon to Sat, 9 am to 7 pm',
  description:
    'Rooftop solar for homes and housing societies. Survey, design, finance, installation, subsidy and service from one team.',
  disclaimer:
    'Financing is provided by partner NBFCs and is subject to their approval. Subsidy is paid by the government as per the scheme rules in force. Savings shown are estimates.',
}

// Main menu. `href` points to a section id in App.vue.
export const navLinks = [
  { label: 'How It Works', href: '#math' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Subsidy', href: '#subsidy' },
  { label: 'Process', href: '#process' },
  { label: 'Stories', href: '#stories' },
  { label: 'FAQ', href: '#faq' },
]

// Extra links shown only in the footer.
export const footerLinks = [
  { label: 'Why Suryansh', href: '#why' },
  { label: 'Service & Support', href: '#support' },
  { label: 'Book a Site Visit', href: '#contact' },
]

// Slim bar above the header.
export const announcement = {
  text: 'Govt. subsidy up to ₹78,000 under PM Surya Ghar (PM Suryodaya Yojana). We file it for you.',
  linkLabel: 'See subsidy slabs',
  href: '#subsidy',
}

// Tick-marked points under the hero buttons.
export const trustPoints = ['100% NBFC finance', 'Subsidy paperwork handled', 'Service at your doorstep']

// The four headline figures at the bottom of the hero.
export const heroStats = [
  { icon: 'rupee', figure: '₹0', label: 'Down payment' },
  { icon: 'file', figure: '₹78,000', label: 'Maximum home subsidy' },
  { icon: 'clock', figure: '5 years', label: 'To a loan-free plant' },
  { icon: 'shield', figure: '25 years', label: 'Warranty and service' },
]
