'use client';

import { ChatHeader } from '@lobehub/ui/chat';
import Link from 'next/link';
import { memo } from 'react';

import { ProductLogo } from '@/components/Branding';

import StoreSearchBar from '../../features/StoreSearchBar';

const Header = memo(() => {
  return (
    <ChatHeader
      left={
        <Link href={'/discover'} style={{ color: 'inherit' }}>
          <ProductLogo extra={'Discover'} size={36} type={'text'} />
        </Link>
      }
      style={{
        position: 'relative',
        zIndex: 10,
      }}
      styles={{
        center: { flex: 1, maxWidth: 1440 },
        left: { flex: 1, maxWidth: 240 },
        right: { flex: 1, maxWidth: 240 },
      }}
    >
      <StoreSearchBar />
    </ChatHeader>
  );
});

export default Header;
