import { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  tags?: string[]
}

export function generateMetadata({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  tags,
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name
  const fullDescription = description || SITE_CONFIG.description
  const fullImage = image || SITE_CONFIG.ogImage
  const fullUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: tags?.join(', ') || 'portfolio, developer, fullstack, typescript, react, nextjs',
    authors: [{ name: author || 'Cutberto' }],
    creator: 'Cutberto',
    openGraph: {
      type,
      locale: 'es_ES',
      url: fullUrl,
      title: fullTitle,
      description: fullDescription,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
      creator: '@cutberto',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

export function generateJsonLd({
  title,
  description,
  image,
  url,
  type = 'WebSite',
  publishedTime,
  modifiedTime,
  author,
}: SEOProps & { type?: string } = {}) {
  const baseJsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title || SITE_CONFIG.name,
    description: description || SITE_CONFIG.description,
    url: url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url,
    ...(image && { image }),
    ...(author && { author: { '@type': 'Person', name: author } }),
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime }),
  }

  if (type === 'Person') {
    return {
      ...baseJsonLd,
      '@type': 'Person',
      jobTitle: 'Full-Stack Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance',
      },
      sameAs: [
        SITE_CONFIG.links.github,
        SITE_CONFIG.links.linkedin,
        SITE_CONFIG.links.twitter,
      ],
    }
  }

  if (type === 'CreativeWork') {
    return {
      ...baseJsonLd,
      '@type': 'CreativeWork',
      creator: {
        '@type': 'Person',
        name: author || 'Cutberto',
      },
    }
  }

  return baseJsonLd
}
