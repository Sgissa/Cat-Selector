import '@/styles/globals.css';
import 'semantic-ui-css/semantic.css';
import { Menu, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import { AppProvider } from '@/useHooks/useAppState'

export default function App({ Component, pageProps }) {
  return(
    <AppProvider>
    <Menu>
      <Menu.Item as={Link} href='/'>
        <Icon name='home'/>
        Home
      </Menu.Item>
      <Menu.Item as={Link} href='/gallery'>
      <Icon name='zip'/>
        Gallery
      </Menu.Item>
    </Menu>
    <Component {...pageProps} />
    </AppProvider>
  );
}