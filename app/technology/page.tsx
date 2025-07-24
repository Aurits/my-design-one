"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import {
    Activity,
    ArrowRight,
    BarChart3,
    Brain,
    CheckCircle,
    ChevronRight,
    Cloud,
    Code,
    Cpu,
    Globe,
    Lock,
    Network,
    Rocket,
    Settings,
    Shield,
    Sparkles,
    TrendingUp,
    Users,
    Zap
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function TechnologyPage() {
    const [activeTech, setActiveTech] = useState(0)
    const [activeProcess, setActiveProcess] = useState(0)

    const technologies = [
        {
            id: 0,
            name: "AI・機械学習",
            icon: Brain,
            description: "最新のAI技術で行政業務を革新",
            details: "自然言語処理、画像認識、予測分析などの先端AI技術を活用し、行政サービスの自動化と高度化を実現します。",
            features: [
                "自動文書処理・分類",
                "チャットボット対応",
                "需要予測・最適化",
                "異常検知システム",
            ],
            stats: {
                accuracy: "98%",
                processing: "10倍",
                cost: "60%削減",
            },
            image: "/placeholder.svg?height=600&width=800&text=AI+Technology",
        },
        {
            id: 1,
            name: "IoT・センサー",
            icon: Network,
            description: "都市全体をスマート化するセンサーネットワーク",
            details: "環境センサー、交通センサー、防災センサーなど、多様なIoTデバイスを統合管理し、リアルタイムな都市運営を支援します。",
            features: [
                "環境モニタリング",
                "交通流量分析",
                "インフラ監視",
                "エネルギー管理",
            ],
            stats: {
                coverage: "100%",
                realtime: "24/7",
                efficiency: "40%向上",
            },
            image: "/placeholder.svg?height=600&width=800&text=IoT+Network",
        },
        {
            id: 2,
            name: "クラウド基盤",
            icon: Cloud,
            description: "安全で拡張性の高いクラウドインフラ",
            details: "政府認定のセキュアなクラウド環境で、高可用性と災害対策を備えた基盤を提供。コスト最適化も実現します。",
            features: [
                "自動スケーリング",
                "災害時バックアップ",
                "セキュリティ監視",
                "コスト最適化",
            ],
            stats: {
                uptime: "99.99%",
                security: "最高レベル",
                scalability: "無制限",
            },
            image: "/placeholder.svg?height=600&width=800&text=Cloud+Infrastructure",
        },
        {
            id: 3,
            name: "ブロックチェーン",
            icon: Lock,
            description: "透明性と信頼性を確保する分散型技術",
            details: "行政手続きの透明性向上、データの改ざん防止、スマートコントラクトによる自動化など、次世代の行政基盤を構築します。",
            features: [
                "電子証明書発行",
                "投票システム",
                "契約自動執行",
                "監査証跡管理",
            ],
            stats: {
                transparency: "100%",
                processing: "即時",
                trust: "完全保証",
            },
            image: "/placeholder.svg?height=600&width=800&text=Blockchain",
        },
    ]

    const innovationProcess = [
        {
            phase: "調査・分析",
            description: "最新技術トレンドと自治体ニーズの徹底調査",
            icon: BarChart3,
            activities: ["技術動向調査", "ニーズ分析", "実現可能性検証"],
        },
        {
            phase: "研究開発",
            description: "実証実験とプロトタイプ開発",
            icon: Code,
            activities: ["プロトタイプ開発", "実証実験", "性能評価"],
        },
        {
            phase: "実装・展開",
            description: "本番環境への段階的導入",
            icon: Rocket,
            activities: ["パイロット導入", "段階展開", "全面展開"],
        },
        {
            phase: "改善・最適化",
            description: "継続的な改善とアップデート",
            icon: TrendingUp,
            activities: ["効果測定", "フィードバック収集", "機能改善"],
        },
    ]

    const techStack = [
        { category: "フロントエンド", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
        { category: "バックエンド", tools: ["Node.js", "Python", "Java", "Go"] },
        { category: "データベース", tools: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
        { category: "インフラ", tools: ["AWS", "Azure", "Kubernetes", "Docker"] },
        { category: "AI/ML", tools: ["TensorFlow", "PyTorch", "scikit-learn", "OpenAI"] },
        { category: "セキュリティ", tools: ["OAuth", "JWT", "SSL/TLS", "WAF"] },
    ]

    const researchAreas = [
        {
            title: "量子コンピューティング",
            description: "次世代の計算能力で複雑な最適化問題を解決",
            progress: 30,
            icon: Cpu,
        },
        {
            title: "エッジAI",
            description: "デバイス側でのリアルタイムAI処理",
            progress: 60,
            icon: Zap,
        },
        {
            title: "デジタルツイン",
            description: "都市の完全なデジタル複製による高度なシミュレーション",
            progress: 45,
            icon: Globe,
        },
        {
            title: "自律型システム",
            description: "自己学習・自己修復する次世代システム",
            progress: 25,
            icon: Settings,
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section with Animated Tech Background */}
            <section className="relative min-h-[700px] flex items-center overflow-hidden bg-black">
                {/* Animated Circuit Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 opacity-20">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `
                  linear-gradient(90deg, transparent 0%, transparent 49%, #0891b2 50%, transparent 51%, transparent 100%),
                  linear-gradient(0deg, transparent 0%, transparent 49%, #0891b2 50%, transparent 51%, transparent 100%)
                `,
                                backgroundSize: "50px 50px",
                                animation: "circuitMove 20s linear infinite",
                            }}
                        />
                    </div>
                </div>

                {/* Floating Tech Elements */}
                <div className="absolute top-20 left-20 animate-pulse">
                    <Brain className="w-20 h-20 text-[#0891b2]/30" />
                </div>
                <div className="absolute bottom-20 right-20 animate-pulse" style={{ animationDelay: "1s" }}>
                    <Cloud className="w-24 h-24 text-[#0891b2]/30" />
                </div>
                <div className="absolute top-1/2 right-1/3 animate-pulse" style={{ animationDelay: "2s" }}>
                    <Network className="w-16 h-16 text-[#0891b2]/30" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <div className="text-center text-white">
                        <div className="text-sm font-bold tracking-[0.3em] text-[#0891b2] mb-6">TECHNOLOGY & INNOVATION</div>
                        <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
                            最先端技術で<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0891b2] to-cyan-400">
                                未来を創造
                            </span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            AI、IoT、ブロックチェーンなど最新技術を駆使して<br />
                            地方自治体のデジタル変革を加速します
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center">
                            <Button className="bg-[#0891b2] hover:bg-[#0891b2]/90 text-white px-10 py-6 text-lg h-auto group">
                                技術資料をダウンロード
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black px-10 py-6 text-lg h-auto backdrop-blur-sm">
                                デモを見る
                            </Button>
                        </div>
                    </div>
                </div>

                <style jsx>{`
          @keyframes circuitMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
        `}</style>
            </section>

            {/* Core Technologies Showcase */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0891b2]/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bold text-black mb-4">
                            コア技術
                        </h2>
                        <p className="text-xl text-gray-600">
                            行政DXを支える4つの主要技術
                        </p>
                    </div>

                    {/* Technology Tabs */}
                    <div className="flex flex-wrap gap-4 justify-center mb-16">
                        {technologies.map((tech, index) => (
                            <button
                                key={tech.id}
                                onClick={() => setActiveTech(index)}
                                className={`flex items-center gap-3 px-8 py-4 font-medium transition-all ${activeTech === index
                                        ? "bg-[#0891b2] text-white shadow-xl transform -translate-y-1"
                                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                <tech.icon className="w-5 h-5" />
                                {tech.name}
                            </button>
                        ))}
                    </div>

                    {/* Active Technology Display */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div className="order-2 lg:order-1">
                            <div className="text-6xl font-bold text-gray-100 mb-4">
                                0{activeTech + 1}
                            </div>
                            <h3 className="text-4xl font-bold text-black mb-4">
                                {technologies[activeTech].name}
                            </h3>
                            <p className="text-2xl text-gray-700 mb-6">
                                {technologies[activeTech].description}
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {technologies[activeTech].details}
                            </p>

                            {/* Features */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {technologies[activeTech].features.map((feature, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-[#0891b2] mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6">
                                {Object.entries(technologies[activeTech].stats).map(([key, value]) => (
                                    <div key={key} className="bg-gray-50 p-4 text-center">
                                        <div className="text-2xl font-bold text-[#0891b2]">{value}</div>
                                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="order-1 lg:order-2 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#0891b2] to-cyan-400 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
                            <Image
                                src={technologies[activeTech].image}
                                alt={technologies[activeTech].name}
                                width={800}
                                height={600}
                                className="w-full shadow-2xl group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Innovation Process with Video Background */}
            <section className="py-32 relative overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/sample.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/80"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bold text-white mb-4">
                            イノベーションプロセス
                        </h2>
                        <p className="text-xl text-gray-300">
                            継続的な技術革新を実現する4つのステップ
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {innovationProcess.map((phase, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveProcess(index)}
                                className={`cursor-pointer transition-all ${activeProcess === index ? "scale-105" : "scale-100 opacity-80 hover:opacity-100"
                                    }`}
                            >
                                <div className="bg-white/10 backdrop-blur p-8 h-full">
                                    <div className="w-16 h-16 bg-[#0891b2] flex items-center justify-center mb-6">
                                        <phase.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{phase.phase}</h3>
                                    <p className="text-gray-300 mb-6">{phase.description}</p>
                                    <ul className="space-y-2">
                                        {phase.activities.map((activity, i) => (
                                            <li key={i} className="text-sm text-gray-400 flex items-start">
                                                <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                                                {activity}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Grid */}
            <section className="py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bold text-black mb-4">
                            技術スタック
                        </h2>
                        <p className="text-xl text-gray-600">
                            プロジェクトを支える技術基盤
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {techStack.map((category, index) => (
                            <div key={index} className="bg-white p-8 shadow-lg hover:shadow-xl transition-all group">
                                <h3 className="text-xl font-bold text-black mb-6 group-hover:text-[#0891b2] transition-colors">
                                    {category.category}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {category.tools.map((tool, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 group-hover:border-[#0891b2] group-hover:text-[#0891b2] transition-all"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research & Development Section */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0891b2]/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="text-sm font-bold tracking-[0.3em] text-[#0891b2] mb-4">R&D</div>
                            <h2 className="text-5xl font-bold text-black mb-8">
                                未来を見据えた<br />
                                研究開発
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                                次世代技術の研究開発を通じて、
                                5年後、10年後の自治体サービスを今から準備しています。
                                産学連携により最新の研究成果を実用化し、
                                日本の行政サービスをリードします。
                            </p>

                            <div className="space-y-6">
                                {researchAreas.map((area, index) => (
                                    <div key={index} className="group">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <area.icon className="w-5 h-5 text-[#0891b2]" />
                                                <h4 className="font-bold text-black group-hover:text-[#0891b2] transition-colors">
                                                    {area.title}
                                                </h4>
                                            </div>
                                            <span className="text-sm text-gray-500">{area.progress}%</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-3">{area.description}</p>
                                        <div className="w-full bg-gray-200 h-2 overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-[#0891b2] to-cyan-400 transition-all duration-1000"
                                                style={{ width: `${area.progress}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#0891b2]/10 z-0"></div>
                            <div className="relative bg-gradient-to-br from-gray-900 to-black p-12 text-white">
                                <Sparkles className="w-12 h-12 text-[#0891b2] mb-6" />
                                <h3 className="text-3xl font-bold mb-4">
                                    Innovation Lab
                                </h3>
                                <p className="text-gray-300 mb-8">
                                    最新技術の実証実験施設を運営し、
                                    実際の環境での検証を行っています
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#0891b2] flex items-center justify-center">
                                            <Activity className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-bold">24/7稼働</div>
                                            <div className="text-sm text-gray-400">リアルタイム実験環境</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#0891b2] flex items-center justify-center">
                                            <Users className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-bold">50+研究者</div>
                                            <div className="text-sm text-gray-400">専門家による開発</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security & Compliance */}
            <section className="py-32 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, #0891b2 0%, transparent 50%)`,
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <Shield className="w-16 h-16 text-[#0891b2] mx-auto mb-6" />
                        <h2 className="text-5xl font-bold text-white mb-4">
                            セキュリティ & コンプライアンス
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            政府基準を満たす最高レベルのセキュリティで、
                            自治体の重要データを確実に保護します
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/5 backdrop-blur p-8 border border-white/10">
                            <Lock className="w-10 h-10 text-[#0891b2] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">データ暗号化</h3>
                            <p className="text-gray-400">
                                最新の暗号化技術により、保存時・通信時のデータを完全保護
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur p-8 border border-white/10">
                            <Shield className="w-10 h-10 text-[#0891b2] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">24/7監視</h3>
                            <p className="text-gray-400">
                                専門チームによる24時間365日のセキュリティ監視体制
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur p-8 border border-white/10">
                            <CheckCircle className="w-10 h-10 text-[#0891b2] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">認証取得</h3>
                            <p className="text-gray-400">
                                ISO27001、ISMS等の国際標準認証を取得
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Button
                            size="lg"
                            className="bg-[#0891b2] hover:bg-[#0891b2]/90 text-white px-10 py-6 text-lg font-semibold"
                        >
                            セキュリティ詳細資料
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Future Vision */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <div className="text-7xl font-thin tracking-widest text-gray-200 mb-4">FUTURE</div>
                        <h2 className="text-5xl font-bold text-black">
                            2030年への技術ロードマップ
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                        {/* Timeline Items */}
                        <div className="space-y-16">
                            <div className="flex items-start gap-8">
                                <div className="w-16 h-16 bg-[#0891b2] flex items-center justify-center text-white font-bold flex-shrink-0 relative z-10">
                                    2025
                                </div>
                                <div className="flex-1 bg-gray-50 p-8">
                                    <h3 className="text-2xl font-bold text-black mb-3">完全AI自動化</h3>
                                    <p className="text-gray-600">定型業務の90%をAIが自動処理</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-8">
                                <div className="w-16 h-16 bg-[#0891b2] flex items-center justify-center text-white font-bold flex-shrink-0 relative z-10">
                                    2027
                                </div>
                                <div className="flex-1 bg-gray-50 p-8">
                                    <h3 className="text-2xl font-bold text-black mb-3">デジタルツイン都市</h3>
                                    <p className="text-gray-600">仮想空間での完全な都市シミュレーション</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-8">
                                <div className="w-16 h-16 bg-[#0891b2] flex items-center justify-center text-white font-bold flex-shrink-0 relative z-10">
                                    2030
                                </div>
                                <div className="flex-1 bg-gray-50 p-8">
                                    <h3 className="text-2xl font-bold text-black mb-3">自律型スマートシティ</h3>
                                    <p className="text-gray-600">AIが都市運営を自律的に最適化</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-[#0891b2] to-[#0e7490] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-5xl font-bold text-white mb-8">
                        最新技術で実現する<br />
                        次世代の行政サービス
                    </h2>
                    <p className="text-xl text-white/90 mb-12">
                        技術詳細資料や導入事例をご用意しています
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            size="lg"
                            className="bg-white text-[#0891b2] hover:bg-gray-100 px-10 py-6 text-lg font-semibold"
                        >
                            技術相談を申し込む
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-[#0891b2] px-10 py-6 text-lg font-semibold"
                        >
                            技術資料ダウンロード
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}