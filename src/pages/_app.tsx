import '@/styles/globals.css'
import StoreProvider from '@/Utils/store'
import { store } from '@/Redux/store';
import { Provider } from 'react-redux';
// import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
// import Layout2 from '@/Components/Layout2';
import Layout2 from '@/Components/Layout';
import AdminLayout from '@/Components/Admin/AdminLayout';
import RegiLayout from '@/Components/Regi/RegiLayout';
import RadiEchoLayout from '@/Components/Radi/RadiEchoLayout';
import RadiXrayLayout from '@/Components/Radi/RadiXrayLayout';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  
  return <StoreProvider>
    <>
      {router.pathname.startsWith('/Administration') ? (
        <AdminLayout>
          <Component {...pageProps}  />
        </AdminLayout>
      ) : router.pathname.startsWith('/Radiology/Echo') ? (
        <RadiEchoLayout>
          <Component {...pageProps}  />
        </RadiEchoLayout>
      ) : router.pathname.startsWith('/Radiology/Xray') ? (
        <RadiXrayLayout>
          <Component {...pageProps}  />
        </RadiXrayLayout>
      ) : router.pathname.startsWith('/Registration') ? (
        <RegiLayout>
          <Component {...pageProps}  />
        </RegiLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  </StoreProvider>
}

export default App;