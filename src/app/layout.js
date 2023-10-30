import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { PrimeReactProvider } from 'primereact/api';

export const metadata = {
  title: 'Karadagdayer Panel',
  description: 'Created by Ege Yapıcı',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrimeReactProvider>
          {children}
          <ToastContainer />
        </PrimeReactProvider>
      </body>
    </html>
  )
}
