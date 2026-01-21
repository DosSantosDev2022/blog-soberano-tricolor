'use client';

import { useEffect } from 'react';

type AdBannerProps = {
  dataAdSlot: string;
  dataAdFormat?: string;
  dataFullWidthResponsive?: boolean;
};

const AdBanner = ({
  dataAdSlot,
  dataAdFormat = 'auto',
  dataFullWidthResponsive = true,
}: AdBannerProps) => {
  useEffect(() => {
    try {
      // Verifica se o objeto adsbygoogle existe e empurra um novo anúncio
      // @ts-ignore (Ignoramos o erro de tipagem aqui pois o adsbygoogle é injetado externamente)
      // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('Erro ao carregar AdSense:', err);
    }
  }, []);

  return (
    <div style={{ overflow: 'hidden', minHeight: '100px', margin: '20px 0' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_PID}
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive}
      />
    </div>
  );
};

export { AdBanner };