'use client';

import { useEffect } from 'react';

interface AdBannerProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  adLayout?: 'in-article' | 'in-feed' | 'multiplex';
  className?: string;
}

export default function AdBanner({ 
  adSlot, 
  adFormat = 'auto',
  adLayout,
  className = '' 
}: AdBannerProps) {
  
  const adClient = process.env.NEXT_PUBLIC_ADSENSE_ID || '';

  useEffect(() => {
    try {
      if (typeof window !== undefined && adClient) {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, [adClient]);

  if (!adClient) {
    return null; // Don't show if AdSense ID not configured
  }

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout-key={adLayout}
        data-full-width-responsive="true"
      />
    </div>
  );
}
