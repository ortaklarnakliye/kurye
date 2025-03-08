"use client";

import { motion } from "framer-motion";
import { TruckIcon, PhoneIcon, ClockIcon, MapPinIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import Header from "@/components/Header";
import Districts from "@/components/Districts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          {/* Dekoratif elementler */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-300/20 rounded-full filter blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              İstanbul Mobil Taşıma
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8"
            >
              İstanbul&apos;un Her Noktasına Güvenilir ve Hızlı Taşıma Hizmeti
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col md:flex-row justify-center gap-4"
            >
              <a
                href="tel:+905456564020"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <PhoneIcon className="w-6 h-6 mr-2" />
                0545 656 40 20
              </a>
              <a
                href="https://wa.me/905456564020"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <ChatBubbleLeftIcon className="w-6 h-6 mr-2" />
                WhatsApp
              </a>
            </motion.div>
          </div>
        </section>

        {/* Hizmetlerimiz */}
        <section id="hizmetler" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Hizmetlerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TruckIcon className="w-12 h-12" />,
                  title: "Mobil Taşıma",
                  description: "Eşyalarınızı özenle ve güvenle taşıyoruz."
                },
                {
                  icon: <ClockIcon className="w-12 h-12" />,
                  title: "7/24 Hizmet",
                  description: "Her saat diliminde hizmetinizdeyiz."
                },
                {
                  icon: <MapPinIcon className="w-12 h-12" />,
                  title: "Tüm İlçelere Hizmet",
                  description: "İstanbul'un 39 ilçesinde profesyonel taşıma hizmeti."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-6 bg-white/10 backdrop-blur-lg rounded-xl text-center border border-white/20"
                >
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-blue-100/80">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* İlçeler */}
        <Districts />

        {/* İletişim */}
        <section id="iletisim" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Bize Ulaşın</h2>
            <p className="text-xl text-blue-100/80 mb-8">
              7/24 hizmet vermekteyiz. Hemen arayın, en kısa sürede yanınızdayız.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a
                href="tel:+905456564020"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <PhoneIcon className="w-6 h-6 mr-2" />
                0545 656 40 20
              </a>
              <a
                href="https://wa.me/905456564020"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <ChatBubbleLeftIcon className="w-6 h-6 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
