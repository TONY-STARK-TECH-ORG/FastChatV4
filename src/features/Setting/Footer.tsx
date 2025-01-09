'use client';

import { createStyles } from 'antd-style';
import { PropsWithChildren, memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

const useStyles = createStyles(
  ({ css, token }) => css`
    font-size: 12px;
    color: ${token.colorTextSecondary};
  `,
);

const Footer = memo<PropsWithChildren>(() => {
  const { styles } = useStyles();

  const { hideGitHub } = useServerConfigStore(featureFlagsSelectors);

  return hideGitHub ? null : (
    <Flexbox justify={'flex-end'}>
      <Center as={'footer'} className={styles} flex={'none'} horizontal padding={16} width={'100%'}>
        <div style={{ textAlign: 'center' }}>2020-2025 © 光子人工智能 & Lobe-Chat</div>
      </Center>
    </Flexbox>
  );
});

Footer.displayName = 'SettingFooter';

export default Footer;
