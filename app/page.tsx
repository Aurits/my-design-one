"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Award,
  BarChart,
  Building,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cpu,
  Headphones,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function AegisHomepage() {
  const [heroSlide, setHeroSlide] = useState(0)
  const [projectSlide, setProjectSlide] = useState(0)
  const [successSlide, setSuccessSlide] = useState(0)
  const [newsSlide, setNewsSlide] = useState(0)

  const content = {
    hero: {
      slides: [
        {
          title1: "地方自治体の未来を",
          title2: "デジタルで支える",
          subtitle: "AEGIS LLP - 信頼できる技術パートナー",
          cta: "サービスを見る",
          stat: { number: "50+", label: "プロジェクト実績" },
        },
        {
          title1: "確かな技術力で",
          title2: "課題を解決",
          subtitle: "最新のAI・IoT技術で行政業務を効率化",
          cta: "技術詳細を見る",
          stat: { number: "99%", label: "顧客満足度" },
        },
        {
          title1: "50+の",
          title2: "プロジェクト実績",
          subtitle: "全国の自治体で実証された確かな成果",
          cta: "実績を見る",
          stat: { number: "30%", label: "コスト削減実績" },
        },
        {
          title1: "9社の連携で",
          title2: "トータルサポート",
          subtitle: "企画から運用まで一貫したサービス提供",
          cta: "連携体制を見る",
          stat: { number: "24/7", label: "サポート体制" },
        },
      ],
    },
    timeline: {
      title: "AEGIS LLPの歩み",
      items: [
        { year: "2020年", event: "LLP設立", highlight: "創業" },
        { year: "2021年", event: "初の大型プロジェクト", highlight: "成長" },
        { year: "2022年", event: "メンバー企業拡大", highlight: "拡大" },
        { year: "2023年", event: "DX専門チーム発足", highlight: "進化" },
        { year: "2024年", event: "全国展開開始", highlight: "飛躍" },
      ],
    },
    services: {
      title: "サービス",
      subtitle: "最新技術と豊富な経験を組み合わせた総合的なソリューション",
      items: [
        {
          name: "デジタル変革支援",
          description: "AI活用、業務自動化、市民向けアプリ開発",
          benefits: "業務効率30%向上",
          features: ["AI導入支援", "プロセス最適化", "システム統合"],
          icon: Cpu,
        },
        {
          name: "インフラ計画・設計",
          description: "スマートシティ、IoTセンサー網、データ基盤",
          benefits: "運用コスト25%削減",
          features: ["IoT設計", "データ基盤", "監視システム"],
          icon: Building,
        },
        {
          name: "公共セクターコンサルティング",
          description: "政策立案、制度設計、効果測定",
          benefits: "意思決定の迅速化",
          features: ["政策分析", "KPI設計", "効果測定"],
          icon: BarChart,
        },
      ],
      cta: "すべてのサービス →",
    },
    projects: {
      title: "プロジェクト実績",
      subtitle: "全国の自治体で実証された確かな成果",
      categories: ["スマートシティ", "行政DX", "インフラ最適化"],
      featured: [
        {
          title: "A市スマートシティプロジェクト",
          category: "スマートシティ",
          budget: "5億円",
          duration: "18ヶ月",
          savings: "年間3,000万円削減",
          satisfaction: "98%",
          description: "IoTセンサーとAI分析による交通最適化と市民サービス向上を実現",
          image: "/placeholder.svg?height=600&width=800&text=Smart+City",
          results: ["交通渋滞30%削減", "CO2排出量20%削減", "市民満足度向上"],
        },
        {
          title: "B県行政DX推進事業",
          category: "行政DX",
          budget: "3億円",
          duration: "12ヶ月",
          savings: "業務時間40%短縮",
          satisfaction: "96%",
          description: "申請手続きの完全デジタル化と職員業務の自動化を実現",
          image: "/placeholder.svg?height=600&width=800&text=Digital+Government",
          results: ["申請処理時間80%短縮", "ペーパーレス化達成", "職員満足度向上"],
        },
        {
          title: "C市インフラ統合管理",
          category: "インフラ最適化",
          budget: "2億円",
          duration: "15ヶ月",
          savings: "保守費用35%削減",
          satisfaction: "99%",
          description: "上下水道・電力・通信インフラの統合監視システム構築",
          image: "/placeholder.svg?height=600&width=800&text=Infrastructure",
          results: ["障害対応時間50%短縮", "予防保守実現", "24時間監視体制"],
        },
      ],
      testimonials: [
        {
          quote: "AEGIS LLPの技術力と提案力により、想定以上の成果を得ることができました。",
          author: "A市 情報政策課長",
          position: "田中様",
        },
        {
          quote: "市民サービスの向上と業務効率化を同時に実現できた画期的なプロジェクトでした。",
          author: "B県 デジタル推進室長",
          position: "佐藤様",
        },
      ],
      metrics: ["50+ 完了プロジェクト", "15 自治体パートナー", "99% 満足度"],
    },
    whyChoose: {
      title: "なぜAEGIS LLPが選ばれるのか",
      subtitle: "6つの強み",
      advantages: [
        {
          title: "実績豊富",
          description: "50+完了プロジェクト",
          detail: "全国の自治体での豊富な実績",
          icon: Award,
        },
        {
          title: "技術先進",
          description: "最新AI/IoT技術導入事例",
          detail: "常に最新技術を活用した解決策",
          icon: Cpu,
        },
        {
          title: "総合力",
          description: "9社連携の具体的メリット",
          detail: "多角的なアプローチで課題解決",
          icon: Users,
        },
        {
          title: "継続サポート",
          description: "24/7保守体制",
          detail: "導入後も安心のサポート体制",
          icon: Headphones,
        },
        {
          title: "地域密着",
          description: "全国15拠点ネットワーク",
          detail: "地域特性を理解したサービス",
          icon: MapPin,
        },
        {
          title: "コスト効率",
          description: "平均30%のコスト削減実績",
          detail: "投資対効果を重視した提案",
          icon: TrendingUp,
        },
      ],
    },
    successStories: {
      title: "成功事例",
      subtitle: "数字で見る改善効果",
      stories: [
        {
          metric: "運用コスト",
          before: "年間5,000万円",
          after: "年間3,500万円",
          improvement: "30%削減",
          chart: "cost",
        },
        {
          metric: "処理時間",
          before: "15日",
          after: "3日",
          improvement: "80%短縮",
          chart: "time",
        },
        {
          metric: "市民満足度",
          before: "65%",
          after: "92%",
          improvement: "+27ポイント",
          chart: "satisfaction",
        },
      ],
    },
    members: {
      title: "グループの力",
      description: "9社のメンバー企業が連携し、総合的なソリューションを提供しています。",
      stat: "9社のメンバー企業",
    },
    technology: {
      title: "技術・DX",
      subtitle: "最先端技術で行政サービスを革新",
      items: ["AI統合ソリューション", "IoTインフラ", "クラウド基盤", "データ分析"],
      timeline: [
        { year: "2024", tech: "生成AI活用システム", description: "自然言語処理による業務支援" },
        { year: "2023", tech: "IoT統合プラットフォーム", description: "センサーネットワークの一元管理" },
        { year: "2022", tech: "クラウドネイティブ基盤", description: "スケーラブルなインフラ構築" },
      ],
      certifications: ["ISO27001", "ISMS認証", "プライバシーマーク"],
      cta: "技術詳細 →",
    },
    news: {
      title: "最新情報",
      subtitle: "AEGIS LLPからのお知らせ",
      items: [
        {
          date: "2024.12.15",
          title: "新サービス「AI行政アシスタント」提供開始",
          description: "生成AIを活用した行政業務支援サービスの提供を開始しました。",
          category: "サービス",
        },
        {
          date: "2024.12.10",
          title: "D市とのスマートシティ構築プロジェクト開始",
          description: "D市と共同で次世代スマートシティの構築プロジェクトを開始しました。",
          category: "プロジェクト",
        },
        {
          date: "2024.12.05",
          title: "「地方創生DXセミナー」開催のお知らせ",
          description: "地方自治体向けのDX推進セミナーを2025年1月に開催します。",
          category: "イベント",
        },
      ],
      cta: "もっと見る →",
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "プロジェクトのご相談や資料請求はこちらから",
      form: {
        name: "お名前",
        company: "組織名",
        email: "メールアドレス",
        message: "お問い合わせ内容",
        submit: "送信する",
      },
    },
  }

  const heroSlides = content.hero.slides
  const projectSlides = content.projects.featured
  const successSlides = content.successStories.stories
  const newsItems = content.news.items

  // Auto-advance hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  // Auto-advance project carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectSlide((prev) => (prev + 1) % projectSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [projectSlides.length])

  // Auto-advance success stories carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setSuccessSlide((prev) => (prev + 1) % successSlides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [successSlides.length])

  // Auto-advance news carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setNewsSlide((prev) => (prev + 1) % newsItems.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [newsItems.length])

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section with Background */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=700&width=1920&text=Digital+City+Background"
            alt="Digital City"
            width={1920}
            height={700}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-tight mb-4">
                {heroSlides[heroSlide].title1}
              </h1>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6">
                {heroSlides[heroSlide].title2}
              </h2>
              <p className="text-xl text-gray-600 mb-8">{heroSlides[heroSlide].subtitle}</p>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8">
                <Button className="bg-[#0891b2] hover:bg-[#0891b2]/90 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all">
                  {heroSlides[heroSlide].cta}
                </Button>

                <div className="flex items-center space-x-4 pl-4 sm:pl-8 border-l-2 border-gray-200">
                  <div className="text-4xl font-bold text-black">{heroSlides[heroSlide].stat.number}</div>
                  <div className="text-sm text-gray-600">{heroSlides[heroSlide].stat.label}</div>
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setHeroSlide(index)}
                    className={`h-1 transition-all ${index === heroSlide ? "w-12 bg-[#0891b2]" : "w-4 bg-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Creative Image Layout */}
            <div className="relative h-[400px] lg:h-[600px] hidden lg:block">
              {/* Main Image */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white shadow-2xl z-10">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=DX+Innovation"
                  alt="DX Innovation"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Elements */}
              <div className="absolute bottom-20 left-0 w-72 h-48 bg-white shadow-xl z-20 p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">99%</div>
                  <div className="text-sm text-gray-600">顧客満足度</div>
                </div>
              </div>

              {/* Accent Shape */}
              <div className="absolute top-20 left-20 w-32 h-32 bg-[#0891b2]/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Flowchart Style */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-black text-center mb-20">
            AEGIS LLPの歩み
          </h2>

          {/* Desktop Timeline - Flowchart */}
          <div className="hidden md:block relative">
            <div className="max-w-6xl mx-auto">
              {/* Main Container */}
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
                  {content.timeline.items.map((item, index) => (
                    <div key={index} className="flex flex-col items-center" style={{ width: '20%' }}>
                      {/* Year and Label */}
                      <div className="text-center mb-2">
                        <div className="text-2xl font-bold text-black">{item.year}</div>
                        <div className="text-xs text-gray-500 mt-1">{item.highlight}</div>
                      </div>

                      {/* Vertical Line Top */}
                      <div className="w-0.5 h-6 bg-[#0891b2]"></div>

                      {/* Square Node */}
                      <div className="w-20 h-20 bg-[#0891b2] flex items-center justify-center relative z-10">
                        <div className="w-12 h-12 bg-white"></div>
                      </div>

                      {/* Vertical Line Bottom */}
                      <div className="w-0.5 h-10 bg-[#0891b2]"></div>

                      {/* Event Description */}
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
              {content.timeline.items.map((item, index) => (
                <div key={index} className="flex flex-col items-center relative">
                  {/* Year and Label */}
                  <div className="text-center mb-2">
                    <div className="text-xl font-bold text-black">{item.year}</div>
                    <div className="text-xs text-gray-500">{item.highlight}</div>
                  </div>

                  {/* Vertical Line Top */}
                  <div className="w-0.5 h-4 bg-[#0891b2]"></div>

                  {/* Node */}
                  <div className="w-16 h-16 bg-[#0891b2] flex items-center justify-center">
                    <div className="w-10 h-10 bg-white"></div>
                  </div>

                  {/* Vertical Line Bottom */}
                  <div className="w-0.5 h-4 bg-[#0891b2]"></div>

                  {/* Event Description */}
                  <div className="bg-gray-50 p-4 text-center w-72">
                    <p className="text-xs text-gray-700">{item.event}</p>
                  </div>

                  {/* Down Arrow (except last) */}
                  {index < content.timeline.items.length - 1 && (
                    <div className="mt-4">
                      <ChevronDown className="w-5 h-5 text-[#0891b2]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Video Background */}
      <section className="py-20 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/sample.mp4" type="video/mp4" />
            <Image
              src="/placeholder.svg?height=800&width=1920&text=Services+Background"
              alt="Services Background"
              width={1920}
              height={800}
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {content.services.title}
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {content.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.services.items.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="group relative">
                  <div className="bg-white/95 backdrop-blur p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gray-100 flex items-center justify-center group-hover:bg-[#0891b2] transition-colors">
                        <Icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-black mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-[#0891b2] font-semibold mb-6">{service.benefits}</div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#0891b2] mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <a href={`/services/${index}`} className="inline-flex items-center text-black font-semibold hover:text-[#0891b2] transition-colors group">
                      詳細を見る
                      <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg transition-all">
              {content.services.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section with Overlapping Images */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              {content.projects.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.projects.subtitle}
            </p>

            {/* Project Categories */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {content.projects.categories.map((category, index) => (
                <span key={index} className="px-4 py-2 bg-white text-gray-700 font-medium border border-gray-200 hover:border-black hover:text-black transition-colors cursor-pointer">
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Project with Creative Layout */}
          <div className="relative mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Project Images - Creative Overlapping Layout */}
              <div className="relative h-[400px] lg:h-[500px] order-2 lg:order-1">
                <div className="absolute top-0 left-0 w-full h-96 bg-gray-100 shadow-xl z-10">
                  <Image
                    src={projectSlides[projectSlide].image}
                    alt={projectSlides[projectSlide].title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Results Card Overlay */}
                <div className="absolute bottom-0 right-0 w-80 bg-white shadow-2xl z-20 p-6 border border-gray-100">
                  <h4 className="font-bold text-black mb-4">主な成果</h4>
                  <div className="space-y-2">
                    {projectSlides[projectSlide].results.map((result, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-[#0891b2] mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="order-1 lg:order-2 lg:pl-12">
                <div className="mb-4">
                  <span className="inline-block bg-[#0891b2] text-white px-4 py-1 text-sm font-semibold">
                    {projectSlides[projectSlide].category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">
                  {projectSlides[projectSlide].title}
                </h3>
                <p className="text-gray-600 mb-8">{projectSlides[projectSlide].description}</p>

                {/* Project Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="border border-gray-200 p-4">
                    <div className="text-sm text-gray-600 mb-1">予算規模</div>
                    <div className="text-xl font-bold text-black">{projectSlides[projectSlide].budget}</div>
                  </div>
                  <div className="border border-gray-200 p-4">
                    <div className="text-sm text-gray-600 mb-1">期間</div>
                    <div className="text-xl font-bold text-black">{projectSlides[projectSlide].duration}</div>
                  </div>
                  <div className="border border-gray-200 p-4 bg-gray-50">
                    <div className="text-sm text-gray-600 mb-1">削減効果</div>
                    <div className="text-xl font-bold text-[#0891b2]">{projectSlides[projectSlide].savings}</div>
                  </div>
                  <div className="border border-gray-200 p-4 bg-gray-50">
                    <div className="text-sm text-gray-600 mb-1">満足度</div>
                    <div className="text-xl font-bold text-[#0891b2]">{projectSlides[projectSlide].satisfaction}</div>
                  </div>
                </div>

                <Button className="bg-black hover:bg-gray-900 text-white px-8 py-3">
                  詳細を見る
                </Button>
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-center mt-12 space-x-8">
              <button
                onClick={() => setProjectSlide((prev) => (prev - 1 + projectSlides.length) % projectSlides.length)}
                className="p-3 border border-gray-200 hover:border-black transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6 text-black" />
              </button>

              <div className="flex items-center space-x-2">
                {projectSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setProjectSlide(index)}
                    className={`h-1 transition-all ${index === projectSlide ? "w-12 bg-[#0891b2]" : "w-4 bg-gray-300"
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setProjectSlide((prev) => (prev + 1) % projectSlides.length)}
                className="p-3 border border-gray-200 hover:border-black transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.projects.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 relative">
                <div className="absolute top-8 left-8 text-6xl text-gray-200 font-serif">"</div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#0891b2] fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg">{testimonial.quote}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-bold text-black">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section with Video Background */}
      <section className="py-20 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="/sample.mp4" type="video/mp4" />
            <div className="w-full h-full bg-gray-100"></div>
          </video>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              {content.whyChoose.title}
            </h2>
            <p className="text-xl text-gray-600">
              {content.whyChoose.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.whyChoose.advantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <div key={index} className="text-center group bg-white/90 backdrop-blur p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-20 h-20 bg-gray-100 mx-auto mb-6 flex items-center justify-center group-hover:bg-black transition-colors">
                    <Icon className="w-10 h-10 text-gray-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{advantage.title}</h3>
                  <div className="text-[#0891b2] font-semibold mb-3">{advantage.description}</div>
                  <p className="text-gray-600">{advantage.detail}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">{content.successStories.title}</h2>
            <p className="text-xl text-gray-600">{content.successStories.subtitle}</p>
          </div>

          <div className="bg-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Metrics Display */}
              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-black mb-12">
                  {successSlides[successSlide].metric}
                </h3>

                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-sm text-gray-600 mb-2 font-medium uppercase tracking-wider">
                        導入前
                      </div>
                      <div className="text-2xl font-bold text-gray-800 p-4 bg-gray-50 text-center">
                        {successSlides[successSlide].before}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-2 font-medium uppercase tracking-wider">
                        導入後
                      </div>
                      <div className="text-2xl font-bold text-[#0891b2] p-4 bg-[#0891b2]/10 text-center">
                        {successSlides[successSlide].after}
                      </div>
                    </div>
                  </div>

                  {/* Improvement Highlight */}
                  <div className="text-center p-6 border-2 border-[#0891b2]">
                    <div className="text-4xl font-bold text-[#0891b2] mb-2">
                      {successSlides[successSlide].improvement}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wider">
                      改善効果
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Chart Area */}
              <div className="bg-gray-100 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 bg-white shadow-lg flex items-center justify-center">
                    <BarChart className="w-24 h-24 text-[#0891b2]" />
                  </div>
                  <p className="text-gray-600">データ可視化</p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories Carousel Controls */}
          <div className="flex justify-center mt-8 space-x-2">
            {successSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setSuccessSlide(index)}
                className={`h-1 transition-all ${index === successSlide ? "w-12 bg-[#0891b2]" : "w-4 bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Member Companies Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">{content.members.title}</h2>
              <p className="text-xl text-gray-600 mb-8">{content.members.description}</p>
              <div className="inline-block">
                <div className="text-6xl font-bold text-[#0891b2] mb-2">9</div>
                <div className="text-lg text-gray-700">専門企業</div>
              </div>
            </div>

            {/* Right - Company Logos Grid */}
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="bg-gray-50 p-6 h-24 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all border border-gray-100">
                  <Image
                    src="/placeholder.svg?height=60&width=120&text=Logo"
                    alt={`Company ${index + 1}`}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section with Video Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/sample.mp4" type="video/mp4" />
            <div className="w-full h-full bg-black"></div>
          </video>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-white">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">{content.technology.title}</h2>
              <p className="text-xl text-gray-300 mb-12">{content.technology.subtitle}</p>

              <div className="space-y-4 mb-12">
                {content.technology.items.map((tech, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur flex items-center justify-center mr-4 group-hover:bg-[#0891b2] transition-colors">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg">{tech}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-[#0891b2] hover:bg-[#0891b2]/90 text-white px-8 py-3 text-lg">
                {content.technology.cta}
              </Button>
            </div>

            <div>
              {/* Technology Timeline */}
              <div className="bg-white/10 backdrop-blur p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  技術ロードマップ
                </h3>
                <div className="space-y-6">
                  {content.technology.timeline.map((item, index) => (
                    <div key={index} className="border-l-2 border-[#0891b2] pl-6 ml-2">
                      <div className="text-[#0891b2] font-bold text-xl mb-2">{item.year}</div>
                      <div className="text-lg font-semibold mb-1 text-white">{item.tech}</div>
                      <div className="text-gray-300 text-sm">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-8 p-6 bg-white/10 backdrop-blur">
                <h4 className="text-lg font-bold mb-4 text-white">認証・資格</h4>
                <div className="flex flex-wrap gap-3">
                  {content.technology.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center bg-white/20 px-4 py-2 text-white">
                      <Shield className="w-4 h-4 text-[#0891b2] mr-2" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              {content.news.title}
            </h2>
            <p className="text-xl text-gray-600">
              {content.news.subtitle}
            </p>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {newsItems.map((item, index) => (
              <article key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">{item.date}</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#0891b2] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{item.description}</p>

                  <a href="#" className="inline-flex items-center text-black font-semibold hover:text-[#0891b2] transition-colors">
                    続きを読む
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3">
              {content.news.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">{content.contact.title}</h2>
            <p className="text-xl text-gray-600">{content.contact.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{content.contact.form.name}</label>
                  <Input className="w-full h-12 border-gray-300 focus:border-[#0891b2] focus:ring-[#0891b2]" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{content.contact.form.company}</label>
                  <Input className="w-full h-12 border-gray-300 focus:border-[#0891b2] focus:ring-[#0891b2]" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{content.contact.form.email}</label>
                  <Input type="email" className="w-full h-12 border-gray-300 focus:border-[#0891b2] focus:ring-[#0891b2]" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{content.contact.form.message}</label>
                  <Textarea className="w-full h-32 border-gray-300 focus:border-[#0891b2] focus:ring-[#0891b2] resize-none" />
                </div>

                <Button className="w-full bg-[#0891b2] hover:bg-[#0891b2]/90 text-white h-12 text-lg">
                  {content.contact.form.submit}
                </Button>
              </form>
            </div>

            {/* Contact Info with Creative Layout */}
            <div className="relative">
              {/* Map Background */}
              <div className="absolute inset-0 bg-gray-200"></div>

              {/* Info Cards Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-center p-8">
                <div className="bg-white p-8 shadow-xl mb-6">
                  <h3 className="text-xl font-bold text-black mb-6">
                    連絡先情報
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-[#0891b2] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black">本社</p>
                        <p className="text-gray-600">東京都千代田区丸の内1-1-1</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-[#0891b2] mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black">03-1234-5678</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-[#0891b2] mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black">info@aegis-llp.jp</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0891b2] text-white p-6 shadow-xl">
                  <div className="flex items-center mb-3">
                    <Clock className="w-5 h-5 mr-3" />
                    <h4 className="font-bold">営業時間</h4>
                  </div>
                  <p className="text-sm mb-1">平日: 9:00 - 17:00</p>
                  <p className="text-sm">土曜: 9:00 - 12:00 (緊急対応のみ)</p>
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