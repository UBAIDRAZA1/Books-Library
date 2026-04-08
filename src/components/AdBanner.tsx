'use client';

import { useEffect, useRef, useState } from 'react';

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
  const adPushed = useRef(false);
  const adClient = 'ca-pub-1934057767866276';

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && !adPushed.current) {
        // Load AdSense script if not already loaded
        if (!(window as any).adsbygoogle) {
          const script = document.createElement('script');
          script.async = true;
          script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`;
          script.crossOrigin = 'anonymous';
          document.head.appendChild(script);
        }

        // Push ad only once
        setTimeout(() => {
          (window as any).adsbygoogle = (window as any).adsbygoogle || [];
          (window as any).adsbygoogle.push({});
          adPushed.current = true;
          setIsLoaded(true);
        }, 100);
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, [adClient]);

  if (!isLoaded) {
    return (
      <div className={`ad-container ${className}`}>
        <div className="w-full h-24 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
          <span className="text-gray-400 text-sm">Loading ad...</span>
        </div>
      </div>
    );
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
