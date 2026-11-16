// Copy for the repeating blocks. Edit text here; the components only handle layout.

// "Solar for" cards under the hero. `mode` opens the calculator on that property type.
export const segments = [
  {
    icon: 'home',
    title: 'Homes',
    text: 'Independent houses and flats with terrace rights. Central subsidy up to ₹78,000.',
    cta: 'Estimate for my home',
    href: '#calculator',
    mode: 'home',
  },
  {
    icon: 'building',
    title: 'Housing societies',
    text: 'Run lifts, pumps and common lights on solar without a special collection from members.',
    cta: 'Estimate for my society',
    href: '#calculator',
    mode: 'society',
  },
  {
    icon: 'store',
    title: 'Shops and offices',
    text: 'Daytime usage is where solar pays best. Ask us for a plan sized to your load.',
    cta: 'Talk to an engineer',
    href: '#contact',
  },
]

// "Why Suryansh" grid.
export const benefits = [
  {
    icon: 'rupee',
    title: 'Zero down payment',
    text: 'Our NBFC partner finances 100% of the plant. The money you used to pay the electricity board becomes the EMI.',
  },
  {
    icon: 'file',
    title: 'Subsidy, start to finish',
    text: 'Portal registration, electricity board approval, net meter, inspection and the claim itself. We do all of it.',
  },
  {
    icon: 'panel',
    title: 'Installed by our own crew',
    text: 'The same team that surveys your roof mounts, wires and tests the plant, then switches it on.',
  },
  {
    icon: 'wrench',
    title: 'Service for 25 years',
    text: 'Monitoring, remote fixes, technician visits and warranty claims for the life of the plant.',
  },
]

// "What goes on your roof": the parts of a rooftop plant, in the order the power flows.
export const systemParts = [
  {
    icon: 'panel',
    title: 'Solar panels',
    text: 'Turn sunlight into electricity. We size the array to your monthly usage and lay it out around shadows on your roof.',
  },
  {
    icon: 'frame',
    title: 'Mounting structure',
    text: 'Holds the panels at the right tilt. An engineer checks your roof structure during the site recce before anything is fixed to it.',
  },
  {
    icon: 'bolt',
    title: 'Inverter',
    text: 'Converts the panel output into the power your home runs on. Faults are handled under warranty.',
  },
  {
    icon: 'meter',
    title: 'Net meter',
    text: 'Counts the units your roof sends to the grid so they are set off against your bill. We arrange it with your electricity board.',
  },
  {
    icon: 'mobile',
    title: 'Monitoring app',
    text: "Shows your plant's generation every day. If the readings look odd, we fix it remotely.",
  },
]

// Three figures for a ₹3,000 bill, shown in "How it pays for itself".
export const billFacts = [
  {
    figure: '₹9 lakh',
    title: 'Paid as rent',
    text: "₹3,000 a month for 25 years at today's tariff. Tariffs usually go up, so the real figure is higher.",
  },
  {
    figure: '₹1.5 lakh',
    title: 'Paid as EMI instead',
    text: 'The same family pays roughly ₹2,500 a month for five years, and ends up owning a 3 kW plant.',
  },
  {
    figure: '₹7 lakh+',
    title: 'Stays with you',
    text: 'The difference stays in your account. For a society, it stays in the maintenance fund.',
  },
]

// How the financing works.
export const financeSteps = [
  {
    title: 'Our NBFC partner pays 100%',
    text: 'The full cost of the plant is financed on day one. You pay nothing to get it installed.',
  },
  {
    title: 'The subsidy comes in',
    text: 'We file your claim under the PM Suryodaya Yojana. When it arrives, it goes straight against the loan.',
  },
  {
    title: 'Savings cover the EMI',
    text: 'The roof makes your power, the bill drops, and that saved money pays the monthly instalment.',
  },
  {
    title: "Year 5: it's yours",
    text: 'The loan closes. The plant keeps producing for 20 more years, under warranty.',
  },
]

// Government subsidy section.
export const subsidy = {
  handledForYou: [
    'Registration on the national rooftop solar portal',
    'Feasibility approval from your electricity board',
    'Net meter application and installation',
    'Inspection visit and commissioning report',
    'Subsidy claim, tracked until the money is credited',
  ],
  homeRates: [
    { label: '1 kW plant (up to 150 units a month)', value: '₹30,000' },
    { label: '2 kW plant (150 to 300 units a month)', value: '₹60,000' },
    { label: '3 kW plant or bigger', value: '₹78,000', highlight: true },
  ],
  societyRates: [
    { label: 'Common areas: lifts, pumps, lights, EV charging', value: '₹18,000 / kW' },
    { label: 'Maximum plant size covered', value: '500 kW' },
  ],
}

