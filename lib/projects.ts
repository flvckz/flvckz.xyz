export type Project = {
  slug: string
  name: string
  description: string
  techStack: string[]
  date: string
  type: string
  client?: string
  url?: string
  images: { src: string; alt: string }[]
}

export const projects: Project[] = [
  {
    slug: 'polygram',
    name: 'Polygram',
    description: 'Polymarket integrated Telegram Bot - WIP',
    techStack: ['TypeScript', 'Node.js', 'Telegram Bot API'],
    date: '2025',
    type: 'bot',
    client: 'Personal',
    url: 'https://github.com/flvckz/polygram',
    images: [
      { src: '/polygram-banner.png', alt: 'Polygram preview' },
      { src: '/placeholder.jpg', alt: 'Polygram screenshot 2' },
      { src: '/placeholder.jpg', alt: 'Polygram screenshot 3' },
    ],
  },
  {
    slug: 'asterstrategy',
    name: 'AsterStrategy',
    description: 'Web3 Token Treasury @ asterstrategy.org',
    techStack: ['Docs', 'Gitbook', 'Web3'],
    date: '2025',
    type: 'documentation',
    client: 'AsterStrategy',
    url: 'https://aster-strategy.gitbook.io/asterstrategy-docs/WJ8wnrTo3CVgyulPgXC6',
    images: [
      { src: '/placeholder.jpg', alt: 'AsterStrategy docs 1' },
      { src: '/placeholder.jpg', alt: 'AsterStrategy docs 2' },
    ],
  },
  {
    slug: 'park-it',
    name: 'Park-It',
    description: 'Native Android App @ ORT Labs',
    techStack: ['Java', 'Android'],
    date: '2021–2022',
    type: 'mobile',
    client: 'ORT Labs',
    url: 'https://github.com/flvckz/park-it-finalversion',
    images: [
      { src: '/placeholder.jpg', alt: 'Park-It screen 1' },
      { src: '/placeholder.jpg', alt: 'Park-It screen 2' },
    ],
  },
  {
    slug: 'placey',
    name: 'Placey',
    description: 'Web3 Lands Space backed by Decentraland',
    techStack: ['Figma', 'Product Design', 'Web3'],
    date: '2022–2023',
    type: 'design',
    client: 'Placey',
    url: 'https://www.figma.com/proto/5mwdl5uOm7aQ02IeK4ZwzD/Placey-Landing-Page?node-id=0-1&p=f&t=G8VvS7LUYFBpoLse-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    images: [
      { src: '/placeholder.jpg', alt: 'Placey preview 1' },
      { src: '/placeholder.jpg', alt: 'Placey preview 2' },
    ],
  },
  {
    slug: 're-landing',
    name: 'RE Landing',
    description: 'Landing Page for RE Business @ Aptimia',
    techStack: ['Figma', 'UI/UX'],
    date: '2023',
    type: 'design',
    client: 'Aptimia',
    url: 'https://www.figma.com/proto/nu0yPkjvf4tCbseICysLHD/Real-Estate-Landing-1?node-id=3-27&starting-point-node-id=3%3A27&t=XOTOC5cGIl8twJrp-1',
    images: [
      { src: '/placeholder.jpg', alt: 'RE Landing preview 1' },
      { src: '/placeholder.jpg', alt: 'RE Landing preview 2' },
    ],
  },
  {
    slug: 'unique-bikes',
    name: 'Nazko Unique Bikes',
    description: 'Landing for Nazo Unique Bikes @ Aptimia',
    techStack: ['Figma', 'UI/UX'],
    date: '2023',
    type: 'design',
    client: 'Aptimia',
    url: 'https://www.figma.com/proto/hDeftHJnAYJON0EqC1Zvxr/UNIQUE-BIKES--Community-?node-id=1-1038&p=f&t=RUdNptxxAFTT1Ib9-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A519',
    images: [
      { src: '/placeholder.jpg', alt: 'Unique Bikes preview 1' },
      { src: '/placeholder.jpg', alt: 'Unique Bikes preview 2' },
    ],
  },
  {
    slug: 'adopt-a-dog',
    name: 'Adopt-a-Dog',
    description: 'SaaS @ ORT Labs',
    techStack: ['Figma', 'UI/UX'],
    date: '2023',
    type: 'web',
    client: 'ORT Labs',
    url: 'https://github.com/flvckz/parcial-tp3',
    images: [
      { src: '/placeholder.jpg', alt: 'Adopt-a-Dog preview 1' },
      { src: '/placeholder.jpg', alt: 'Adopt-a-Dog preview 2' },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug.toLowerCase() === slug.toLowerCase())
}

export function getNextProjectSlug(slug: string): string | undefined {
  const index = projects.findIndex((p) => p.slug.toLowerCase() === slug.toLowerCase())
  if (index === -1) return undefined
  const nextIndex = (index + 1) % projects.length
  return projects[nextIndex].slug
}