"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    Award,
    BarChart,
    Building,
    CheckCircle,
    Grid3X3,
    List,
    MapPin,
    TrendingUp
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState("all")
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const [selectedProject, setSelectedProject] = useState<number | null>(null)

    const categories = [
        { id: "all", name: "すべて", count: 15 },
        { id: "digital", name: "デジタル変革", count: 6 },
        { id: "infrastructure", name: "インフラ", count: 5 },
        { id: "consulting", name: "コンサルティング", count: 4 },
    ]

    const projects = [
        {
            id: 1,
            title: "A市 スマートシティプロジェクト",
            category: "infrastructure",
            client: "A市",
            year: "2024",
            duration: "12ヶ月",
            status: "completed",
            image: "/placeholder.svg?height=400&width=600&text=Smart+City",
            tags: ["IoT", "ビッグデータ", "AI"],
            summary: "市内全域にIoTセンサーを設置し、リアルタイムデータ分析による都市運営の最適化を実現",
            challenge: "増加する都市問題への対応と市民サービスの向上",
            solution: "IoTセンサーネットワークとAI分析基盤の構築",
            results: {
                efficiency: "35%",
                satisfaction: "92%",
                cost: "25%",
            },
            achievements: [
                "交通渋滞を35%削減",
                "エネルギー消費を20%削減",
                "市民満足度92%達成",
                "運営コスト25%削減",
            ],
            technologies: ["IoTセンサー", "5G通信", "エッジコンピューティング", "機械学習"],
            testimonial: {
                text: "AEGIS LLPの支援により、データドリブンな都市運営が実現しました。市民からの評価も高く、大変満足しています。",
                author: "A市 デジタル推進課長",
                role: "山田 太郎 様",
            },
        },
        {
            id: 2,
            title: "B県 行政DXプロジェクト",
            category: "digital",
            client: "B県",
            year: "2023",
            duration: "18ヶ月",
            status: "completed",
            image: "/placeholder.svg?height=400&width=600&text=Digital+Transform",
            tags: ["AI", "RPA", "クラウド"],
            summary: "県庁業務の全面的なデジタル化により、業務効率を大幅に改善",
            challenge: "紙ベースの業務プロセスと職員の負担増加",
            solution: "AIとRPAを活用した業務自動化システムの導入",
            results: {
                efficiency: "50%",
                satisfaction: "95%",
                time: "60%",
            },
            achievements: [
                "事務処理時間を60%短縮",
                "ペーパーレス化率95%達成",
                "職員満足度90%向上",
                "年間コスト3億円削減",
            ],
            technologies: ["AI-OCR", "RPA", "クラウド基盤", "ワークフロー自動化"],
            testimonial: {
                text: "想像以上の成果でした。職員の働き方が大きく改善し、県民サービスの質も向上しました。",
                author: "B県 情報政策課",
                role: "佐藤 花子 様",
            },
        },
        {
            id: 3,
            title: "C市 防災情報システム",
            category: "infrastructure",
            client: "C市",
            year: "2024",
            duration: "8ヶ月",
            status: "ongoing",
            image: "/placeholder.svg?height=400&width=600&text=Disaster+Prevention",
            tags: ["リアルタイム", "IoT", "通知システム"],
            summary: "最新技術を活用した総合防災情報システムで市民の安全を守る",
            challenge: "災害時の迅速な情報伝達と避難誘導の最適化",
            solution: "リアルタイム防災情報プラットフォームの構築",
            results: {
                response: "70%",
                coverage: "100%",
                accuracy: "98%",
            },
            achievements: [
                "情報伝達速度70%向上",
                "市内全域をカバー",
                "予測精度98%達成",
                "避難所運営の効率化",
            ],
            technologies: ["センサーネットワーク", "AI予測", "緊急通知システム", "GIS"],
            testimonial: {
                text: "市民の安全を守る強力なシステムができました。災害対応力が格段に向上しました。",
                author: "C市 危機管理課",
                role: "鈴木 一郎 様",
            },
        },
        {
            id: 4,
            title: "D町 地域活性化DX",
            category: "consulting",
            client: "D町",
            year: "2023",
            duration: "6ヶ月",
            status: "completed",
            image: "/placeholder.svg?height=400&width=600&text=Regional+DX",
            tags: ["地域創生", "デジタル", "観光"],
            summary: "デジタル技術を活用した地域資源の最大化と観光振興",
            challenge: "人口減少と地域経済の衰退",
            solution: "デジタルマーケティングと地域アプリの開発",
            results: {
                visitors: "150%",
                revenue: "45%",
                engagement: "200%",
            },
            achievements: [
                "観光客数150%増加",
                "地域収入45%向上",
                "住民参加率200%向上",
                "若年層の関心度上昇",
            ],
            technologies: ["モバイルアプリ", "AR/VR", "データ分析", "SNS連携"],
            testimonial: {
                text: "町に活気が戻ってきました。デジタルの力で地域の魅力を再発見できました。",
                author: "D町 地域振興課",
                role: "田中 美香 様",
            },
        },
        {
            id: 5,
            title: "E市 教育ICTプロジェクト",
            category: "digital",
            client: "E市",
            year: "2024",
            duration: "10ヶ月",
            status: "ongoing",
            image: "/placeholder.svg?height=400&width=600&text=Education+ICT",
            tags: ["教育", "タブレット", "オンライン"],
            summary: "全市立学校へのICT環境整備と新しい学びの実現",
            challenge: "教育の質向上とデジタル格差の解消",
            solution: "統合教育プラットフォームの導入",
            results: {
                adoption: "98%",
                improvement: "40%",
                satisfaction: "93%",
            },
            achievements: [
                "ICT活用率98%達成",
                "学習効果40%向上",
                "教員満足度93%",
                "保護者評価95%",
            ],
            technologies: ["学習管理システム", "タブレット端末", "クラウド", "AI学習支援"],
            testimonial: {
                text: "子どもたちの学習意欲が向上し、個別最適な学びが実現できています。",
                author: "E市 教育委員会",
                role: "高橋 次郎 様",
            },
        },
        {
            id: 6,
            title: "F県 医療連携ネットワーク",
            category: "infrastructure",
            client: "F県",
            year: "2023",
            duration: "15ヶ月",
            status: "completed",
            image: "/placeholder.svg?height=400&width=600&text=Medical+Network",
            tags: ["医療", "連携", "セキュア"],
            summary: "県内医療機関を結ぶセキュアな情報共有ネットワーク",
            challenge: "医療機関間の情報共有と地域医療の最適化",
            solution: "セキュアな医療情報連携基盤の構築",
            results: {
                efficiency: "45%",
                quality: "35%",
                security: "100%",
            },
            achievements: [
                "診療効率45%向上",
                "医療の質35%改善",
                "セキュリティ100%確保",
                "患者満足度向上",
            ],
            technologies: ["ブロックチェーン", "暗号化通信", "医療データベース", "AI診断支援"],
            testimonial: {
                text: "安全で効率的な医療連携が実現し、県民の健康向上に貢献できています。",
                author: "F県 医療政策課",
                role: "渡辺 三郎 様",
            },
        },
    ]

    const filteredProjects = projects.filter(project =>
        activeFilter === "all" || project.category === activeFilter
    )

    const projectMetrics = [
        { number: "50+", label: "完了プロジェクト", icon: Building },
        { number: "15", label: "都道府県", icon: MapPin },
        { number: "95%", label: "成功率", icon: TrendingUp },
        { number: "3年", label: "平均ROI回収", icon: BarChart },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section with Dynamic Background */}
            <section className="relative min-h-[600px] flex items-center overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-[#1a365d]">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
                            animation: "slide 20s linear infinite",
                        }}></div>
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <div className="text-center text-white">
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                            プロジェクト実績
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            全国の自治体で実現した<br />
                            デジタル変革の成功事例をご紹介します
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button className="bg-[#0891b2] hover:bg-[#0891b2]/90 text-white px-8 py-3 text-lg">
                                事例集をダウンロード
                            </Button>
                            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg">
                                お問い合わせ
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

            {/* Project Metrics */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {projectMetrics.map((metric, index) => (
                            <div key={index} className="relative group">
                                <div className="absolute inset-0 bg-[#0891b2] transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                <div className="relative bg-gray-50 p-8 text-center">
                                    <metric.icon className="w-12 h-12 text-[#0891b2] group-hover:text-white mx-auto mb-4 transition-colors" />
                                    <div className="text-3xl font-bold text-black group-hover:text-white transition-colors">
                                        {metric.number}
                                    </div>
                                    <div className="text-gray-600 group-hover:text-white transition-colors">
                                        {metric.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Filter and Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Filter Bar */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
                        <div className="mb-6 lg:mb-0">
                            <h2 className="text-3xl font-bold text-black mb-4">プロジェクト一覧</h2>
                            <div className="flex flex-wrap gap-3">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveFilter(category.id)}
                                        className={`px-6 py-2 font-medium transition-all ${activeFilter === category.id
                                                ? "bg-[#0891b2] text-white"
                                                : "bg-white text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        {category.name} ({category.count})
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* View Mode Toggle */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-2 ${viewMode === "grid" ? "bg-[#0891b2] text-white" : "bg-white text-gray-700"}`}
                            >
                                <Grid3X3 className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-2 ${viewMode === "list" ? "bg-[#0891b2] text-white" : "bg-white text-gray-700"}`}
                            >
                                <List className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Projects Grid/List */}
                    {viewMode === "grid" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-white shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                                    onClick={() => setSelectedProject(project.id)}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <span className={`px-3 py-1 text-xs font-semibold text-white ${project.status === "completed" ? "bg-green-600" : "bg-[#0891b2]"
                                                }`}>
                                                {project.status === "completed" ? "完了" : "進行中"}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                            <span>{project.client}</span>
                                            <span>•</span>
                                            <span>{project.year}</span>
                                            <span>•</span>
                                            <span>{project.duration}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#0891b2] transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {project.summary}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, index) => (
                                                <span key={index} className="px-2 py-1 bg-gray-100 text-xs text-gray-700">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center text-[#0891b2] font-semibold">
                                            詳細を見る
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {filteredProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-white shadow-lg hover:shadow-xl transition-all cursor-pointer"
                                    onClick={() => setSelectedProject(project.id)}
                                >
                                    <div className="flex flex-col lg:flex-row">
                                        <div className="lg:w-1/3 h-64 lg:h-auto relative">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-3 py-1 text-xs font-semibold text-white ${project.status === "completed" ? "bg-green-600" : "bg-[#0891b2]"
                                                    }`}>
                                                    {project.status === "completed" ? "完了" : "進行中"}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex-1 p-8">
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                                <span>{project.client}</span>
                                                <span>•</span>
                                                <span>{project.year}</span>
                                                <span>•</span>
                                                <span>{project.duration}</span>
                                            </div>

                                            <h3 className="text-2xl font-bold text-black mb-3">
                                                {project.title}
                                            </h3>

                                            <p className="text-gray-600 mb-4">
                                                {project.summary}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tags.map((tag, index) => (
                                                    <span key={index} className="px-3 py-1 bg-gray-100 text-sm text-gray-700">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="grid grid-cols-3 gap-4 mb-6">
                                                <div>
                                                    <div className="text-2xl font-bold text-[#0891b2]">
                                                        {project.results.efficiency || project.results.response || project.results.visitors}
                                                    </div>
                                                    <div className="text-sm text-gray-600">効率向上</div>
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold text-[#0891b2]">
                                                        {project.results.satisfaction || project.results.coverage || project.results.revenue}
                                                    </div>
                                                    <div className="text-sm text-gray-600">満足度</div>
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold text-[#0891b2]">
                                                        {project.results.cost || project.results.accuracy || project.results.engagement}
                                                    </div>
                                                    <div className="text-sm text-gray-600">
                                                        {project.category === "infrastructure" ? "精度" :
                                                            project.category === "consulting" ? "エンゲージメント" : "コスト削減"}
                                                    </div>
                                                </div>
                                            </div>

                                            <Button className="bg-[#0891b2] hover:bg-[#0891b2]/90 text-white">
                                                詳細を見る
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Featured Project Detail with Video Background */}
            {selectedProject && (
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
                    <div className="absolute inset-0 bg-black/80"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                        {(() => {
                            const project = projects.find(p => p.id === selectedProject)
                            if (!project) return null

                            return (
                                <div className="text-white">
                                    <div className="text-center mb-12">
                                        <h2 className="text-4xl font-bold mb-4">注目プロジェクト</h2>
                                        <p className="text-xl text-gray-300">{project.title}</p>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                        <div>
                                            <div className="mb-8">
                                                <h3 className="text-2xl font-bold mb-4">課題</h3>
                                                <p className="text-gray-300">{project.challenge}</p>
                                            </div>

                                            <div className="mb-8">
                                                <h3 className="text-2xl font-bold mb-4">ソリューション</h3>
                                                <p className="text-gray-300">{project.solution}</p>
                                            </div>

                                            <div>
                                                <h3 className="text-2xl font-bold mb-4">活用技術</h3>
                                                <div className="flex flex-wrap gap-3">
                                                    {project.technologies.map((tech, index) => (
                                                        <span key={index} className="px-4 py-2 bg-white/10 backdrop-blur">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="mb-8">
                                                <h3 className="text-2xl font-bold mb-4">成果</h3>
                                                <div className="space-y-3">
                                                    {project.achievements.map((achievement, index) => (
                                                        <div key={index} className="flex items-center">
                                                            <CheckCircle className="w-5 h-5 text-[#0891b2] mr-3 flex-shrink-0" />
                                                            <span>{achievement}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="bg-white/10 backdrop-blur p-6">
                                                <p className="text-lg mb-4 italic">"{project.testimonial.text}"</p>
                                                <div>
                                                    <div className="font-bold">{project.testimonial.role}</div>
                                                    <div className="text-sm text-gray-300">{project.testimonial.author}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center mt-12">
                                        <Button
                                            variant="outline"
                                            className="border-white text-white hover:bg-white hover:text-black"
                                            onClick={() => setSelectedProject(null)}
                                        >
                                            プロジェクト一覧に戻る
                                        </Button>
                                    </div>
                                </div>
                            )
                        })()}
                    </div>
                </section>
            )}

            {/* Success Stories Carousel */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-black mb-4">
                            お客様の声
                        </h2>
                        <p className="text-xl text-gray-600">
                            プロジェクトを通じて実現した変革の声
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.slice(0, 3).map((project) => (
                            <div key={project.id} className="bg-gray-50 p-8 relative">
                                <div className="absolute top-4 right-4 text-6xl text-gray-200">"</div>
                                <div className="relative z-10">
                                    <div className="flex items-center mb-4">
                                        <Award className="w-8 h-8 text-[#0891b2] mr-3" />
                                        <div>
                                            <div className="font-bold text-black">{project.client}</div>
                                            <div className="text-sm text-gray-600">{project.category === "digital" ? "デジタル変革" : project.category === "infrastructure" ? "インフラ" : "コンサルティング"}</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-6 line-clamp-3">
                                        {project.testimonial.text}
                                    </p>
                                    <div className="border-t border-gray-300 pt-4">
                                        <div className="font-semibold text-black">{project.testimonial.role}</div>
                                        <div className="text-sm text-gray-600">{project.testimonial.author}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Timeline */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-black mb-4">
                            プロジェクトの流れ
                        </h2>
                        <p className="text-xl text-gray-600">
                            ご相談から運用開始まで、確実なプロジェクト遂行
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

                        {/* Timeline Items */}
                        <div className="space-y-12">
                            {[
                                {
                                    step: 1,
                                    title: "ヒアリング・課題分析",
                                    duration: "1-2週間",
                                    description: "お客様の現状と課題を詳しくお聞きし、最適なソリューションを検討します"
                                },
                                {
                                    step: 2,
                                    title: "提案・計画策定",
                                    duration: "2-3週間",
                                    description: "課題解決に向けた具体的な提案と実行計画を策定します"
                                },
                                {
                                    step: 3,
                                    title: "開発・実装",
                                    duration: "3-6ヶ月",
                                    description: "段階的な開発と検証を重ねながら、着実にシステムを構築します"
                                },
                                {
                                    step: 4,
                                    title: "テスト・移行",
                                    duration: "1-2ヶ月",
                                    description: "十分なテストを実施し、スムーズな本番移行を実現します"
                                },
                                {
                                    step: 5,
                                    title: "運用・サポート",
                                    duration: "継続",
                                    description: "24/7のサポート体制で、安定した運用を支援します"
                                },
                            ].map((item, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                                    <div className="flex-1">
                                        <div className={`bg-white p-6 shadow-lg ${index % 2 === 0 ? "mr-8 text-right" : "ml-8"}`}>
                                            <div className="text-sm text-[#0891b2] font-semibold mb-2">{item.duration}</div>
                                            <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-[#0891b2] text-white flex items-center justify-center font-bold text-lg">
                                            {item.step}
                                        </div>
                                    </div>

                                    <div className="flex-1"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#0891b2] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 1px, transparent 40px)`,
                    }}></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        次はあなたの自治体で<br />
                        成功を実現しませんか？
                    </h2>
                    <p className="text-xl text-white/90 mb-12">
                        豊富な実績と確かな技術力で、貴自治体のデジタル変革を支援します
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-white text-[#0891b2] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                        >
                            プロジェクト相談を申し込む
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-[#0891b2] px-8 py-4 text-lg font-semibold"
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