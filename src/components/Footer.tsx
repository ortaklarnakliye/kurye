"use client";

import Link from "next/link";
import { PhoneIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Şirket Bilgileri */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">İstanbul Mobil Taşıma</h3>
          <p className="text-gray-400 mb-4">
            İstanbul&apos;un 39 ilçesinde profesyonel taşımacılık hizmetleri sunuyoruz.
          </p>
          <div className="flex flex-col space-y-2">
            <a
              href="tel:+905456564020"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              0545 656 40 20
            </a>
            <a
              href="https://wa.me/905456564020"
              target="_blank"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ChatBubbleLeftIcon className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Hızlı Linkler */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Hızlı Linkler</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link href="/#hizmetler" className="text-gray-400 hover:text-white transition-colors">
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link href="/#iletisim" className="text-gray-400 hover:text-white transition-colors">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        {/* İş Ortaklarımız */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">İş Ortaklarımız</h3>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://sehirlerarasinakliyat.vip" 
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Şehirler Arası Nakliyat
              </a>
            </li>
            <li>
              <a 
                href="https://bodrumambar.tr" 
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Bodrum Ambar
              </a>
            </li>
            <li>
              <a 
                href="https://istanbulmobiltasima.com" 
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                İstanbul Mobil Taşıma
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} İstanbul Mobil Taşıma. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
} 