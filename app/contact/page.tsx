"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    ArrowRight,
    Calendar,
    ChevronRight,
    Clock,
    Globe,
    Headphones,
    Mail,
    MapPin,
    MessageSquare,
    Navigation,
    Phone,
    Send,
    Sparkles
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        organization: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const [selectedOffice, setSelectedOffice] = useState(0)

    const offices = [
        {
            id: 0,
            name: "本社",
            region: "関東",
            address: "〒100-0005 東京都千代田区丸の内1-1-1",
            phone: "03-1234-5678",
            fax: "03-1234-5679",
            email: "tokyo@aegis-llp.jp",
            hours: "平日 9:00-17:00",
            mapCoordinates: { lat: 35.6812, lng: 139.7671 },
            image: "/placeholder.svg?height=400&width=600&text=Tokyo+Office",
            features: ["駐車場完備", "バリアフリー対応", "会議室10室"],
        },
        {
            id: 1,
            name: "関西支社",
            region: "関西",
            address: "〒530-0001 大阪府大阪市北区梅田1-1-1",
            phone: "06-1234-5678",
            fax: "06-1234-5679",
            email: "osaka@aegis-llp.jp",
            hours: "平日 9:00-17:00",
            mapCoordinates: { lat: 34.6937, lng: 135.5023 },
            image: "/placeholder.svg?height=400&width=600&text=Osaka+Office",
            features: ["駐車場完備", "バリアフリー対応", "会議室5室"],
        },
        {
            id: 2,
            name: "九州支社",
            region: "九州",
            address: "〒812-0011 福岡県福岡市博多区博多駅前1-1-1",
            phone: "092-123-4567",
            fax: "092-123-4568",
            email: "fukuoka@aegis-llp.jp",
            hours: "平日 9:00-17:00",
            mapCoordinates: { lat: 33.5904, lng: 130.4017 },
            image: "/placeholder.svg?height=400&width=600&text=Fukuoka+Office",
            features: ["駐車場完備", "バリアフリー対応", "会議室3室"],
        },
    ]

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log("Form submitted:", formData)
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[500px] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a365d] to-black">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
                            animation: "slide 20s linear infinite",
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <div className="text-center text-white">
                        <h1 className="text-6xl lg:text-7xl font-bold mb-6">
                            お問い合わせ
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
                            プロジェクトのご相談から技術的なご質問まで<br />
                            お気軽にお問い合わせください
                        </p>
                    </div>
                </div>

                <style jsx>{`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(70px); }
          }
        `}</style>
            </section>

            {/* Quick Contact Options - Creative Poster Design */}
            <section className="py-32 bg-white relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-20 right-0 text-[200px] font-bold text-gray-50 select-none vertical-text">CONTACT</div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#0891b2]/5 to-transparent rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bold text-black mb-4">お問い合わせ内容</h2>
                        <p className="text-xl text-gray-600">ご相談内容に応じて最適な窓口をお選びください</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Project Consultation Card */}
                        <div className="relative group cursor-pointer transform hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#0891b2] to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                            <div className="relative bg-gray-50 p-8 h-full overflow-hidden">
                                {/* Vertical Text Background */}
                                <div className="absolute -right-8 top-0 bottom-0 text-6xl font-bold text-gray-100 vertical-text tracking-wider select-none">PROJECT</div>

                                {/* Number */}
                                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#0891b2] flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                                    01
                                </div>

                                <div className="relative z-10 pt-8">
                                    <MessageSquare className="w-16 h-16 text-[#0891b2] mb-6 transform group-hover:scale-110 transition-transform" />
                                    <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#0891b2] transition-colors">
                                        プロジェクト<br />相談
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        新規プロジェクトの<br />
                                        ご相談や見積もり依頼
                                    </p>
                                </div>

                                {/* Hover Effect Arrow */}
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <ArrowRight className="w-6 h-6 text-[#0891b2]" />
                                </div>
                            </div>
                        </div>

                        {/* Technical Support Card */}
                        <div className="relative group cursor-pointer lg:mt-12 transform hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#0891b2] to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                            <div className="relative bg-black text-white p-8 h-full overflow-hidden">
                                {/* Pattern Background */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 15px)`,
                                    }}></div>
                                </div>

                                {/* Number */}
                                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white flex items-center justify-center text-black font-bold text-2xl shadow-lg">
                                    02
                                </div>

                                <div className="relative z-10 pt-8">
                                    <Headphones className="w-16 h-16 text-[#0891b2] mb-6 transform group-hover:scale-110 transition-transform" />
                                    <h3 className="text-2xl font-bold mb-3">
                                        技術<br />サポート
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        既存システムの<br />
                                        サポートやトラブル対応
                                    </p>
                                </div>

                                {/* Vertical Accent */}
                                <div className="absolute bottom-0 right-4 w-1 h-32 bg-[#0891b2] transform group-hover:h-40 transition-all duration-300"></div>
                            </div>
                        </div>

                        {/* Demo Sessions Card */}
                        <div className="relative group cursor-pointer transform hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#0891b2] to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                            <div className="relative bg-[#0891b2] text-white p-8 h-full overflow-hidden">
                                {/* Geometric Shape */}
                                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 transform rotate-45"></div>

                                {/* Number */}
                                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white flex items-center justify-center text-[#0891b2] font-bold text-2xl shadow-lg">
                                    03
                                </div>

                                <div className="relative z-10 pt-8">
                                    <Calendar className="w-16 h-16 text-white mb-6 transform group-hover:scale-110 transition-transform" />
                                    <h3 className="text-2xl font-bold mb-3">
                                        デモ・<br />説明会
                                    </h3>
                                    <p className="text-white/90 text-sm leading-relaxed">
                                        サービスのデモや<br />
                                        説明会の申込
                                    </p>
                                </div>

                                {/* Horizontal Lines */}
                                <div className="absolute bottom-4 left-0 right-0 flex gap-2 px-8">
                                    <div className="flex-1 h-0.5 bg-white/30"></div>
                                    <div className="flex-1 h-0.5 bg-white/30"></div>
                                    <div className="flex-1 h-0.5 bg-white/30"></div>
                                </div>
                            </div>
                        </div>

                        {/* Partnership Card */}
                        <div className="relative group cursor-pointer lg:mt-12 transform hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#0891b2] to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                            <div className="relative border-2 border-gray-200 bg-white p-8 h-full overflow-hidden group-hover:border-[#0891b2] transition-colors">
                                {/* Circle Background */}
                                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gray-50 group-hover:bg-[#0891b2]/10 transition-colors"></div>

                                {/* Number */}
                                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gray-900 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                                    04
                                </div>

                                <div className="relative z-10 pt-8">
                                    <Globe className="w-16 h-16 text-[#0891b2] mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                                    <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#0891b2] transition-colors">
                                        パートナー<br />シップ
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        事業提携や<br />
                                        パートナーシップのご提案
                                    </p>
                                </div>

                                {/* Corner Accent */}
                                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-b-[40px] border-b-[#0891b2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-16">
                        <p className="text-gray-600 mb-6">どのカテゴリーに該当するかご不明な場合は、お気軽にお問い合わせください</p>
                        <Button variant="outline" className="border-[#0891b2] text-[#0891b2] hover:bg-[#0891b2] hover:text-white">
                            一般的なお問い合わせ
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <style jsx>{`
          .vertical-text {
            writing-mode: vertical-rl;
            text-orientation: mixed;
          }
        `}</style>
            </section>

            {/* Main Contact Section with Map */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <div className="mb-12">
                                <h2 className="text-4xl font-bold text-black mb-4">
                                    お問い合わせフォーム
                                </h2>
                                <p className="text-gray-600">
                                    必要事項をご記入の上、送信してください。<br />
                                    2営業日以内にご連絡いたします。
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            お名前 <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full border-gray-300 focus:border-[#0891b2] focus:ring-[#0891b2]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            組織名 <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            type="text"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full border-gray-300 focus:border-[#0891b2] focus:ring-[#0891b2]"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            メールアドレス <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full border-gray-300 focus:border-[#0891b2] focus:ring-[#0891b2]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            電話番号
                                        </label>
                                        <Input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full border-gray-300 focus:border-[#0891b2] focus:ring-[#0891b2]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        件名 <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full border-gray-300 focus:border-[#0891b2] focus:ring-[#0891b2]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        お問い合わせ内容 <span className="text-red-500">*</span>
                                    </label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full border-gray-300 focus:border-[#0891b2] focus:ring-[#0891b2]"
                                    />
                                </div>

                                <div className="bg-gray-50 p-4">
                                    <p className="text-sm text-gray-600">
                                        <span className="text-red-500">*</span> は必須項目です
                                    </p>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-[#0891b2] hover:bg-[#0891b2]/90 text-white py-3 text-lg font-semibold"
                                >
                                    送信する
                                    <Send className="ml-2 w-5 h-5" />
                                </Button>
                            </form>
                        </div>

                        {/* Map Section */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-4xl font-bold text-black mb-4">
                                    アクセス
                                </h2>
                                <p className="text-gray-600">
                                    全国15拠点でお客様をサポートいたします
                                </p>
                            </div>

                            {/* Office Selector */}
                            <div className="flex gap-4 mb-6 flex-wrap">
                                {offices.map((office, index) => (
                                    <button
                                        key={office.id}
                                        onClick={() => setSelectedOffice(index)}
                                        className={`px-6 py-3 font-medium transition-all ${selectedOffice === index
                                                ? "bg-[#0891b2] text-white shadow-lg"
                                                : "bg-white text-gray-700 border border-gray-300 hover:border-[#0891b2]"
                                            }`}
                                    >
                                        {office.name}
                                    </button>
                                ))}
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-gray-100 h-[400px] mb-6 relative overflow-hidden group">
                                <Image
                                    src="/placeholder.svg?height=400&width=800&text=Map+Location"
                                    alt="Map"
                                    width={800}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Navigation className="w-5 h-5" />
                                            <span className="font-bold">クリックして地図アプリで開く</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Office Details */}
                            <div className="bg-gray-50 p-8">
                                <h3 className="text-2xl font-bold text-black mb-4">
                                    {offices[selectedOffice].name}
                                </h3>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-[#0891b2] mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-black">住所</p>
                                            <p className="text-gray-600">{offices[selectedOffice].address}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Phone className="w-5 h-5 text-[#0891b2] mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-black">電話番号</p>
                                            <p className="text-gray-600">
                                                TEL: {offices[selectedOffice].phone}<br />
                                                FAX: {offices[selectedOffice].fax}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Mail className="w-5 h-5 text-[#0891b2] mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-black">メールアドレス</p>
                                            <p className="text-gray-600">{offices[selectedOffice].email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-[#0891b2] mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-black">営業時間</p>
                                            <p className="text-gray-600">{offices[selectedOffice].hours}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t pt-4">
                                    <p className="font-medium text-black mb-2">設備</p>
                                    <div className="flex flex-wrap gap-2">
                                        {offices[selectedOffice].features.map((feature, index) => (
                                            <span key={index} className="bg-white px-3 py-1 text-sm text-gray-700 border border-gray-300">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Support Section */}
            <section className="py-20 bg-gradient-to-br from-[#0891b2] to-[#0e7490] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, white 0%, transparent 50%)`,
                    }}></div>
                </div>

                <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center text-white">
                        <Headphones className="w-16 h-16 mx-auto mb-6" />
                        <h2 className="text-4xl font-bold mb-4">
                            24時間緊急サポート
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            既存のお客様向けに、システム障害や緊急時の<br />
                            技術サポートを24時間365日提供しています
                        </p>

                        <div className="bg-white/10 backdrop-blur inline-block px-8 py-6">
                            <p className="text-lg mb-2">緊急サポート専用ダイヤル</p>
                            <p className="text-3xl font-bold">03-1234-5679</p>
                            <p className="text-sm mt-2 text-white/80">※ご契約のお客様専用</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-black mb-4">
                            よくあるご質問
                        </h2>
                        <p className="text-xl text-gray-600">
                            お問い合わせの前にご確認ください
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-8 shadow-lg">
                            <h3 className="text-xl font-bold text-black mb-3 flex items-center">
                                <ChevronRight className="w-5 h-5 text-[#0891b2] mr-2" />
                                相談や見積もりは無料ですか？
                            </h3>
                            <p className="text-gray-600 ml-7">
                                はい、初回のご相談とお見積もりは無料で承っております。
                                お気軽にお問い合わせください。
                            </p>
                        </div>

                        <div className="bg-white p-8 shadow-lg">
                            <h3 className="text-xl font-bold text-black mb-3 flex items-center">
                                <ChevronRight className="w-5 h-5 text-[#0891b2] mr-2" />
                                オンラインでの打ち合わせは可能ですか？
                            </h3>
                            <p className="text-gray-600 ml-7">
                                はい、Zoom、Teams、Google Meetなど各種オンライン会議ツールに対応しております。
                                遠方のお客様もお気軽にご相談ください。
                            </p>
                        </div>

                        <div className="bg-white p-8 shadow-lg">
                            <h3 className="text-xl font-bold text-black mb-3 flex items-center">
                                <ChevronRight className="w-5 h-5 text-[#0891b2] mr-2" />
                                対応可能な地域を教えてください
                            </h3>
                            <p className="text-gray-600 ml-7">
                                全国の地方自治体様に対応しております。
                                15拠点のネットワークを活かし、迅速な対応が可能です。
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Button
                            variant="outline"
                            className="border-[#0891b2] text-[#0891b2] hover:bg-[#0891b2] hover:text-white"
                        >
                            すべてのFAQを見る
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0891b2]/20 to-transparent"></div>

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <Sparkles className="w-12 h-12 text-[#0891b2] mx-auto mb-6" />
                    <h2 className="text-5xl font-bold text-white mb-8">
                        まずはお気軽に<br />
                        ご相談ください
                    </h2>
                    <p className="text-xl text-gray-300 mb-12">
                        専門スタッフが貴自治体の課題を丁寧にヒアリングし、<br />
                        最適なソリューションをご提案いたします
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            size="lg"
                            className="bg-[#0891b2] hover:bg-[#0891b2]/90 text-white px-10 py-6 text-lg font-semibold"
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            電話で相談する
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/30 text-white hover:bg-white hover:text-black px-10 py-6 text-lg font-semibold backdrop-blur-sm"
                        >
                            <Mail className="mr-2 w-5 h-5" />
                            メールで相談する
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}