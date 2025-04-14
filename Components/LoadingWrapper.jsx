// Components/LoadingWrapper.js
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Loading from '@/Components/Loading';

export default function LoadingWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if page content is loaded
    const checkContentLoaded = () => {
      if (document.readyState === 'complete') {
        setContentLoaded(true);
      } else {
        window.addEventListener('load', () => setContentLoaded(true));
      }
    };

    checkContentLoaded();

    // Set minimum loading time to match animation (7.5s total)
    const timer = setTimeout(() => {
      if (contentLoaded) {
        setIsLoading(false);
      }
    }, 5500);

    // If content loads faster than animation, wait for animation
    if (contentLoaded) {
      const contentReadyTimer = setTimeout(() => {
        setIsLoading(false);
      }, 5500);
      return () => clearTimeout(contentReadyTimer);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', () => setContentLoaded(true));
    };
  }, [pathname, searchParams, contentLoaded]);

  return (
    <>
      {isLoading && <Loading Position="fixed" />}
      <div>
        {children}
      </div>
    </>
  );
}