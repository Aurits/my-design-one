"use client"

import { Button } from "@/components/ui/button"
import { Menu, Phone, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { href: "/", label: "ホーム" },
        { href: "/about", label: "AEGIS LLPについて" },
        { href: "/services", label: "サービス" },
        { href: "/projects", label: "プロジェクト" },
        { href: "/technology", label: "技術・DX" },
        { href: "/contact", label: "お問い合わせ" },
    ]

    // Close mobile menu when clicking outside or on escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setMobileMenuOpen(false)
            }
        }

        if (mobileMenuOpen) {
            document.addEventListener("keydown", handleEscape)
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = "unset"
        }
    }, [mobileMenuOpen])

    return (
        <>
            <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a href="/" className="text-xl sm:text-2xl font-bold text-black">
                            AEGIS LLP
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={`text-gray-700 hover:text-black transition-colors ${pathname === item.href ? "border-b-2 border-[#0891b2] pb-1" : ""
                                        }`}
                                >
                                    <div className="text-center">
                                        <div className="text-sm font-medium">{item.label}</div>
                                    </div>
                                </a>
                            ))}
                        </nav>

                        {/* Right side */}
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            {/* Phone - Hidden on mobile */}
                            <div className="hidden md:flex items-center text-sm text-gray-700">
                                <Phone className="w-4 h-4 mr-1" />
                                <span className="hidden lg:inline">TEL: </span>03-1234-5678
                            </div>

                            {/* Contact Button - Hidden on mobile */}
                            <Button className="hidden sm:block bg-[#0891b2] hover:bg-[#0891b2]/90 text-white text-sm px-4 py-2 transition-all hover:shadow-lg">
                                お問い合わせ
                            </Button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                className="lg:hidden p-2 text-gray-700 hover:text-black transition-colors"
                                aria-label="Open menu"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)} />
                    <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl">
                        <div className="flex items-center justify-between p-4 border-b border-gray-100">
                            <div className="text-xl font-bold text-black">AEGIS LLP</div>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 text-gray-700 hover:text-black transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <nav className="p-4">
                            <div className="space-y-4">
                                {navItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className={`block py-3 px-4 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors ${pathname === item.href ? "border-l-4 border-[#0891b2]" : ""
                                            }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <div className="font-medium">{item.label}</div>
                                    </a>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <Button
                                    className="w-full bg-[#0891b2] hover:bg-[#0891b2]/90 text-white mb-4"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    お問い合わせ
                                </Button>
                                <div className="flex items-center justify-center text-sm text-gray-700">
                                    <Phone className="w-4 h-4 mr-2" />
                                    TEL: 03-1234-5678
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}