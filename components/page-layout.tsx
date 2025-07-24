import Footer from '@/components/footer'
import Header from '@/components/header'

interface PageLayoutProps {
    children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}