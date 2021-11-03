import { AppProps } from 'next/app';
// import './styles.less';
// import '../styles/global.less'
require('../styles/global.less');

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
