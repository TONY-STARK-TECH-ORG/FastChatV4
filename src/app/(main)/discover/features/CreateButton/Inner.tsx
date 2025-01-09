import { Icon, Typography } from '@lobehub/ui';
import { Button, Divider, Tag } from 'antd';
import { Github, Settings, Share2 } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { AGENTS_INDEX_GITHUB } from '@/const/url';

const Inner = memo(() => {
  const { t } = useTranslation('discover');
  return (
    <Typography fontSize={14} headerMultiple={0.5} marginMultiple={0.4}>
      <h3>
        <Tag color={'cyan'}>{t('createGuide.func1.tag')}</Tag>
        <span>{t('createGuide.func1.title')}</span>
      </h3>
      <p>
        <kbd>
          <Icon icon={Settings} />
        </kbd>
        {t('createGuide.func1.desc1')}
        <br />
        <kbd>
          <Icon icon={Share2} />
        </kbd>
        {t('createGuide.func1.desc2')}
      </p>
      <Divider />
      <h3>
        <Tag color={'cyan'}>{t('createGuide.func2.tag')}</Tag>
        <span>{t('createGuide.func2.title')}</span>
      </h3>
      <p>{t('createGuide.func2.desc')}</p>
      <br />
      <Button
        icon={<Icon icon={Github} />}
        onClick={() => window.open(AGENTS_INDEX_GITHUB, '__blank')}
        type={'primary'}
      >
        {t('createGuide.func2.button')}
      </Button>
    </Typography>
  );
});

export default Inner;
