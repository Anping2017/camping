import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NZ Camping - 新西兰露营管理系统',
  description: '新西兰露营地管理系统 - 为游客和营地主提供全方位的露营体验',
  keywords: '新西兰,露营,营地管理,DOC营地,假日公园,自由露营',
  authors: [{ name: 'NZ Camping Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://your-domain.com',
    siteName: 'NZ Camping',
    title: 'NZ Camping - 新西兰露营管理系统',
    description: '新西兰露营地管理系统 - 为游客和营地主提供全方位的露营体验',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NZ Camping',
      },
    ],
  },
}
