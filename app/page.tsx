import Header from '@/components/Header'
import Particles from '@/components/Particles'
import Hero from '@/components/Hero'
import ScrollRig from '@/components/ScrollRig'
import AnalyticCard from '@/components/AnalyticCard'
import SkeletonCard from '@/components/SkeletonCard'

const articles = [
  { title: 'تحلیل ساختار قدرت در منطقه', tag: 'ژئوپلیتیک', excerpt: 'مروری بر چینش جدید بازیگران و پیامدها برای ایران.' },
  { title: 'اقتصاد انرژی و اهرم‌ها', tag: 'اقتصادی', excerpt: 'تغییرات بازار انرژی و فرصت‌های راهبردی.' },
  { title: 'روایت رسانه و تصویر ایران', tag: 'رسانه', excerpt: 'چگونه قاب‌بندی اخبار افکار عمومی را شکل می‌دهد.' },
]

export default function Home() {
  return (
    <main className="relative">
      {/* پس‌زمینه ذرات */}
      <Particles />
      {/* اسکرول نرم و پارالاکس */}
      <ScrollRig />
      {/* هدر */}
      <Header />

      {/* بخش قهرمان */}
      <Hero />

      {/* ویژگی‌ها */}
      <section id="features" className="section-snap min-h-screen container py-20">
        <h2 className="text-2xl md:text-3xl font-bold holo">ویژگی‌های تجربه</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            { title: 'پس‌زمینه ذرات و پارالاکس', desc: 'واکنش به موس، خطوط اتصال، همگام با تم.' },
            { title: 'هدر شفاف با افکت شیشه', desc: 'چسبان، سایه نرم و تغییر رنگ هنگام اسکرول.' },
            { title: 'حالت شب/روز', desc: 'سوئیچ لطیف با سینک رنگ آیکن و ذرات.' },
            { title: 'تایپوگرافی فارسی', desc: 'فونت متغیر، کرنینگ و ارتفاع‌خط متعادل.' },
            { title: 'لوگو هولوگرافیک', desc: 'گرادیان متحرک با hue-rotate و درخشش.' },
            { title: 'گلس/نئومورفیسم', desc: 'کارت‌ها و دکمه‌ها با عمق واقعی.' },
            { title: 'GSAP استیجرینگ', desc: 'ورود ریتمیک هدر، تیترها و کارت‌ها.' },
            { title: 'افکت تایپ شعار', desc: 'نشانگر چشمک‌زن و سرعت متعادل.' },
            { title: 'اسکرول سینمایی', desc: 'اسکرول‌اسنپ نرم و پارالاکس عمقی.' },
            { title: 'میکرواینترکشن', desc: 'هایلایت لینک‌ها، لایت‌سوئیپ تیترها.' },
            { title: 'لودر/اسکلتون', desc: 'بارگذاری بی‌درز و حس پویایی.' },
            { title: 'دسترسی‌پذیری', desc: 'فوکوس‌رینگ ظریف، کنتراست استاندارد.' },
          ].map((f, i) => (
            <div key={i} className="glass rounded-3xl p-5">
              <h3 className="font-bold">{f.title}</h3>
              <p className="text-sm text-[color:var(--muted)] mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* مقالات */}
      <section id="articles" className="section-snap min-h-screen container py-20">
        <h2 className="text-2xl md:text-3xl font-bold">تازه‌ترین تحلیل‌ها</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {articles.length === 0
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
            : articles.map((a, i) => <AnalyticCard key={i} {...a} />)
          }
        </div>
      </section>

      {/* فوتر */}
      <footer id="about" className="section-snap container py-16 text-sm text-[color:var(--muted)]">
        <div className="glass rounded-3xl p-6">
          <p>نمایش تاریخ امروز: {
            new Intl.DateTimeFormat('fa-IR', { dateStyle: 'full' }).format(new Date())
          }</p>
          <p className="mt-2">© {new Date().getFullYear()} سیاست‌نما. همه حقوق محفوظ است.</p>
        </div>
      </footer>
    </main>
  )
}
