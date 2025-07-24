"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    Award,
    CheckCircle,
    Shield,
    Sparkles,
    Target,
    Users
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [featuredProject, setFeaturedProject] = useState(0)

    const categories = [
        { id: "all", name: "すべて", count: 15 },
        { id: "digital", name: "デジタル変革", count: 6 },
        { id: "infrastructure", name: "インフラ", count: 5 },
        { id: "consulting", name: "コンサルティング", count: 4 },
    ]

    const featuredProjects = [
        {
            id: 1,
            title: "A市 スマートシティプロジェクト",
            category: "infrastructure",
            client: "A市",
            year: "2024",
            duration: "12ヶ月",
            image: "/placeholder.svg?height=800&width=1200&text=Smart+City",
            impact: "市民生活を革新的に変える",
            description: "市内全域にIoTセンサーを設置し、リアルタイムデータ分析による都市運営の最適化を実現。交通、エネルギー、防災など多角的な改善を達成。",
            stats: {
                efficiency: "35%",
                satisfaction: "92%",
                cost: "25%削減",
            },
            technologies: ["IoTセンサー", "5G通信", "エッジコンピューティング", "機械学習"],
        },
        {
            id: 2,
            title: "B県 行政DXプロジェクト",
            category: "digital",
            client: "B県",
            year: "2023",
            duration: "18ヶ月",
            image: "/placeholder.svg?height=800&width=1200&text=Digital+Transform",
            impact: "働き方と県民サービスを変革",
            description: "県庁業務の全面的なデジタル化により、業務効率を大幅に改善。AIとRPAを活用した業務自動化で職員の創造的業務へのシフトを実現。",
            stats: {
                efficiency: "50%",
                satisfaction: "95%",
                time: "60%短縮",
            },
            technologies: ["AI-OCR", "RPA", "クラウド基盤", "ワークフロー自動化"],
        },
        {
            id: 3,
            title: "C市 防災情報システム",
            category: "infrastructure",
            client: "C市",
            year: "2024",
            duration: "8ヶ月",
            image: "/placeholder.svg?height=800&width=1200&text=Disaster+Prevention",
            impact: "市民の安全を24時間守る",
            description: "最新技術を活用した総合防災情報システムで市民の安全を守る。リアルタイムの情報収集と迅速な避難誘導を実現。",
            stats: {
                response: "70%向上",
                coverage: "100%",
                accuracy: "98%",
            },
            technologies: ["センサーネットワーク", "AI予測", "緊急通知システム", "GIS"],
        },
    ]

    const projectShowcase = [
        {
            id: 1,
            title: "D町 地域活性化DX",
            category: "consulting",
            client: "D町",
            year: "2023",
            status: "completed",
            image: "/placeholder.svg?height=600&width=800&text=Regional+DX",
            challenge: "人口減少と地域経済の衰退への対応",
            solution: "デジタルマーケティングと地域アプリによる観光振興",
            achievements: [
                "観光客数150%増加",
                "地域収入45%向上",
                "住民参加率200%向上",
            ],
        },
        {
            id: 2,
            title: "E市 教育ICTプロジェクト",
            category: "digital",
            client: "E市",
            year: "2024",
            status: "ongoing",
            image: "/placeholder.svg?height=600&width=800&text=Education+ICT",
            challenge: "教育の質向上とデジタル格差の解消",
            solution: "統合教育プラットフォームによる個別最適な学び",
            achievements: [
                "ICT活用率98%達成",
                "学習効果40%向上",
                "教員満足度93%",
            ],
        },
        {
            id: 3,
            title: "F県 医療連携ネットワーク",
            category: "infrastructure",
            client: "F県",
            year: "2023",
            status: "completed",
            image: "/placeholder.svg?height=600&width=800&text=Medical+Network",
            challenge: "医療機関間の情報共有と地域医療の最適化",
            solution: "セキュアな医療情報連携基盤の構築",
            achievements: [
                "診療効率45%向上",
                "医療の質35%改善",
                "セキュリティ100%確保",
            ],
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section with Animated Background */}
            <section className="relative min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a365d] to-black">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 opacity-20">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
                                animation: "slide 20s linear infinite",
                            }}
                        />
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-20 w-80 h-80 bg-[#0891b2]/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0891b2]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <div className="text-center text-white">
                        <div className="text-sm font-bold tracking-[0.3em] text-[#0891b2] mb-6">PROJECT PORTFOLIO</div>
                        <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
                            実績が語る<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0891b2] to-cyan-400">
                                確かな技術力
                            </span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            全国50以上の自治体で実現した<br />
                            デジタル変革の成功事例
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center">
                            <Button className="bg-[#0891b2] hover:bg-[#0891b2]/90 text-white px-10 py-6 text-lg h-auto">
                                事例集をダウンロード
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black px-10 py-6 text-lg h-auto backdrop-blur-sm">
                                プロジェクト相談
                            </Button>
                        </div>
                    </div>
                </div>

                <style jsx>{`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(70px); }
          }
        `}</style>
            </section>

            {/* Impact Numbers */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <div className="absolute -top-32 -right-32 text-[300px] font-bold text-gray-100 select-none">50+</div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#0891b2] mb-2">50+</div>
                            <div className="text-gray-600">完了プロジェクト</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#0891b2] mb-2">15</div>
                            <div className="text-gray-600">都道府県</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#0891b2] mb-2">95%</div>
                            <div className="text-gray-600">成功率</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#0891b2] mb-2">3年</div>
                            <div className="text-gray-600">平均ROI回収</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects - Large Showcase */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bold text-black mb-4">
                            注目プロジェクト
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#0891b2] to-cyan-400 mx-auto"></div>
                    </div>

                    {/* Featured Project Display */}
                    {featuredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`mb-32 last:mb-0 ${index === featuredProject ? "block" : "hidden"}`}
                        >
                            <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16`}>
                                {/* Image Section */}
                                <div className="flex-1 relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#0891b2] to-cyan-400 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={1200}
                                            height={800}
                                            className="w-full object-cover shadow-2xl group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-8 left-8">
                                            <span className="bg-[#0891b2] text-white px-6 py-2 text-sm font-bold">
                                                {project.year}年 {project.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 relative">
                                    <div className="absolute -top-20 -left-10 text-[150px] font-bold text-gray-100 select-none">
                                        0{index + 1}
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-[#0891b2] font-bold mb-2">{project.client}</div>
                                        <h3 className="text-4xl font-bold text-black mb-4">{project.title}</h3>
                                        <p className="text-2xl text-gray-700 mb-6">{project.impact}</p>
                                        <p className="text-gray-600 mb-8 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-3 gap-6 mb-8">
                                            <div className="bg-gray-50 p-4">
                                                <div className="text-3xl font-bold text-[#0891b2]">{project.stats.efficiency}</div>
                                                <div className="text-sm text-gray-600">効率向上</div>
                                            </div>
                                            <div className="bg-gray-50 p-4">
                                                <div className="text-3xl font-bold text-[#0891b2]">{project.stats.satisfaction}</div>
                                                <div className="text-sm text-gray-600">満足度</div>
                                            </div>
                                            <div className="bg-gray-50 p-4">
                                                <div className="text-3xl font-bold text-[#0891b2]">{project.stats.cost}</div>
                                                <div className="text-sm text-gray-600">コスト</div>
                                            </div>
                                        </div>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-3">
                                            {project.technologies.map((tech, i) => (
                                                <span key={i} className="bg-[#0891b2]/10 text-[#0891b2] px-4 py-2 font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Project Navigation */}
                    <div className="flex justify-center gap-4 mt-12">
                        {featuredProjects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setFeaturedProject(index)}
                                className={`w-16 h-1 transition-all ${index === featuredProject ? "bg-[#0891b2]" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Filter Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-8 py-3 font-medium transition-all ${activeCategory === category.id
                                        ? "bg-[#0891b2] text-white shadow-lg transform -translate-y-1"
                                        : "bg-white text-gray-700 hover:shadow-md"
                                    }`}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Showcase - Large Cards */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="space-y-24">
                        {projectShowcase
                            .filter(project => activeCategory === "all" || project.category === activeCategory)
                            .map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-stretch gap-0 shadow-2xl overflow-hidden`}
                                >
                                    {/* Image Section */}
                                    <div className="lg:w-1/2 relative h-96 lg:h-auto">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={800}
                                            height={600}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        <div className="absolute bottom-8 left-8">
                                            <span className={`px-4 py-2 text-sm font-bold text-white ${project.status === "completed" ? "bg-green-600" : "bg-[#0891b2]"
                                                }`}>
                                                {project.status === "completed" ? "完了" : "進行中"}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="lg:w-1/2 bg-gray-50 p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                            <span className="font-bold text-[#0891b2]">{project.client}</span>
                                            <span>•</span>
                                            <span>{project.year}年</span>
                                        </div>

                                        <h3 className="text-3xl font-bold text-black mb-6">
                                            {project.title}
                                        </h3>

                                        <div className="mb-8">
                                            <h4 className="font-bold text-gray-700 mb-2">課題</h4>
                                            <p className="text-gray-600">{project.challenge}</p>
                                        </div>

                                        <div className="mb-8">
                                            <h4 className="font-bold text-gray-700 mb-2">ソリューション</h4>
                                            <p className="text-gray-600">{project.solution}</p>
                                        </div>

                                        <div className="space-y-3 mb-8">
                                            {project.achievements.map((achievement, i) => (
                                                <div key={i} className="flex items-center">
                                                    <CheckCircle className="w-5 h-5 text-[#0891b2] mr-3 flex-shrink-0" />
                                                    <span className="text-gray-700">{achievement}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Button className="bg-black hover:bg-gray-900 text-white self-start">
                                            詳細を見る
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Mission Statement Section */}
            <section className="py-32 bg-gradient-to-br from-[#0891b2] to-[#0e7490] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, white 0%, transparent 50%)`,
                        animation: "pulse 4s ease-in-out infinite",
                    }}></div>
                </div>

                <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                                目指すのは、<br />
                                「すべての自治体が<br />
                                デジタルで輝く<br />
                                未来の実現」
                            </h2>
                            <p className="text-white/90 text-lg leading-relaxed mb-10">
                                私たちは創業以来、地方自治体のデジタル変革に特化した専門家集団として、
                                日本全国の自治体が最新技術を活用して市民により良いサービスを提供できる社会の実現に取り組んでいます。
                            </p>
                            <Button
                                size="lg"
                                className="bg-white text-[#0891b2] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                            >
                                AEGIS LLPの強みへ
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <div className="bg-white/10 backdrop-blur p-6 transform hover:scale-105 transition-transform">
                                    <Target className="w-10 h-10 text-white mb-3" />
                                    <h3 className="text-xl font-bold text-white mb-2">課題解決力</h3>
                                    <p className="text-white/80 text-sm">複雑な行政課題を技術で解決</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur p-6 transform hover:scale-105 transition-transform">
                                    <Users className="w-10 h-10 text-white mb-3" />
                                    <h3 className="text-xl font-bold text-white mb-2">専門家集団</h3>
                                    <p className="text-white/80 text-sm">9社の専門企業による総合力</p>
                                </div>
                            </div>
                            <div className="space-y-6 mt-12">
                                <div className="bg-white/10 backdrop-blur p-6 transform hover:scale-105 transition-transform">
                                    <Sparkles className="w-10 h-10 text-white mb-3" />
                                    <h3 className="text-xl font-bold text-white mb-2">革新的技術</h3>
                                    <p className="text-white/80 text-sm">最新のAI・IoT技術を活用</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur p-6 transform hover:scale-105 transition-transform">
                                    <Shield className="w-10 h-10 text-white mb-3" />
                                    <h3 className="text-xl font-bold text-white mb-2">確実な実行</h3>
                                    <p className="text-white/80 text-sm">95%の高い成功率を誇る</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Testimonials - Large Format */}
            <section className="py-32 bg-gray-50 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#0891b2]/5 rounded-full"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#0891b2]/5 rounded-full"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <div className="text-7xl font-thin tracking-widest text-gray-300 mb-4">VOICE</div>
                        <h2 className="text-4xl font-bold text-black">お客様の声</h2>
                    </div>

                    <div className="space-y-16">
                        <div className="bg-white p-12 shadow-xl relative">
                            <div className="absolute -top-8 left-12 text-8xl text-[#0891b2]/20 font-serif">"</div>
                            <div className="relative z-10">
                                <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                                    AEGIS LLPの支援により、データドリブンな都市運営が実現しました。
                                    市民からの評価も高く、職員のモチベーションも向上しています。
                                    これからの自治体運営に欠かせないパートナーです。
                                </p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-bold text-lg text-black">A市 デジタル推進課長</div>
                                        <div className="text-gray-600">山田 太郎 様</div>
                                    </div>
                                    <Award className="w-16 h-16 text-[#0891b2]" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 shadow-lg">
                                <p className="text-gray-700 mb-6">
                                    想像以上の成果でした。職員の働き方が大きく改善し、県民サービスの質も向上しました。
                                </p>
                                <div className="border-t pt-4">
                                    <div className="font-bold text-black">B県 情報政策課</div>
                                    <div className="text-sm text-gray-600">佐藤 花子 様</div>
                                </div>
                            </div>

                            <div className="bg-white p-8 shadow-lg">
                                <p className="text-gray-700 mb-6">
                                    市民の安全を守る強力なシステムができました。災害対応力が格段に向上しました。
                                </p>
                                <div className="border-t pt-4">
                                    <div className="font-bold text-black">C市 危機管理課</div>
                                    <div className="text-sm text-gray-600">鈴木 一郎 様</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0891b2]/20 to-transparent"></div>

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-5xl font-bold text-white mb-8">
                        次はあなたの自治体で<br />
                        成功を実現しませんか？
                    </h2>
                    <p className="text-xl text-gray-300 mb-12">
                        豊富な実績と確かな技術力で、貴自治体のデジタル変革を支援します
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            size="lg"
                            className="bg-[#0891b2] hover:bg-[#0891b2]/90 text-white px-10 py-6 text-lg font-semibold"
                        >
                            プロジェクト相談を申し込む
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/30 text-white hover:bg-white hover:text-black px-10 py-6 text-lg font-semibold backdrop-blur-sm"
                        >
                            事例集をダウンロード
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}