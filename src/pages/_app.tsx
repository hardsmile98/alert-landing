import '../styles/normalize.css';
import '../styles/global.css';
import { YMInitializer } from 'react-yandex-metrika';
import type { AppProps } from 'next/app';

const YANDEX_ID = Number(process.env.NEXT_PUBLIC_YANDEX_ID);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {!!YANDEX_ID && (
        <YMInitializer
          accounts={[YANDEX_ID]}
          options={{
            webvisor: true,
            defer: true,
          }}
          version="2"
        />
      )}

      <Component {...pageProps} />
    </>
  );
}
