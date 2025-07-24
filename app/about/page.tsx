import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Award, Building, ChevronRight, Shield, Target, TrendingUp, Users } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
    const timeline = [
        { year: "2020年", event: "AEGIS LLP設立", highlight: "創業" },
        { year: "2021年", event: "初の大型プロジェクト受注", highlight: "成長" },
        { year: "2022年", event: "メンバー企業9社体制確立", highlight: "拡大" },
        { year: "2023年", event: "DX専門チーム発足", highlight: "進化" },
        { year: "2024年", event: "全国15拠点展開完了", highlight: "飛躍" },
    ]

    const values = [
        {
            icon: Target,
            title: "使命感",
            description: "地方自治体の課題解決を通じて、より良い社会の実現に貢献します",
        },
        {
            icon: Users,
            title: "協調性",
            description: "9社の専門性を結集し、総合的なソリューションを提供します",
        },
        {
            icon: Award,
            title: "誠実性",
            description: "お客様との信頼関係を第一に、透明性の高いサービスを提供します",
        },
        {
            icon: Building,
            title: "革新性",
            description: "最新技術を活用し、常に新しい価値を創造し続けます",
        },
    ]

    const teamMembers = [
        { name: "山田 太郎", title: "代表理事", image: "/placeholder.svg?height=150&width=150&text=Photo" },
        { name: "佐藤 花子", title: "技術統括責任者", image: "/placeholder.svg?height=150&width=150&text=Photo" },
        { name: "鈴木 一郎", title: "事業開発責任者", image: "/placeholder.svg?height=150&width=150&text=Photo" },
        { name: "田中 美香", title: "品質管理責任者", image: "/placeholder.svg?height=150&width=150&text=Photo" },
    ]

    const memberCompanies = Array.from({ length: 9 }, (_, i) => ({
        id: i + 1,
        name: `メンバー企業 ${i + 1}`,
        speciality: ["IT・システム開発", "インフラ設計", "コンサルティング", "データ分析", "セキュリティ", "クラウド", "AI・機械学習", "プロジェクト管理", "業務改革"][i],
        description: "専門分野での豊富な実績と技術力を持つパートナー企業",
        logo: "/placeholder.svg?height=60&width=120&text=Logo",
    }))

    const achievements = [
        { number: "50+", label: "完了プロジェクト", icon: Building },
        { number: "15", label: "自治体パートナー", icon: Users },
        { number: "99%", label: "顧客満足度", icon: Award },
        { number: "500+", label: "専門家集団", icon: Shield },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section with Video Background */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/sample.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                        About AEGIS LLP
                    </h1>
                    <p className="text-xl lg:text-2xl">
                        地方自治体のデジタル変革を支援する専門家集団
                    </p>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((item, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-20 h-20 bg-gray-100 mx-auto mb-4 flex items-center justify-center group-hover:bg-[#0891b2] transition-colors">
                                    <item.icon className="w-10 h-10 text-gray-700 group-hover:text-white transition-colors" />
                                </div>
                                <div className="text-4xl font-bold text-black mb-2">{item.number}</div>
                                <div className="text-gray-600">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LLP Explanation with Creative Layout */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#0891b2]/10"></div>
                            <div className="relative bg-white p-12 shadow-xl">
                                <h2 className="text-4xl font-bold text-black mb-8">
                                    LLP（有限責任事業組合）とは
                                </h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    AEGIS LLPは、経済産業省が推進する有限責任事業組合（LLP）として設立されました。
                                    LLPは、複数の企業や専門家が共同で事業を行うための新しい組織形態で、
                                    各メンバーの専門性を活かしながら、柔軟で効率的な事業運営が可能です。
                                </p>
                                <p className="text-lg text-gray-600 mb-8">
                                    私たちは、9社の専門企業が結集し、それぞれの強みを活かして
                                    地方自治体のデジタル変革を総合的に支援しています。
                                </p>
                                <Button className="bg-[#0891b2] hover:bg-[#0891b2]/90 text-white px-8 py-3">
                                    詳しく見る
                                </Button>
                            </div>
                        </div>

                        <div className="relative h-[500px]">
                            <Image
                                src="/placeholder.svg?height=600&width=800&text=LLP+Structure"
                                alt="LLP Structure"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover shadow-xl"
                            />
                            <div className="absolute bottom-8 right-8 bg-white p-6 shadow-xl max-w-xs">
                                <div className="text-3xl font-bold text-[#0891b2] mb-2">9社連携</div>
                                <p className="text-sm text-gray-600">
                                    それぞれの専門分野で最高のサービスを提供
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company History Timeline - Same flowchart style as homepage */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl sm:text-5xl font-bold text-black text-center mb-20">
                        AEGIS LLPの歩み
                    </h2>

                    {/* Desktop Timeline - Flowchart */}
                    <div className="hidden md:block relative">
                        <div className="max-w-6xl mx-auto">
                            <div className="relative">
                                {/* Continuous Horizontal Line */}
                                <div className="absolute top-[124px] left-[10%] right-[10%] h-0.5 bg-[#0891b2] z-0"></div>

                                {/* Arrow Positioning on Lines */}
                                {[0, 1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className="absolute top-[124px] z-20 bg-white px-1"
                                        style={{ left: `${20 + i * 20}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                                    >
                                        <ChevronRight className="w-5 h-5 text-[#0891b2]" />
                                    </div>
                                ))}

                                {/* Timeline Items */}
                                <div className="flex justify-between">
                                    {timeline.map((item, index) => (
                                        <div key={index} className="flex flex-col items-center" style={{ width: '20%' }}>
                                            <div className="text-center mb-2">
                                                <div className="text-2xl font-bold text-black">{item.year}</div>
                                                <div className="text-xs text-gray-500 mt-1">{item.highlight}</div>
                                            </div>

                                            <div className="w-0.5 h-6 bg-[#0891b2]"></div>

                                            <div className="w-20 h-20 bg-[#0891b2] flex items-center justify-center relative z-10">
                                                <div className="w-12 h-12 bg-white"></div>
                                            </div>

                                            <div className="w-0.5 h-10 bg-[#0891b2]"></div>

                                            <div className="bg-gray-50 p-4 text-center w-full">
                                                <p className="text-xs text-gray-700 leading-relaxed">
                                                    {item.event}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Timeline - Vertical */}
                    <div className="md:hidden">
                        <div className="space-y-8">
                            {timeline.map((item, index) => (
                                <div key={index} className="flex flex-col items-center relative">
                                    <div className="text-center mb-2">
                                        <div className="text-xl font-bold text-black">{item.year}</div>
                                        <div className="text-xs text-gray-500">{item.highlight}</div>
                                    </div>

                                    <div className="w-0.5 h-4 bg-[#0891b2]"></div>

                                    <div className="w-16 h-16 bg-[#0891b2] flex items-center justify-center">
                                        <div className="w-10 h-10 bg-white"></div>
                                    </div>

                                    <div className="w-0.5 h-4 bg-[#0891b2]"></div>

                                    <div className="bg-gray-50 p-4 text-center w-72">
                                        <p className="text-xs text-gray-700">{item.event}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision with Overlapping Design */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="relative">
                        {/* Mission */}
                        <div className="relative z-10 bg-white p-12 shadow-xl lg:w-2/3">
                            <h2 className="text-4xl font-bold text-black mb-6">
                                ミッション
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                「地方自治体のデジタル変革を通じて、市民の生活をより豊かに、
                                行政サービスをより効率的にし、持続可能な地域社会の実現に貢献する」
                            </p>
                        </div>

                        {/* Vision - Overlapping */}
                        <div className="relative lg:absolute lg:right-0 lg:top-20 bg-[#0891b2] text-white p-12 shadow-xl lg:w-2/3 mt-8 lg:mt-0">
                            <h2 className="text-4xl font-bold mb-6">
                                ビジョン
                            </h2>
                            <p className="text-xl leading-relaxed">
                                「日本全国の地方自治体が、最新のデジタル技術を活用して
                                世界に誇れる行政サービスを提供できる社会を実現する」
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values & Philosophy */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-black text-center mb-16">
                        私たちの価値観
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="relative group">
                                <div className="absolute inset-0 bg-[#0891b2] transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                <div className="relative bg-white border border-gray-200 p-8 hover:border-transparent transition-all">
                                    <div className="w-16 h-16 bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                                        <value.icon className="w-8 h-8 text-gray-700 group-hover:text-[#0891b2] transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-white transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 group-hover:text-white transition-colors">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team with Creative Layout */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-black text-center mb-16">
                        リーダーシップチーム
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="group">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={300}
                                        height={300}
                                        className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="bg-white p-6 -mt-4 relative shadow-lg">
                                    <h3 className="text-lg font-bold text-black mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-[#0891b2]">{member.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Member Companies Grid with Hover Effects */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 40px)`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-black mb-4">
                            グループメンバー企業
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            9社の専門企業が連携し、総合的なソリューションを提供しています
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {memberCompanies.map((company) => (
                            <div key={company.id} className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0891b2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative bg-white p-8 shadow-lg hover:shadow-2xl transition-all transform group-hover:-translate-y-1">
                                    <div className="h-16 mb-6 flex items-center justify-center bg-gray-50 group-hover:bg-white transition-colors">
                                        <Image
                                            src={company.logo}
                                            alt={company.name}
                                            width={120}
                                            height={60}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-black mb-2">
                                        {company.name}
                                    </h3>
                                    <div className="text-sm text-[#0891b2] font-semibold mb-3">
                                        {company.speciality}
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">
                                        {company.description}
                                    </p>
                                    <a href="#" className="inline-flex items-center text-black font-semibold hover:text-[#0891b2] transition-colors group">
                                        詳細を見る
                                        <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Philosophy with Video Background */}
            <section className="py-20 relative overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/sample.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-4xl font-bold mb-8">
                            パートナーシップの理念
                        </h2>
                        <p className="text-xl mb-8 leading-relaxed">
                            AEGIS LLPは、単なる企業の集合体ではありません。
                            各メンバー企業が持つ専門性と経験を有機的に結合させることで、
                            個々の企業では実現できない総合的なソリューションを提供しています。
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            <div className="bg-white/10 backdrop-blur p-8">
                                <TrendingUp className="w-12 h-12 text-[#0891b2] mb-4 mx-auto" />
                                <h3 className="text-xl font-bold mb-4">相乗効果</h3>
                                <p>多角的な視点からの課題分析と解決策の提案</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur p-8">
                                <Shield className="w-12 h-12 text-[#0891b2] mb-4 mx-auto" />
                                <h3 className="text-xl font-bold mb-4">継続的成長</h3>
                                <p>継続的な技術革新と知識共有による成長</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Corporate Information */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-black text-center mb-16">
                        会社情報
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white shadow-xl overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Left side - Key Info */}
                                <div className="bg-[#1a365d] text-white p-12">
                                    <h3 className="text-2xl font-bold mb-8">基本情報</h3>
                                    <dl className="space-y-4">
                                        <div>
                                            <dt className="text-gray-300 text-sm">設立</dt>
                                            <dd className="text-xl font-semibold">2020年4月1日</dd>
                                        </div>
                                        <div>
                                            <dt className="text-gray-300 text-sm">資本金</dt>
                                            <dd className="text-xl font-semibold">10億円</dd>
                                        </div>
                                        <div>
                                            <dt className="text-gray-300 text-sm">従業員数</dt>
                                            <dd className="text-xl font-semibold">500名（グループ全体）</dd>
                                        </div>
                                    </dl>
                                </div>

                                {/* Right side - Details */}
                                <div className="p-12">
                                    <dl className="space-y-6">
                                        <div>
                                            <dt className="font-bold text-black mb-2">組織名</dt>
                                            <dd className="text-gray-600">AEGIS有限責任事業組合（AEGIS LLP）</dd>
                                        </div>

                                        <div>
                                            <dt className="font-bold text-black mb-2">本社所在地</dt>
                                            <dd className="text-gray-600">〒100-0005 東京都千代田区丸の内1-1-1</dd>
                                        </div>

                                        <div>
                                            <dt className="font-bold text-black mb-2">代表理事</dt>
                                            <dd className="text-gray-600">山田 太郎</dd>
                                        </div>

                                        <div>
                                            <dt className="font-bold text-black mb-2">事業内容</dt>
                                            <dd className="text-gray-600">
                                                地方自治体向けデジタル変革支援事業<br />
                                                スマートシティ構築支援事業<br />
                                                公共セクターコンサルティング事業
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}