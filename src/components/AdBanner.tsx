'use client';

import { useEffect, useState } from 'react';

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

  const [isLoaded, setIsLoaded] = useState(false);
  const adClient = 'ca-pub-1934057767866276'; // Your AdSense Publisher ID (ca- prefix is automatic)

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        // Load AdSense script if not already loaded
        if (!(window as any).adsbygoogle) {
          const script = document.createElement('script');
          script.async = true;
          script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`;
          script.crossOrigin = 'anonymous';
          document.head.appendChild(script);
        }

        // Push ad after script loads
        setTimeout(() => {
          (window as any).adsbygoogle = (window as any).adsbygoogle || [];
          (window as any).adsbygoogle.push({});
          setIsLoaded(true);
        }, 100);
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, [adSlot, adClient]);

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
