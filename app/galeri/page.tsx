"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      title: "SEKOLAH",
      category: "Fasilitas",
      image: "/sekolah.webp",
    },
    {
      id: 2,
      title: "PELATIHAN PBB",
      category: "Akademik",
      image: "/upacara.webp",
    },
  ];

  const categories = ["Semua", "Fasilitas", "Akademik", "Kegiatan"];
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredImages =
    selectedCategory === "Semua"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-linear-to-br from-primary via-primary to-accent overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                Galeri SMA DARUL ULUM
              </h1>
              <p className="text-lg md:text-xl opacity-95 text-balance max-w-2xl mx-auto">
                Jelajahi momen-momen berharga dari kehidupan santri di pondok
                pesantren kami
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground hover:border-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={image.image || "/placeholder.svg"}
                      alt={image.title}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-accent transition-colors"
            >
              <X size={32} />
            </button>
            <Image
              src={filteredImages[selectedImage].image || "/placeholder.svg"}
              width={100}
              height={100}
              alt={filteredImages[selectedImage].title}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-accent">
                {filteredImages[selectedImage].category}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
