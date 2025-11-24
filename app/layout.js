import './globals.css'
import './layout.css'

export const metadata = {
  title: 'Pharma - Online Pharmacy Store',
  description: 'Welcome to Pharma - Your trusted pharmacy for supplements, vitamins, and health products',
  charset: 'utf-8'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Rubik:400,700|Crimson+Text:400,400i" rel="stylesheet" />
        <link rel="stylesheet" href="/fonts/icomoon/style.css" />
      </head>
      <body>
        <div className="site-wrap">
          {children}
        </div>
      </body>
    </html>
  )
}
