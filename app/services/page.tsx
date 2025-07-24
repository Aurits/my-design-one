"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import {
    BarChart,
    Brain,
    Building,
    CheckCircle,
    ChevronRight,
    Cloud,
    Cpu,
    Database,
    Settings,
    Shield,
    TrendingUp,
    Users,
    Zap
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ServicesPage() {
    const [activeService, setActiveService] = useState(0)

    const services = [
        {
            id: 0,
            name: "デジタル変革支援",
            shortDesc: "AI活用、業務自動化、市民向けアプリ開発",
            icon: Cpu,
            color: "from-[#0891b2] to-[#0e7490]",
            features: [
                "AI導入支援",
                "業務プロセス最適化",
                "システム統合",
                "市民向けアプリ開発",
            ],
            benefits: {
                efficiency: "30%",
                satisfaction: "95%",
                time: "50%",
            },
            process: [
                { step: "現状分析", desc: "業務フローと課題の詳細調査" },
                { step: "戦略策定", desc: "最適なソリューションの設計" },
                { step: "システム実装", desc: "段階的な導入と検証" },
                { step: "運用支援", desc: "継続的な改善と最適化" },
            ],
            technologies: [
                { name: "機械学習", icon: Brain },
                { name: "クラウド", icon: Cloud },
                { name: "データ分析", icon: Database },
                { name: "自動化", icon: Settings },
            ],
            case: {
                client: "A市",
                challenge: "窓口業務の効率化と市民サービス向上",
                solution: "AI チャットボットと業務自動化システムの導入",
                results: [
                    "窓口待ち時間 70% 削減",
                    "職員の事務作業時間 50% 削減",
                    "市民満足度 95% 達成",
                ],
            },
        },
        {
            id: 1,
            name: "インフラ計画・設計",
            shortDesc: "スマートシティ、IoTセンサー網、データ基盤",
            icon: Building,
            color: "from-[#1a365d] to-[#1e3a8a]",
            features: [
                "スマートシティ設計",
                "IoTセンサーネットワーク",
                "データ統合基盤",
                "リアルタイム監視",
            ],
            benefits: {
                cost: "25%",
                monitoring: "24/7",
                coverage: "100%",
            },
            process: [
                { step: "要件定義", desc: "インフラニーズの詳細分析" },
                { step: "設計・計画", desc: "最適なアーキテクチャ設計" },
                { step: "基盤構築", desc: "段階的なインフラ展開" },
                { step: "運用最適化", desc: "継続的な監視と改善" },
            ],
            technologies: [
                { name: "IoT", icon: Zap },
                { name: "5G", icon: Settings },
                { name: "エッジ", icon: Database },
                { name: "AI分析", icon: Brain },
            ],
            case: {
                client: "B県",
                challenge: "広域にわたるインフラの効率的管理",
                solution: "IoTセンサーと統合管理システムの構築",
                results: [
                    "保守コスト 35% 削減",
                    "障害検知時間 80% 短縮",
                    "稼働率 99.9% 達成",
                ],
            },
        },
        {
            id: 2,
            name: "公共セクターコンサルティング",
            shortDesc: "政策立案、制度設計、効果測定",
            icon: BarChart,
            color: "from-[#64748b] to-[#475569]",
            features: [
                "政策分析・立案支援",
                "KPI設計・管理",
                "効果測定・評価",
                "組織変革支援",
            ],
            benefits: {
                decision: "2x",
                accuracy: "90%",
                roi: "150%",
            },
            process: [
                { step: "課題分析", desc: "現状の詳細な調査分析" },
                { step: "戦略立案", desc: "エビデンスベースの政策設計" },
                { step: "実行支援", desc: "段階的な施策展開" },
                { step: "効果検証", desc: "定量的な成果測定" },
            ],
            technologies: [
                { name: "ビッグデータ", icon: Database },
                { name: "予測分析", icon: TrendingUp },
                { name: "可視化", icon: BarChart },
                { name: "シミュレーション", icon: Brain },
            ],
            case: {
                client: "C市",
                challenge: "地域活性化政策の効果的な立案と実行",
                solution: "データドリブンな政策立案プロセスの構築",
                results: [
                    "政策立案期間 50% 短縮",
                    "市民参加率 200% 向上",
                    "地域経済効果 15% 増加",
                ],
            },
        },
    ]

    const serviceMetrics = [
        { number: "50+", label: "導入実績", icon: Building },
        { number: "30%", label: "平均コスト削減", icon: TrendingUp },
        { number: "95%", label: "顧客満足度", icon: Users },
        { number: "24/7", label: "サポート体制", icon: Shield },
    ]

    const methodology = [
        {
            phase: "分析",
            description: "現状の詳細な調査と課題の特定",
            duration: "2-4週間",
            deliverables: ["現状分析レポート", "課題定義書", "要件定義書"],
        },
        {
            phase: "設計",
            description: "最適なソリューションの設計と計画",
            duration: "4-6週間",
            deliverables: ["システム設計書", "実装計画書", "リスク評価書"],
        },
        {
            phase: "実装",
            description: "段階的な導入と継続的な検証",
            duration: "3-6ヶ月",
            deliverables: ["導入マニュアル", "運用手順書", "検証レポート"],
        },
        {
            phase: "運用",
            description: "継続的な改善と最適化",
            duration: "継続",
            deliverables: ["月次レポート", "改善提案書", "成果報告書"],
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section with Split Design */}
            <section className="relative min-h-[600px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-black mb-6">
                                サービス
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                最新技術と豊富な経験を組み合わせた<br />
                                総合的なソリューションで地方自治体の<br />
                                デジタル変革を実現します
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button className="bg-[#0891b2] hover:bg-[#0891b2]/90 text-white px-8 py-3 text-lg">
                                    資料請求
                                </Button>
                                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg">
                                    お問い合わせ
                                </Button>
                            </div>
                        </div>

                        <div className="relative h-[500px] hidden lg:block">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0891b2]/10"></div>
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-100"></div>
                            <div className="relative z-10 bg-white shadow-2xl p-8 max-w-md ml-auto mr-8 mt-12">
                                <div className="flex items-center mb-4">
                                    <Shield className="w-8 h-8 text-[#0891b2] mr-3" />
                                    <h3 className="text-xl font-bold text-black">トータルサポート</h3>
                                </div>
                                <p className="text-gray-600">
                                    企画から運用まで一貫したサービス提供で、
                                    お客様の課題を解決します
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Metrics */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {serviceMetrics.map((metric, index) => (
                            <div key={index} className="text-center">
                                <div className="w-20 h-20 bg-white shadow-lg mx-auto mb-4 flex items-center justify-center group hover:bg-[#0891b2] transition-colors">
                                    <metric.icon className="w-10 h-10 text-gray-700 group-hover:text-white transition-colors" />
                                </div>
                                <div className="text-3xl font-bold text-black mb-2">{metric.number}</div>
                                <div className="text-gray-600">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Detail Section with Tab Navigation */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-black mb-4">
                            提供サービス
                        </h2>
                        <p className="text-xl text-gray-600">
                            お客様のニーズに合わせた3つのサービスカテゴリー
                        </p>
                    </div>

                    {/* Service Tabs */}
                    <div className="flex flex-col lg:flex-row gap-4 mb-12 justify-center">
                        {services.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveService(index)}
                                className={`flex items-center justify-between p-6 border transition-all ${activeService === index
                                        ? "bg-[#0891b2] text-white border-[#0891b2]"
                                        : "bg-white text-black border-gray-200 hover:border-[#0891b2]"
                                    }`}
                            >
                                <div className="flex items-center">
                                    <service.icon className="w-6 h-6 mr-3" />
                                    <span className="font-semibold">{service.name}</span>
                                </div>
                                <ChevronRight className="w-5 h-5 ml-4" />
                            </button>
                        ))}
                    </div>

                    {/* Active Service Detail */}
                    <div className="bg-gray-50 p-8 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Left Content */}
                            <div>
                                <h3 className="text-3xl font-bold text-black mb-4">
                                    {services[activeService].name}
                                </h3>
                                <p className="text-lg text-gray-600 mb-8">
                                    {services[activeService].shortDesc}
                                </p>

                                {/* Features */}
                                <div className="mb-8">
                                    <h4 className="text-xl font-bold text-black mb-4">主な機能</h4>
                                    <div className="space-y-3">
                                        {services[activeService].features.map((feature, index) => (
                                            <div key={index} className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-[#0891b2] mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Benefits */}
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    <div className="bg-white p-4 text-center">
                                        <div className="text-2xl font-bold text-[#0891b2]">
                                            {services[activeService].benefits.efficiency ||
                                                services[activeService].benefits.cost ||
                                                services[activeService].benefits.decision}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {activeService === 0 ? "効率向上" :
                                                activeService === 1 ? "コスト削減" : "意思決定速度"}
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 text-center">
                                        <div className="text-2xl font-bold text-[#0891b2]">
                                            {services[activeService].benefits.satisfaction ||
                                                services[activeService].benefits.monitoring ||
                                                services[activeService].benefits.accuracy}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {activeService === 0 ? "満足度" :
                                                activeService === 1 ? "監視体制" : "精度"}
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 text-center">
                                        <div className="text-2xl font-bold text-[#0891b2]">
                                            {services[activeService].benefits.time ||
                                                services[activeService].benefits.coverage ||
                                                services[activeService].benefits.roi}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {activeService === 0 ? "時間短縮" :
                                                activeService === 1 ? "カバー率" : "ROI"}
                                        </div>
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-xl font-bold text-black mb-4">活用技術</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {services[activeService].technologies.map((tech, index) => (
                                            <div key={index} className="flex items-center bg-white p-3">
                                                <tech.icon className="w-5 h-5 text-[#0891b2] mr-2" />
                                                <span className="text-sm text-gray-700">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Content - Case Study */}
                            <div className="bg-white p-8 shadow-lg">
                                <div className="mb-6">
                                    <span className="text-sm text-[#0891b2] font-semibold">導入事例</span>
                                    <h4 className="text-2xl font-bold text-black mt-2">
                                        {services[activeService].case.client}
                                    </h4>
                                </div>

                                <div className="mb-6">
                                    <h5 className="font-semibold text-black mb-2">課題</h5>
                                    <p className="text-gray-600">{services[activeService].case.challenge}</p>
                                </div>

                                <div className="mb-6">
                                    <h5 className="font-semibold text-black mb-2">ソリューション</h5>
                                    <p className="text-gray-600">{services[activeService].case.solution}</p>
                                </div>

                                <div>
                                    <h5 className="font-semibold text-black mb-3">成果</h5>
                                    <div className="space-y-2">
                                        {services[activeService].case.results.map((result, index) => (
                                            <div key={index} className="flex items-center">
                                                <div className="w-2 h-2 bg-[#0891b2] mr-3"></div>
                                                <span className="text-gray-700">{result}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Button className="w-full mt-8 bg-black hover:bg-gray-900 text-white">
                                    詳細を見る
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Methodology Section */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 40px)`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-black mb-4">
                            プロジェクト進行プロセス
                        </h2>
                        <p className="text-xl text-gray-600">
                            確実な成果を生み出す4つのフェーズ
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {methodology.map((phase, index) => (
                            <div key={index} className="relative">
                                {/* Connector Line */}
                                {index < methodology.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-300 z-0">
                                        <ChevronRight className="absolute right-1/2 top-1/2 transform -translate-y-1/2 text-gray-400 bg-white" />
                                    </div>
                                )}

                                <div className="relative bg-white p-6 shadow-lg hover:shadow-xl transition-all z-10">
                                    <div className="w-12 h-12 bg-[#0891b2] text-white flex items-center justify-center font-bold text-lg mb-4">
                                        {index + 1}
                                    </div>

                                    <h3 className="text-xl font-bold text-black mb-2">{phase.phase}</h3>
                                    <p className="text-gray-600 mb-4">{phase.description}</p>

                                    <div className="text-sm text-[#0891b2] font-semibold mb-3">
                                        期間: {phase.duration}
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-black mb-2">成果物</h4>
                                        <ul className="space-y-1">
                                            {phase.deliverables.map((item, i) => (
                                                <li key={i} className="text-xs text-gray-600">• {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Process Flow with Video Background */}
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
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            サービス提供の流れ
                        </h2>
                        <p className="text-xl text-gray-300">
                            お問い合わせから運用開始まで、スムーズな導入を実現
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {services[activeService].process.map((step, index) => (
                            <div key={index} className="flex items-start mb-8 last:mb-0">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-[#0891b2] text-white flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    {index < services[activeService].process.length - 1 && (
                                        <div className="w-0.5 h-16 bg-gray-500 mx-6 my-2"></div>
                                    )}
                                </div>

                                <div className="ml-6 flex-1">
                                    <div className="bg-white/10 backdrop-blur p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">{step.step}</h3>
                                        <p className="text-gray-300">{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg">
                            サービス資料をダウンロード
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Services */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <Image
                                src="/placeholder.svg?height=600&width=800&text=Service+Excellence"
                                alt="Service Excellence"
                                width={800}
                                height={600}
                                className="w-full shadow-xl"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-[#0891b2] text-white p-8 max-w-sm shadow-xl">
                                <div className="text-4xl font-bold mb-2">99%</div>
                                <p className="text-lg">顧客満足度</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold text-black mb-8">
                                なぜ私たちのサービスが<br />選ばれるのか
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-[#0891b2] flex items-center justify-center flex-shrink-0 mr-4">
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-2">
                                            豊富な実績と経験
                                        </h3>
                                        <p className="text-gray-600">
                                            全国50以上の自治体での導入実績があり、
                                            様々な課題解決のノウハウを蓄積しています
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-[#0891b2] flex items-center justify-center flex-shrink-0 mr-4">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-2">
                                            エンドツーエンドのサポート
                                        </h3>
                                        <p className="text-gray-600">
                                            企画から運用まで一貫したサポートで、
                                            お客様の負担を最小限に抑えます
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-[#0891b2] flex items-center justify-center flex-shrink-0 mr-4">
                                        <TrendingUp className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-2">
                                            確実な成果
                                        </h3>
                                        <p className="text-gray-600">
                                            平均30%のコスト削減と95%の満足度を実現する、
                                            実績に基づいたソリューション提供
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#1a365d] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 40px)`,
                    }}></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        貴自治体のデジタル変革を<br />
                        私たちがサポートします
                    </h2>
                    <p className="text-xl text-gray-300 mb-12">
                        まずは無料相談から。お客様の課題をお聞かせください。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-[#0891b2] hover:bg-[#0891b2]/90 text-white px-8 py-4 text-lg">
                            無料相談を申し込む
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a365d] px-8 py-4 text-lg">
                            サービス資料をダウンロード
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}