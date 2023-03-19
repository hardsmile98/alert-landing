import { Layout } from '@components/index';
import Main from 'screens/Main';

function Page() {
  return (
    <Layout
      title="SiteAlert | reliable site availability monitoring"
      description="Monitoring the availability of your site.
      Get error results immediately by mail, SMS or instant messengers"
    >
      <Main />
    </Layout>
  );
}

export default Page;
