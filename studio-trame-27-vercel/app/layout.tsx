import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:"Studio Trame 27 — Architecture d'intérieur. Paris.",description:"Studio Trame 27 conçoit des intérieurs où chaque élément a une raison d'être là.",icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
