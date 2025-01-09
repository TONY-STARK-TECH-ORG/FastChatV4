'use client';

import { SiDiscord, SiGithub, SiMedium, SiRss, SiX } from '@icons-pack/react-simple-icons';
import { Form } from '@lobehub/ui';
import { Divider } from 'antd';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { BRANDING_NAME } from '@/const/branding';
import {
  BLOG,
  DISCORD,
  EMAIL_BUSINESS,
  EMAIL_SUPPORT,
  GITHUB,
  MEDIDUM,
  OFFICIAL_SITE,
  PRIVACY_URL,
  TERMS_URL,
  X,
  mailTo,
} from '@/const/url';
import { useServerConfigStore } from '@/store/serverConfig';
import { serverConfigSelectors } from '@/store/serverConfig/selectors';

import AboutList from './features/AboutList';
import Analytics from './features/Analytics';
import ItemLink from './features/ItemLink';

const useStyles = createStyles(({ css, token }) => ({
  title: css`
    font-size: 14px;
    font-weight: bold;
    color: ${token.colorTextSecondary};
  `,
}));

const Page = memo<{ mobile?: boolean }>(({ mobile }) => {
  const { t } = useTranslation('common');
  const enabledTelemetryChat = useServerConfigStore(serverConfigSelectors.enabledTelemetryChat);

  return (
    <>
      <Form.Group
        style={{ width: '100%' }}
        title={`${t('about')} ${BRANDING_NAME}`}
        variant={'pure'}
      >
        <Flexbox gap={20} paddingBlock={20} width={'100%'}>
          <AboutList
            ItemRender={ItemLink}
            items={[
              {
                href: 'https://fastx-ai.com',
                label: t('officialSite'),
                value: 'officialSite',
              },
              {
                href: mailTo('x.stark.dylan@gmail.com'),
                label: t('mail.support'),
                value: 'support',
              },
              {
                href: mailTo('x.stark.dylan@gmail.com'),
                label: t('mail.business'),
                value: 'business',
              },
            ]}
          />
        </Flexbox>
      </Form.Group>
      {enabledTelemetryChat && <Analytics />}
    </>
  );
});

Page.displayName = 'AboutSetting';

export default Page;
