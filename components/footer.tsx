import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Clock,
    Download,
    FileText,
    Headphones,
    Linkedin,
    Mail,
    Twitter,
    Users,
} from "lucide-react"

export default function Footer() {
    const footerContent = {
        company: {
            title: "会社情報",
            mission: "地方自治体のデジタル変革を支援し、より良い社会の実現に貢献します。",
            certifications: "品質認証・受賞歴",
        },
        services: {
            title: "サービス・ソリューション",
            links: ["デジタル変革支援", "インフラ設計", "コンサルティング", "技術サポート", "研修・教育"],
            resources: "ホワイトペーパー・資料",
        },
        quickAccess: {
            title: "クイックアクセス・リソース",
            links: ["プロジェクト事例", "ニュース・インサイト", "キャリア情報", "ダウンロードセンター", "よくある質問"],
        },
        contactInfo: {
            title: "お問い合わせ・拠点情報",
            headquarters: "本社",
            address: "東京都千代田区丸の内1-1-1",
            businessHours: {
                title: "営業時間",
                weekdays: "平日: 9:00 - 17:00",
                saturday: "土曜: 9:00 - 12:00 (緊急対応のみ)",
                holiday: "日祝: 休業",
                emergency: "24時間緊急サポート",
                emergencyDesc: "既存顧客向け技術サポート",
                emergencyTel: "03-1234-5679",
            },
        },
        newsletter: "ニュースレター登録",
        legal: "プライバシーポリシー",
        sitemap: "サイトマップ",
    }

    return (
        <footer className="bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: Company Information */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="text-2xl font-bold mb-4">AEGIS LLP</div>
                        <p className="text-gray-400 text-sm mb-6">{footerContent.company.mission}</p>

                        {/* Social Media Links */}
                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="text-sm text-gray-400">
                            <div className="font-semibold mb-2">{footerContent.company.certifications}</div>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-800 px-2 py-1 text-xs">ISO27001</span>
                                <span className="bg-gray-800 px-2 py-1 text-xs">ISMS</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Services & Solutions */}
                    <div>
                        <h3 className="font-semibold mb-4">{footerContent.services.title}</h3>
                        <ul className="space-y-2 text-sm text-gray-400 mb-6">
                            {footerContent.services.links.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="hover:text-white transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="text-sm">
                            <div className="font-semibold text-white mb-2">{footerContent.services.resources}</div>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                                <Download className="w-4 h-4 mr-1" />
                                資料ダウンロード
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Quick Access & Resources */}
                    <div>
                        <h3 className="font-semibold mb-4">{footerContent.quickAccess.title}</h3>
                        <ul className="space-y-2 text-sm text-gray-400 mb-6">
                            {footerContent.quickAccess.links.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="hover:text-white transition-colors flex items-center">
                                        {index === 0 && <FileText className="w-4 h-4 mr-2" />}
                                        {index === 2 && <Users className="w-4 h-4 mr-2" />}
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Newsletter Signup */}
                        <div className="bg-gray-900 p-4">
                            <div className="font-semibold mb-2">{footerContent.newsletter}</div>
                            <div className="flex">
                                <Input
                                    type="email"
                                    placeholder="メールアドレス"
                                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 text-sm"
                                />
                                <Button className="ml-2 bg-[#0891b2] hover:bg-[#0891b2]/90">
                                    <Mail className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Contact & Locations */}
                    <div>
                        <h3 className="font-semibold mb-4">{footerContent.contactInfo.title}</h3>

                        {/* Business Hours Card */}
                        <div className="bg-gray-900 p-4 mb-4">
                            <h4 className="font-semibold mb-3 flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                {footerContent.contactInfo.businessHours.title}
                            </h4>
                            <div className="space-y-1 text-sm text-gray-400">
                                <div className="flex justify-between">
                                    <span>平日:</span>
                                    <span>9:00 - 17:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>土曜:</span>
                                    <span>9:00 - 12:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>日祝:</span>
                                    <span>休業</span>
                                </div>
                            </div>
                        </div>

                        {/* Emergency Support */}
                        <div className="bg-[#0891b2] p-4">
                            <h5 className="font-semibold mb-2 flex items-center">
                                <Headphones className="w-4 h-4 mr-2" />
                                {footerContent.contactInfo.businessHours.emergency}
                            </h5>
                            <div className="text-sm">
                                <div className="mb-1">{footerContent.contactInfo.businessHours.emergencyDesc}</div>
                                <div className="font-semibold">TEL: {footerContent.contactInfo.businessHours.emergencyTel}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <div className="text-sm text-gray-400 mb-4 sm:mb-0">
                            © 2024 AEGIS LLP. All rights reserved.
                        </div>

                        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
                            <a href="/privacy-policy" className="hover:text-white transition-colors">
                                {footerContent.legal}
                            </a>
                            <a href="/sitemap" className="hover:text-white transition-colors">
                                {footerContent.sitemap}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}