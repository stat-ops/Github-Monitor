import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import { FormattedMessage } from 'umi/locale';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'github',
          title: <Icon type="github" />,
          href: 'https://github.com/stat-ops/Github-Monitor',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2019 TTPAI -{' '}
          <FormattedMessage id="login.footer.security-center" />
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
