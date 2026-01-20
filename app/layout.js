import './globals.css';

export const metadata = {
    title: 'OffSide — Football Match Simulator & AI Prediction Platform',
    description: 'Replay historic matches with beautiful 2D visualization and use ML to predict upcoming game outcomes. Your football analytics studio on desktop.',
    keywords: 'football, soccer, match simulator, AI prediction, machine learning, analytics, StatsBomb',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </head>
            <body suppressHydrationWarning>{children}</body>
        </html>
    );
}
