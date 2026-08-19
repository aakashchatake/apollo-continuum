/* Central public registry. Update a destination here, not across page templates. */
window.ApolloRegistry = {
  initiatives: [
    { id: 'apollo', name: 'Apollo', type: 'foundation', status: 'historical-and-current', description: 'The umbrella identity and long-term foundation.' },
    { id: 'agriverse', name: 'Apollo AgriVerse', type: 'world', parent: 'apollo', status: 'development', description: 'Agriculture and livestock intelligence.' },
    { id: 'robotics', name: 'Apollo Robotics', type: 'world', parent: 'apollo', status: 'development', description: 'Autonomous and intelligent systems.' },
    { id: 'production', name: 'Apollo Production', type: 'creation', parent: 'apollo', status: 'active-property', description: 'Creative production and future works.' },
    { id: 'ijaie', name: 'IJAIE', type: 'publication', parent: 'apollo', status: 'historical-public', description: 'A distinct historical publication relationship.' },
    { id: 'phase-one', name: 'Apollo Phase I', type: 'research-archive', parent: 'apollo', status: 'historical-research', description: 'The documented early research, prototype and publication-development record behind Apollo AgriVerse.' }
  ],
  projects: [
    {
      id: 'agriintel', name: 'Apollo AgriIntel', parent: 'agriverse', category: 'Agricultural intelligence',
      status: 'prototype', evidence: 'Legacy research, architecture and current project representation.',
      description: 'A research-to-system direction for sensing, crop intelligence and decision support.',
      links: { application: 'https://mindforgeai.co.in/projects/apollo-agrintel/application/' }
    },
    {
      id: 'pashusense', name: 'Apollo PashuSense', parent: 'agriverse', category: 'Livestock intelligence',
      status: 'blueprint', evidence: 'Canonical master blueprint input; not treated as deployed production.',
      description: 'A proposed Apollo AgriVerse programme for livestock intelligence.',
      links: { application: 'https://mindforgeai.co.in/projects/apollo-pashusense/application/' }
    },
    {
      id: 'argus', name: 'ARGUS', parent: 'robotics', category: 'Robotics',
      status: 'prototype', evidence: 'Current MindforgeAI representation and Apollo robotics references.',
      description: 'Apollo Robotics research into autonomous, simulated and intelligent robotic systems.',
      links: { application: 'https://mindforgeai.co.in/projects/argus/application/' }
    },
    {
      id: 'intelligent-soil', name: 'Intelligent Soil', parent: 'agriverse', category: 'Soil systems',
      status: 'simulated', evidence: '2026 expansion materials and digital-twin prototypes.',
      description: 'A current AgriVerse expansion for soil intelligence, hydrogels and simulated farm systems.',
      links: { application: 'http://127.0.0.1:8082/04_DASHBOARD_AND_EXPERIENCE/01_Web_Dashboard/apollo_digital_twin_v0_7_LOCKED_FULL_FARM_COMMAND_20260803.html#field' }
    },
    {
      id: 'harvest-shield', name: 'Apollo: Harvest Shield', parent: 'agriverse', category: 'Guided innovation',
      status: 'concept', evidence: 'SIH 2025 abstract: Team Neural Harvesters, PS 25099.',
      description: 'A guided SIH agriculture concept for sensor and imaging based crop-health monitoring.',
      links: { local: '../innovation/sih/' }
    },
    {
      id: 'origin', name: 'ORIGIN', parent: 'production', category: 'Film and literary property',
      status: 'active-property', evidence: 'Apollo Production canonical property files.',
      description: 'A creative property under Apollo Production.',
      links: { local: '../production/' }
    }
  ],
  people: {
    currentStewardship: [
      { name: 'Akash Shivadas Chatake', role: 'Creator and current Apollo stewardship', evidence: 'Apollo 3.0 workspace control record.' }
    ],
    phaseOneApolloAgriGuard: [
      { name: 'Aarthika Anil Birajdar', role: 'Group Leader', evidence: 'Apollo AgriGuard / DIPEX 2026 project report.' },
      { name: 'Vaishnavi Dhuttarge', role: 'IoT & Sensors', evidence: 'Apollo AgriGuard / DIPEX 2026 project report.' },
      { name: 'Anuja Gurav', role: 'Robotics / ROS', evidence: 'Apollo AgriGuard / DIPEX 2026 project report.' },
      { name: 'Siddheshwari Degaonkar', role: 'Frontend', evidence: 'Apollo Krishi Rakshak Phase 4 portal and Apollo AgriGuard records.' },
      { name: 'Sharvari Garad', role: 'Research & Database', evidence: 'Apollo AgriGuard / DIPEX 2026 project report.' },
      { name: 'Ojausvi Bhave', role: 'Database Management', evidence: 'Apollo AgriGuard / DIPEX 2026 project report.' }
    ],
    ijaieEditorialRecord: [
      { name: 'Dr. Dipti Jadhav', role: 'Editor-in-Chief', evidence: 'IJAIE editorial leadership source.' },
      { name: 'Priyanka R. Patil', role: 'Academic Outreach Coordinator', evidence: 'IJAIE editorial office source.' },
      { name: 'Aarthika Anil Birajdar', role: 'Research & Editorial Associate', evidence: 'IJAIE editorial office source.' }
    ]
  }
};
