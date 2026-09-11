import type {Metadata} from 'next';import './globals.css';
import {Analytics} from '@vercel/analytics/next';
export const metadata:Metadata={title:"Studio Trame 27 — Architecture d'intérieur. Paris.",description:"Studio Trame 27 conçoit des intérieurs où chaque élément a une raison d'être là.",icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}<Analytics /></body></html>}
