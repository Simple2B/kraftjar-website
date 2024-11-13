'use client';

import { useEffect } from 'react';


const APP_SCHEME = 'kraftjar'
const SPECIALIST_PATH = 'specialist'

interface SpecialistRedirectProps {
  params: {
    id: string;
  };
}

export default function SpecialistRedirect({ params }: SpecialistRedirectProps) {
  const { id } = params;

  useEffect(() => {
    if (!id) return;

    const deepLinkUrl = `${APP_SCHEME}://${SPECIALIST_PATH}/${id}`;

    // TODO: Replace these URL with the actual app store URL
    const appStoreUrl = 'https://apps.apple.com/app/your-app-id';
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=net.kraftjar.app';

    // Attempt to open the app using the deep link
    window.location.href = deepLinkUrl;

    // Fallback to the app store if the app is not installed
    const timer = setTimeout(() => {
      if (/android/i.test(navigator.userAgent)) {
        window.location.href = playStoreUrl;
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href = appStoreUrl;
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  return <p className='w-full justify-center items-center text-center text-2xl py-6'>Redirecting to the app...</p>;
}
