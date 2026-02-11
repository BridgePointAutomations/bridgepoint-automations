import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: 'website' | 'article' | 'profile';
    twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
    twitterSite?: string;
    twitterCreator?: string;
    noindex?: boolean;
    structuredData?: Record<string, any>; // Add support for JSON-LD
    children?: React.ReactNode;
}

export const SEO = ({
    title,
    description,
    canonical,
    keywords,
    ogImage = '/og-image.png',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    twitterSite = '@bridgepoint_auto',
    noindex = false,
    structuredData,
    children
}: SEOProps) => {
    const siteUrl = 'https://bridgepoint-automations.com';
    const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl;
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    return (
        <Helmet>
            <title>{title} | BridgePoint Automations</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={fullCanonical} />

            {noindex && <meta name="robots" content="noindex" />}

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:image" content={fullOgImage} />
            <meta property="og:site_name" content="BridgePoint Automations" />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullOgImage} />
            {twitterSite && <meta name="twitter:site" content={twitterSite} />}

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}

            {children}
        </Helmet>
    );
};
