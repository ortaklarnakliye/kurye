import { Metadata } from "next";
import { notFound } from "next/navigation";
import { TruckIcon, PhoneIcon, ClockIcon, ShieldCheckIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const districts = {
  kadikoy: {
    name: "Kadıköy",
    title: "Kadıköy Mobil Taşıma ve Kurye Hizmetleri",
    description: "Kadıköy'de profesyonel mobil taşıma, kurye ve nakliyat hizmetleri. Ev ve ofis taşıma, paket teslimat ve daha fazlası için 7/24 hizmetinizdeyiz.",
    content: "Kadıköy bölgesinde güvenilir ve hızlı mobil taşıma hizmetleri sunuyoruz. Profesyonel ekibimiz ve modern araç filomuzla eşyalarınızı özenle taşıyor, değerli kargolarınızı zamanında teslim ediyoruz."
  },
  besiktas: {
    name: "Beşiktaş",
    title: "Beşiktaş Mobil Taşıma ve Kurye Hizmetleri",
    description: "Beşiktaş'ta güvenilir mobil taşıma ve kurye hizmetleri. Ev taşıma, ofis taşıma ve express kurye hizmetleri için 7/24 yanınızdayız.",
    content: "Beşiktaş'ta profesyonel nakliyat ve kurye çözümleri sunuyoruz. Deneyimli ekibimiz ve modern araçlarımızla tüm taşıma ihtiyaçlarınız için hizmetinizdeyiz."
  },
  uskudar: {
    name: "Üsküdar",
    title: "Üsküdar Mobil Taşıma ve Kurye Hizmetleri",
    description: "Üsküdar'da güvenilir ev ve ofis taşıma hizmetleri. Profesyonel ekip ve modern araçlarla 7/24 hizmetinizdeyiz.",
    content: "Üsküdar'da kaliteli ve güvenilir taşımacılık hizmetleri sunuyoruz. Uzman kadromuz ve geniş araç filomuzla her türlü taşıma ihtiyacınızı karşılıyoruz."
  },
  sisli: {
    name: "Şişli",
    title: "Şişli Mobil Taşıma ve Kurye Hizmetleri",
    description: "Şişli'de profesyonel mobil taşıma ve kurye hizmetleri. Güvenilir ve hızlı çözümler için bizi arayın.",
    content: "Şişli bölgesinde modern ve güvenilir taşımacılık hizmetleri veriyoruz. Eşyalarınızı özenle taşıyor, değerli kargolarınızı güvenle teslim ediyoruz."
  },
  beyoglu: {
    name: "Beyoğlu",
    title: "Beyoğlu Mobil Taşıma ve Kurye Hizmetleri",
    description: "Beyoğlu'nda profesyonel nakliyat ve kurye hizmetleri. Hızlı ve güvenilir teslimat için 7/24 yanınızdayız.",
    content: "Beyoğlu'nda kaliteli ve güvenilir taşımacılık çözümleri sunuyoruz. Deneyimli ekibimizle tüm taşıma ihtiyaçlarınızı karşılıyoruz."
  },
  atasehir: {
    name: "Ataşehir",
    title: "Ataşehir Mobil Taşıma ve Kurye Hizmetleri",
    description: "Ataşehir'de güvenilir ev ve ofis taşıma hizmetleri. Modern araç filomuzla 7/24 hizmetinizdeyiz.",
    content: "Ataşehir'de profesyonel taşımacılık hizmetleri veriyoruz. Uzman kadromuzla eşyalarınızı özenle taşıyor, zamanında teslim ediyoruz."
  },
  maltepe: {
    name: "Maltepe",
    title: "Maltepe Mobil Taşıma ve Kurye Hizmetleri",
    description: "Maltepe'de güvenilir nakliyat ve kurye hizmetleri. Ev taşıma, ofis taşıma ve express kurye için bizi arayın.",
    content: "Maltepe bölgesinde modern ve güvenilir taşımacılık çözümleri sunuyoruz. Profesyonel ekibimizle tüm taşıma ihtiyaçlarınızı karşılıyoruz."
  },
  bakirkoy: {
    name: "Bakırköy",
    title: "Bakırköy Mobil Taşıma ve Kurye Hizmetleri",
    description: "Bakırköy'de profesyonel ev ve ofis taşıma hizmetleri. Güvenilir ve hızlı çözümler için 7/24 yanınızdayız.",
    content: "Bakırköy'de kaliteli ve güvenilir taşımacılık hizmetleri veriyoruz. Modern araç filomuzla eşyalarınızı özenle taşıyoruz."
  },
  beylikduzu: {
    name: "Beylikdüzü",
    title: "Beylikdüzü Mobil Taşıma ve Kurye Hizmetleri",
    description: "Beylikdüzü'nde güvenilir nakliyat ve kurye hizmetleri. Profesyonel ekip ve modern araçlarla hizmetinizdeyiz.",
    content: "Beylikdüzü'nde profesyonel taşımacılık çözümleri sunuyoruz. Deneyimli kadromuzla tüm taşıma ihtiyaçlarınızı karşılıyoruz."
  },
  pendik: {
    name: "Pendik",
    title: "Pendik Mobil Taşıma ve Kurye Hizmetleri",
    description: "Pendik'te güvenilir ev ve ofis taşıma hizmetleri. Hızlı ve profesyonel çözümler için bizi arayın.",
    content: "Pendik bölgesinde modern ve güvenilir taşımacılık hizmetleri veriyoruz. Uzman ekibimizle eşyalarınızı özenle taşıyoruz."
  },
  kartal: {
    name: "Kartal",
    title: "Kartal Mobil Taşıma ve Kurye Hizmetleri",
    description: "Kartal'da profesyonel nakliyat ve kurye hizmetleri. Güvenilir ve hızlı teslimat için 7/24 hizmetinizdeyiz.",
    content: "Kartal'da kaliteli ve güvenilir taşımacılık çözümleri sunuyoruz. Modern araç filomuzla tüm taşıma ihtiyaçlarınızı karşılıyoruz."
  },
  sariyer: {
    name: "Sarıyer",
    title: "Sarıyer Mobil Taşıma ve Kurye Hizmetleri",
    description: "Sarıyer'de güvenilir ev ve ofis taşıma hizmetleri. Profesyonel ekip ve modern araçlarla yanınızdayız.",
    content: "Sarıyer bölgesinde profesyonel taşımacılık hizmetleri veriyoruz. Deneyimli kadromuzla eşyalarınızı özenle taşıyoruz."
  },
  umraniye: {
    name: "Ümraniye",
    title: "Ümraniye Mobil Taşıma ve Kurye Hizmetleri",
    description: "Ümraniye'de profesyonel mobil taşıma ve kurye hizmetleri. Ev ve ofis taşıma, paket teslimat için 7/24 hizmetinizdeyiz.",
    content: "Ümraniye'de güvenilir ve hızlı taşımacılık hizmetleri sunuyoruz. Deneyimli ekibimiz ve modern araç filomuzla eşyalarınızı özenle taşıyoruz."
  },
  fatih: {
    name: "Fatih",
    title: "Fatih Mobil Taşıma ve Kurye Hizmetleri",
    description: "Fatih'te profesyonel nakliyat ve kurye çözümleri. Güvenilir ve hızlı teslimat için 7/24 yanınızdayız.",
    content: "Fatih'te kaliteli ve güvenilir taşımacılık hizmetleri veriyoruz. Uzman kadromuzla tüm taşıma ihtiyaçlarınızı karşılıyoruz."
  },
  zeytinburnu: {
    name: "Zeytinburnu",
    title: "Zeytinburnu Mobil Taşıma ve Kurye Hizmetleri",
    description: "Zeytinburnu'nda güvenilir ev ve ofis taşıma hizmetleri. Modern araç filomuzla 7/24 hizmetinizdeyiz.",
    content: "Zeytinburnu'nda profesyonel taşımacılık hizmetleri sunuyoruz. Deneyimli ekibimizle eşyalarınızı özenle taşıyoruz."
  },
  eyup: {
    name: "Eyüp",
    title: "Eyüp Mobil Taşıma ve Kurye Hizmetleri",
    description: "Eyüp'te güvenilir ev ve ofis taşıma hizmetleri. Profesyonel ekip ve modern araçlarla yanınızdayız.",
    content: "Eyüp'te kaliteli ve güvenilir taşımacılık çözümleri sunuyoruz. Uzman kadromuzla tüm taşıma ihtiyaçlarınızı karşılıyoruz."
  },
  kagithane: {
    name: "Kağıthane",
    title: "Kağıthane Mobil Taşıma ve Kurye Hizmetleri",
    description: "Kağıthane'de profesyonel nakliyat çözümleri. Güvenilir ve hızlı teslimat için 7/24 hizmetinizdeyiz.",
    content: "Kağıthane'de modern ve güvenilir taşımacılık hizmetleri veriyoruz. Profesyonel ekibimizle eşyalarınızı özenle taşıyoruz."
  },
  bahcelievler: {
    name: "Bahçelievler",
    title: "Bahçelievler Mobil Taşıma ve Kurye Hizmetleri",
    description: "Bahçelievler'de hızlı ve güvenli taşıma hizmetleri. Modern araç filomuzla 7/24 yanınızdayız.",
    content: "Bahçelievler'de profesyonel taşımacılık çözümleri sunuyoruz. Deneyimli kadromuzla tüm taşıma ihtiyaçlarınızı karşılıyoruz."
  },
  avcilar: {
    name: "Avcılar",
    title: "Avcılar Mobil Taşıma ve Kurye Hizmetleri",
    description: "Avcılar'da profesyonel kurye ve nakliyat hizmetleri. Güvenilir ve hızlı teslimat için bizi arayın.",
    content: "Avcılar'da kaliteli ve güvenilir taşımacılık hizmetleri veriyoruz. Uzman ekibimizle eşyalarınızı özenle taşıyoruz."
  },
  bagcilar: {
    name: "Bağcılar",
    title: "Bağcılar Mobil Taşıma ve Kurye Hizmetleri",
    description: "Bağcılar'da güvenilir taşımacılık çözümleri. Profesyonel ekip ve modern araçlarla hizmetinizdeyiz.",
    content: "Bağcılar'da modern ve güvenilir taşımacılık hizmetleri sunuyoruz. Deneyimli kadromuzla tüm taşıma ihtiyaçlarınızı karşılıyoruz."
  },
  gungoren: {
    name: "Güngören",
    title: "Güngören Mobil Taşıma ve Kurye Hizmetleri",
    description: "Güngören'de ev ve ofis taşıma hizmetleri. Güvenilir ve hızlı çözümler için 7/24 yanınızdayız.",
    content: "Güngören'de profesyonel taşımacılık çözümleri veriyoruz. Uzman ekibimizle eşyalarınızı özenle taşıyoruz."
  },
  esenyurt: {
    name: "Esenyurt",
    title: "Esenyurt Mobil Taşıma ve Kurye Hizmetleri",
    description: "Esenyurt'ta hızlı ve güvenilir nakliyat hizmetleri. Modern araç filomuzla 7/24 hizmetinizdeyiz.",
    content: "Esenyurt'ta kaliteli ve güvenilir taşımacılık hizmetleri sunuyoruz. Profesyonel kadromuzla tüm taşıma ihtiyaçlarınızı karşılıyoruz."
  },
  kucukcekmece: {
    name: "Küçükçekmece",
    title: "Küçükçekmece Mobil Taşıma ve Kurye Hizmetleri",
    description: "Küçükçekmece'de profesyonel taşımacılık çözümleri. Güvenilir ve hızlı teslimat için bizi arayın.",
    content: "Küçükçekmece'de modern ve güvenilir taşımacılık hizmetleri veriyoruz. Deneyimli ekibimizle eşyalarınızı özenle taşıyoruz."
  },
  buyukcekmece: {
    name: "Büyükçekmece",
    title: "Büyükçekmece Mobil Taşıma ve Kurye Hizmetleri",
    description: "Büyükçekmece'de kaliteli nakliyat hizmetleri. Profesyonel ekip ve modern araçlarla yanınızdayız.",
    content: "Büyükçekmece'de güvenilir taşımacılık çözümleri sunuyoruz. Uzman kadromuzla tüm taşıma ihtiyaçlarınızı karşılıyoruz."
  },
  basaksehir: {
    name: "Başakşehir",
    title: "Başakşehir Mobil Taşıma ve Kurye Hizmetleri",
    description: "Başakşehir'de güvenilir taşıma ve kurye hizmetleri. Modern araç filomuzla 7/24 hizmetinizdeyiz.",
    content: "Başakşehir'de profesyonel taşımacılık hizmetleri veriyoruz. Deneyimli ekibimizle eşyalarınızı özenle taşıyoruz."
  },
  sultangazi: {
    name: "Sultangazi",
    title: "Sultangazi Mobil Taşıma ve Kurye Hizmetleri",
    description: "Sultangazi'de profesyonel nakliyat çözümleri. Güvenilir ve hızlı teslimat için bizi arayın.",
    content: "Sultangazi'de kaliteli ve güvenilir taşımacılık hizmetleri sunuyoruz. Uzman kadromuzla tüm taşıma ihtiyaçlarınızı karşılıyoruz."
  },
  gaziosmanpasa: {
    name: "Gaziosmanpaşa",
    title: "Gaziosmanpaşa Mobil Taşıma ve Kurye Hizmetleri",
    description: "Gaziosmanpaşa'da hızlı ve güvenli taşımacılık. Profesyonel ekip ve modern araçlarla hizmetinizdeyiz.",
    content: "Gaziosmanpaşa'da modern ve güvenilir taşımacılık hizmetleri veriyoruz. Deneyimli ekibimizle eşyalarınızı özenle taşıyoruz."
  },
  esenler: {
    name: "Esenler",
    title: "Esenler Mobil Taşıma ve Kurye Hizmetleri",
    description: "Esenler'de ev ve ofis taşıma hizmetleri. Güvenilir ve hızlı çözümler için 7/24 yanınızdayız.",
    content: "Esenler'de profesyonel taşımacılık çözümleri sunuyoruz. Uzman kadromuzla tüm taşıma ihtiyaçlarınızı karşılıyoruz."
  },
  bayrampasa: {
    name: "Bayrampaşa",
    title: "Bayrampaşa Mobil Taşıma ve Kurye Hizmetleri",
    description: "Bayrampaşa'da profesyonel nakliyat çözümleri. Modern araç filomuzla 7/24 hizmetinizdeyiz.",
    content: "Bayrampaşa'da kaliteli ve güvenilir taşımacılık hizmetleri veriyoruz. Deneyimli ekibimizle eşyalarınızı özenle taşıyoruz."
  },
  sultanbeyli: {
    name: "Sultanbeyli",
    title: "Sultanbeyli Mobil Taşıma ve Kurye Hizmetleri",
    description: "Sultanbeyli'de güvenilir taşımacılık hizmetleri. Profesyonel ekip ve modern araçlarla yanınızdayız.",
    content: "Sultanbeyli'de modern ve güvenilir taşımacılık çözümleri sunuyoruz. Uzman kadromuzla tüm taşıma ihtiyaçlarınızı karşılıyoruz."
  },
  sancaktepe: {
    name: "Sancaktepe",
    title: "Sancaktepe Mobil Taşıma ve Kurye Hizmetleri",
    description: "Sancaktepe'de hızlı ve kaliteli nakliyat. Güvenilir ve profesyonel hizmet için bizi arayın.",
    content: "Sancaktepe'de profesyonel taşımacılık hizmetleri veriyoruz. Deneyimli ekibimizle eşyalarınızı özenle taşıyoruz."
  },
  cekmekoy: {
    name: "Çekmeköy",
    title: "Çekmeköy Mobil Taşıma ve Kurye Hizmetleri",
    description: "Çekmeköy'de profesyonel taşıma hizmetleri. Modern araç filomuzla 7/24 hizmetinizdeyiz.",
    content: "Çekmeköy'de kaliteli ve güvenilir taşımacılık çözümleri sunuyoruz. Uzman kadromuzla tüm taşıma ihtiyaçlarınızı karşılıyoruz."
  },
  beykoz: {
    name: "Beykoz",
    title: "Beykoz Mobil Taşıma ve Kurye Hizmetleri",
    description: "Beykoz'da güvenilir nakliyat çözümleri. Profesyonel ekip ve modern araçlarla yanınızdayız.",
    content: "Beykoz'da modern ve güvenilir taşımacılık hizmetleri veriyoruz. Deneyimli ekibimizle eşyalarınızı özenle taşıyoruz."
  },
  tuzla: {
    name: "Tuzla",
    title: "Tuzla Mobil Taşıma ve Kurye Hizmetleri",
    description: "Tuzla'da profesyonel ev ve ofis taşıma hizmetleri. Güvenilir ve hızlı çözümler için bizi arayın.",
    content: "Tuzla'da kaliteli ve güvenilir taşımacılık çözümleri sunuyoruz. Uzman kadromuzla tüm taşıma ihtiyaçlarınızı karşılıyoruz."
  },
  silivri: {
    name: "Silivri",
    title: "Silivri Mobil Taşıma ve Kurye Hizmetleri",
    description: "Silivri'de kaliteli taşımacılık hizmetleri. Modern araç filomuzla 7/24 hizmetinizdeyiz.",
    content: "Silivri'de profesyonel taşımacılık hizmetleri veriyoruz. Deneyimli ekibimizle eşyalarınızı özenle taşıyoruz."
  },
  catalca: {
    name: "Çatalca",
    title: "Çatalca Mobil Taşıma ve Kurye Hizmetleri",
    description: "Çatalca'da güvenilir nakliyat çözümleri. Profesyonel ekip ve modern araçlarla yanınızdayız.",
    content: "Çatalca'da modern ve güvenilir taşımacılık hizmetleri sunuyoruz. Uzman kadromuzla tüm taşıma ihtiyaçlarınızı karşılıyoruz."
  },
  arnavutkoy: {
    name: "Arnavutköy",
    title: "Arnavutköy Mobil Taşıma ve Kurye Hizmetleri",
    description: "Arnavutköy'de profesyonel taşıma hizmetleri. Güvenilir ve hızlı çözümler için 7/24 hizmetinizdeyiz.",
    content: "Arnavutköy'de kaliteli ve güvenilir taşımacılık çözümleri veriyoruz. Deneyimli ekibimizle eşyalarınızı özenle taşıyoruz."
  },
  adalar: {
    name: "Adalar",
    title: "Adalar Mobil Taşıma ve Kurye Hizmetleri",
    description: "Adalar'da özel nakliyat ve taşıma çözümleri. Profesyonel ekip ve özel ekipmanlarla hizmetinizdeyiz.",
    content: "Adalar'da özel taşımacılık hizmetleri sunuyoruz. Uzman kadromuz ve özel ekipmanlarımızla ada şartlarına uygun çözümler üretiyoruz."
  }
};

export function generateStaticParams() {
  return Object.keys(districts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = await Promise.resolve(params.slug);
  const district = districts[slug as keyof typeof districts];
  
  if (!district) {
    return {
      title: "İlçe Bulunamadı | İstanbul Mobil Taşıma",
      description: "Aradığınız ilçe bulunamadı. İstanbul'un tüm ilçelerinde profesyonel taşımacılık hizmetleri sunuyoruz.",
    };
  }

  return {
    title: `${district.name} Taşımacılık | İstanbul Mobil Taşıma`,
    description: district.description,
  };
}

export default async function DistrictPage({ params }: { params: { slug: string } }) {
  const slug = await Promise.resolve(params.slug);
  const district = districts[slug as keyof typeof districts];

  if (!district) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Hero Section */}
        <div className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">{district.title}</h1>
              <p className="text-xl text-blue-100/80 max-w-3xl mx-auto mb-12">{district.description}</p>
              
              {/* İletişim Butonları */}
              <div className="flex justify-center gap-4">
                <a href="tel:+905456564020" className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  0545 656 40 20
                </a>
                <a href="https://wa.me/905456564020" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-colors">
                  <ChatBubbleLeftIcon className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative pb-20 px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center text-blue-300 mb-6">
                  <TruckIcon className="w-8 h-8 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Hizmet Detayları</h2>
                </div>
                <p className="text-lg text-blue-100/80 leading-relaxed">
                  {district.content}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center text-blue-300 mb-6">
                  <ClockIcon className="w-8 h-8 mr-3" />
                  <h2 className="text-2xl font-bold text-white">7/24 Hizmet</h2>
                </div>
                <ul className="space-y-4 text-blue-100/80">
                  <li className="flex items-center">
                    <ShieldCheckIcon className="w-5 h-5 mr-3 text-blue-400" />
                    <span>Profesyonel Ekip</span>
                  </li>
                  <li className="flex items-center">
                    <ShieldCheckIcon className="w-5 h-5 mr-3 text-blue-400" />
                    <span>Güvenilir Hizmet</span>
                  </li>
                  <li className="flex items-center">
                    <ShieldCheckIcon className="w-5 h-5 mr-3 text-blue-400" />
                    <span>Hızlı Teslimat</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                {
                  title: "Ev Taşıma",
                  description: "Evinizi güvenle ve özenle yeni adresinize taşıyoruz."
                },
                {
                  title: "Ofis Taşıma",
                  description: "İş yerinizi minimum kesinti ile taşıyoruz."
                },
                {
                  title: "Paket Teslimat",
                  description: "Paketlerinizi hızlı ve güvenli şekilde teslim ediyoruz."
                },
                {
                  title: "Express Kurye",
                  description: "Acil gönderileriniz için hızlı kurye hizmeti."
                }
              ].map((service) => (
                <div
                  key={service.title}
                  className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-blue-100/70 text-sm">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-8">İletişim</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <a href="tel:+905456564020" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors">
                    <PhoneIcon className="w-5 h-5 mr-2" />
                    <span>0545 656 40 20</span>
                  </a>
                  <a href="https://wa.me/905456564020" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors">
                    <ChatBubbleLeftIcon className="w-5 h-5 mr-2" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 