// Customer stories. ILLUSTRATIVE: names are invented, replace with real customers.
// The breakdown table beside each story is calculated from `bill` and `type` (see utils/solarEstimate.js).
// The rupee figures inside `paragraphs` are written by hand: update them if the assumptions change.
export const stories = [
  {
    who: 'An independent house · family of five',
    title: 'The Sharmas swapped a ₹3,000 bill for a ₹2,486 EMI.',
    type: 'home',
    bill: 3000,
    paragraphs: [
      "Two ACs, a geyser, a fridge that never rests. Their summer bills had crossed ₹3,000 and nobody wanted to touch savings for a ₹2 lakh plant. They didn't have to. The NBFC paid for a 3 kW system, the ₹78,000 subsidy cut the loan to ₹1.17 lakh, and the monthly outgo actually went down from the first month.",
      'In year six the EMI stops. The roof keeps giving them about ₹2,880 worth of electricity every month.',
    ],
  },
  {
    who: 'A retired couple · 2BHK with terrace rights',
    title: 'The Iyers live on a pension. Their roof now pays one bill for them.',
    type: 'home',
    bill: 1900,
    paragraphs: [
      'A fixed income and a bill that climbs every year is a bad mix. A 2 kW plant matched their ₹1,900 monthly usage. After the ₹60,000 subsidy, the loan was only ₹70,000, and the EMI came to ₹1,487, which is ₹400 less than the bill it replaced.',
      'After five years, that ₹1,900 a month stays in their pension account.',
    ],
  },
  {
    who: 'A housing society · 60 flats',
    title: 'Green Meadows stopped raising maintenance to pay for lifts and pumps.',
    type: 'society',
    bill: 45000,
    paragraphs: [
      'Lifts, water pumps, parking and corridor lights cost the society ₹45,000 a month. The committee could not ask members for ₹22 lakh. With full financing, a 45 kW plant went up on the terrace without a single special collection. The EMI is about ₹30,600, the bill dropped by ₹43,200, and the society was ahead by ₹12,000 in the very first month.',
      'Once the loan closes, over ₹5 lakh a year goes back into the maintenance fund.',
    ],
  },
]

// The six-step process, in order.
export const processSteps = [
  {
    icon: 'search',
    title: 'Site recce',
    text: 'An engineer visits your roof, measures usable area, checks shadows, structure and your meter connection. Free, with no obligation.',
  },
  {
    icon: 'panel',
    title: 'Setup suggestion',
    text: 'We recommend the plant size, panel layout and inverter that fit your roof and your usage, and explain why.',
  },
  {
    icon: 'chart',
    title: 'Savings calculation',
    text: 'A written sheet with your cost, subsidy, EMI and month-by-month savings, so you see the full picture before you sign.',
  },
  {
    icon: 'bolt',
    title: 'Installation',
    text: 'Our own crew mounts, wires and tests the plant, arranges the net meter with your electricity board and switches it on.',
  },
  {
    icon: 'file',
    title: 'Subsidy application',
    text: 'We file the paperwork on the government portal, follow up on inspection and track the claim until the money is credited.',
  },
  {
    icon: 'wrench',
    title: 'After-setup service',
    text: 'Monitoring, cleaning guidance, repairs and warranty claims for the life of the plant. This is the step we are known for.',
  },
]

// After-sales support.
export const supportChannels = [
  {
    icon: 'mobile',
    title: 'Online support',
    points: [
      "Track your plant's generation every day in the app",
      'App not syncing or showing odd readings? We fix it remotely',
      'Raise a ticket by call, WhatsApp or app, and follow its status',
    ],
  },
  {
    icon: 'wrench',
    title: 'On-site support',
    points: [
      'Power failure or drop in output? A technician comes to your roof',
      'Inverter, wiring and panel faults handled under warranty',
      "Periodic health checks so small issues don't cost you units",
    ],
  },
]

export const propertyTypes = ['Independent house', 'Housing society', 'Shop or office']

// Frequently asked questions. Keep answers consistent with the figures in utils/solarEstimate.js.
export const faqs = [
  {
    q: 'Do I really pay nothing upfront?',
    a: 'Yes. Our NBFC partner finances the full cost of the plant on day one, so there is no down payment. The loan is subject to the lender approving your application.',
  },
  {
    q: 'How much subsidy will I get?',
    a: 'For a home the central subsidy is ₹30,000 for a 1 kW plant, ₹60,000 for 2 kW and ₹78,000 for 3 kW or bigger. Housing societies get ₹18,000 per kW for common areas, up to 500 kW. The final amount is approved by the government after inspection, and some states add their own subsidy on top.',
  },
  {
    q: 'Who handles the subsidy and net meter paperwork?',
    a: 'We do. That covers registration on the national rooftop solar portal, feasibility approval from your electricity board, the net meter application, the inspection visit and the subsidy claim, tracked until the money is credited.',
  },
  {
    q: 'What will my EMI be?',
    a: 'It depends on the plant size your bill needs. In our example, a home with a ₹3,000 monthly bill gets a 3 kW plant with an EMI of about ₹2,486 for five years. Use the calculator for your own bill; the site visit gives you the exact figure in writing.',
  },
  {
    q: 'What happens when the loan closes?',
    a: 'The plant is yours, debt-free. It keeps producing electricity for the rest of its 25-year warranty period, and the money that went to the EMI stays with you.',
  },
  {
    q: 'Will my electricity bill really be zero?',
    a: 'When your roof generates as many units as you use, the energy charges on the bill net off to zero. Fixed meter charges set by your electricity board still apply.',
  },
  {
    q: 'What if something stops working?',
    a: 'Call, WhatsApp or raise a ticket in the app. App and reading issues are fixed remotely. For a power failure or a drop in output, a technician comes to your roof, and inverter, wiring and panel faults are handled under warranty.',
  },
  {
    q: 'Is the site visit free?',
    a: 'Yes, and there is no obligation. An engineer measures your roof, checks shadows, structure and your meter connection, and gives you a written savings sheet.',
  },
]
