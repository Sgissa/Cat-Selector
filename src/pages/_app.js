import '@/styles/globals.css';
import 'semantic-ui-css/semantic.css';
import { Menu, Icon } from 'semantic-ui-react';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return(
    <>
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
    </>
  );
  
  
}
