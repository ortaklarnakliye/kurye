"use client";

import Link from "next/link";
import { MapPinIcon } from "@heroicons/react/24/outline";

const districts = [
  {
    slug: "maltepe",
    name: "Maltepe",
    description: "Maltepe'de güvenilir ve hızlı taşımacılık hizmetleri"
  },
  {
    slug: "kadikoy",
    name: "Kadıköy",
    description: "Kadıköy'de profesyonel taşımacılık çözümleri"
  },
  {
    slug: "besiktas",
    name: "Beşiktaş",
    description: "Beşiktaş'ta kaliteli taşımacılık hizmeti"
  },
  {
    slug: "umraniye",
    name: "Ümraniye",
    description: "Ümraniye'de güvenilir taşımacılık hizmetleri"
  },
  {
    slug: "fatih",
    name: "Fatih",
    description: "Fatih'te profesyonel taşımacılık çözümleri"
  },
  {
    slug: "zeytinburnu",
    name: "Zeytinburnu",
    description: "Zeytinburnu'nda kaliteli taşımacılık hizmeti"
  },
  {
    slug: "eyup",
    name: "Eyüp",
    description: "Eyüp'te güvenilir taşımacılık hizmetleri"
  },
  {
    slug: "kagithane",
    name: "Kağıthane",
    description: "Kağıthane'de profesyonel taşımacılık çözümleri"
  },
  {
    slug: "bahcelievler",
    name: "Bahçelievler",
    description: "Bahçelievler'de kaliteli taşımacılık hizmeti"
  },
  {
    slug: "avcilar",
    name: "Avcılar",
    description: "Avcılar'da güvenilir taşımacılık hizmetleri"
  },
  {
    slug: "bagcilar",
    name: "Bağcılar",
    description: "Bağcılar'da profesyonel taşımacılık çözümleri"
  },
  {
    slug: "gungoren",
    name: "Güngören",
    description: "Güngören'de kaliteli taşımacılık hizmeti"
  },
  {
    slug: "esenyurt",
    name: "Esenyurt",
    description: "Esenyurt'ta güvenilir taşımacılık hizmetleri"
  },
  {
    slug: "kucukcekmece",
    name: "Küçükçekmece",
    description: "Küçükçekmece'de profesyonel taşımacılık çözümleri"
  },
  {
    slug: "buyukcekmece",
    name: "Büyükçekmece",
    description: "Büyükçekmece'de kaliteli taşımacılık hizmeti"
  },
  {
    slug: "basaksehir",
    name: "Başakşehir",
    description: "Başakşehir'de güvenilir taşımacılık hizmetleri"
  },
  {
    slug: "sultangazi",
    name: "Sultangazi",
    description: "Sultangazi'de profesyonel taşımacılık çözümleri"
  },
  {
    slug: "gaziosmanpasa",
    name: "Gaziosmanpaşa",
    description: "Gaziosmanpaşa'da kaliteli taşımacılık hizmeti"
  },
  {
    slug: "esenler",
    name: "Esenler",
    description: "Esenler'de güvenilir taşımacılık hizmetleri"
  },
  {
    slug: "bayrampasa",
    name: "Bayrampaşa",
    description: "Bayrampaşa'da profesyonel taşımacılık çözümleri"
  },
  {
    slug: "sultanbeyli",
    name: "Sultanbeyli",
    description: "Sultanbeyli'de kaliteli taşımacılık hizmeti"
  },
  {
    slug: "sancaktepe",
    name: "Sancaktepe",
    description: "Sancaktepe'de güvenilir taşımacılık hizmetleri"
  },
  {
    slug: "cekmekoy",
    name: "Çekmeköy",
    description: "Çekmeköy'de profesyonel taşımacılık çözümleri"
  },
  {
    slug: "beykoz",
    name: "Beykoz",
    description: "Beykoz'da kaliteli taşımacılık hizmeti"
  },
  {
    slug: "tuzla",
    name: "Tuzla",
    description: "Tuzla'da güvenilir taşımacılık hizmetleri"
  },
  {
    slug: "silivri",
    name: "Silivri",
    description: "Silivri'de profesyonel taşımacılık çözümleri"
  },
  {
    slug: "catalca",
    name: "Çatalca",
    description: "Çatalca'da kaliteli taşımacılık hizmeti"
  },
  {
    slug: "arnavutkoy",
    name: "Arnavutköy",
    description: "Arnavutköy'de güvenilir taşımacılık hizmetleri"
  },
  {
    slug: "adalar",
    name: "Adalar",
    description: "Adalar'da özel taşımacılık çözümleri"
  }
];

export default function Districts() {
  const title = `İstanbul'un Tüm İlçelerinde Hizmetinizdeyiz`;
  const subtitle = `İstanbul'un her ilçesinde profesyonel taşımacılık hizmetleri sunuyoruz.`;

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-blue-100/80">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {districts.map((district) => (
            <Link href={`/ilce/${district.slug}`} key={district.slug}>
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <MapPinIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white ml-3">{district.name}</h3>
                  </div>
                  <p className="text-blue-100/70 text-sm mb-4">{district.description}</p>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    <span className="text-sm font-medium">Detaylı Bilgi</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}