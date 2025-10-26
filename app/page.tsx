import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award, Zap } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-linear-to-br from-primary via-primary to-accent overflow-hidden h-[80dvh] justify-center items-center align-middle">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                SMA DARUL ULUM TEMPEH mencetak siswa dengan pendidikan islami
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-95 text-balance max-w-2xl mx-auto">
                Menggabungkan pendidikan Islam yang kuat dengan kurikulum modern
                untuk membentuk generasi yang beriman, berilmu, dan berakhlak
                mulia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/tentang"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition-all"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mengapa Memilih Kami?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Kami berkomitmen memberikan pendidikan Islam yang berkualitas
                dengan fasilitas lengkap dan program yang inovatif
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Pendidikan Islam Kuat",
                  description:
                    "Kurikulum Islam yang komprehensif dengan pembelajaran Al-Quran, Hadis, dan Fiqih",
                },
                {
                  icon: Users,
                  title: "Guru Berpengalaman",
                  description:
                    "Tim pengajar profesional dengan sertifikasi dan pengalaman mengajar bertahun-tahun",
                },
                {
                  icon: Award,
                  title: "Prestasi Gemilang",
                  description:
                    "Ratusan santri telah meraih prestasi di tingkat nasional dan internasional",
                },
                {
                  icon: Zap,
                  title: "Fasilitas Lengkap",
                  description:
                    "Asrama, masjid, perpustakaan, laboratorium, dan ruang belajar yang nyaman",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "30+", label: "Tahun Berdiri" },
                { number: "800+", label: "Siswa Aktif" },
                { number: "60+", label: "Guru Profesional" },
                { number: "40+", label: "Program Unggulan" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Bergabung dengan Kami?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Daftarkan diri Anda sekarang dan jadilah bagian dari komunitas
              santri yang beriman dan berilmu
            </p>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-all"
            >
              Hubungi Kami Sekarang
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
