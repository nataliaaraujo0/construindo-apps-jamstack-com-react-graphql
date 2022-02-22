import { GetStaticProps } from 'next';

import { Features } from '~/components/Features';
import { Hero } from '~/components/Hero';
import { Pricing } from '~/components/Pricing';
import { PageDocument, usePageQuery } from '~/generated/graphql';
import { client, ssrCache } from '~/lib/urlql';

export default function Home() {
  const [{ data }] = usePageQuery({
    variables: {
      slug: 'home',
    },
  });

  return (
    <>
      <Hero title={data.page.title} subtitle={data.page.subtitle} />
      <Features />
      <Pricing />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  await client.query(PageDocument, { slug: 'home' }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};
