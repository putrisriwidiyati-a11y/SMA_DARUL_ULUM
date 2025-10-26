import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Microscope,
  Globe,
  BookOpen,
  Users,
  Laptop,
  Dumbbell,
  Music,
  Palette,
  Trophy,
  Zap,
  Building2,
  Trees,
} from "lucide-react";

export default function ProgramPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-linear-to-br from-primary via-primary to-accent text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Program dan Fasilitas
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl">
              Kami menyediakan program akademik unggulan dan fasilitas lengkap
              untuk mendukung pengembangan potensi siswa
            </p>
          </div>
        </section>

        {/* Academic Programs Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Program Akademik
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Tiga program unggulan yang disesuaikan dengan minat dan bakat
                siswa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* IPA Program */}
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-linear-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center h-40">
                  <Microscope className="text-primary" size={48} />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Program IPA</h3>
                  <p className="text-muted-foreground mb-4">
                    Fokus pada sains, teknologi, dan matematika dengan
                    laboratorium lengkap dan guru bersertifikat.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Biologi, Kimia, Fisika</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Matematika Lanjutan</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Praktikum Laboratorium</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Olimpiade Sains</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* IPS Program */}
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-linear-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center h-40">
                  <Globe className="text-primary" size={48} />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Program IPS</h3>
                  <p className="text-muted-foreground mb-4">
                    Mengembangkan pemahaman tentang masyarakat, sejarah, dan
                    ekonomi dengan pendekatan kontekstual.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Sejarah dan Geografi</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Ekonomi dan Sosiologi</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Studi Kasus Nyata</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Debat dan Diskusi</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bahasa Program */}
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-linear-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center h-40">
                  <BookOpen className="text-primary" size={48} />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Program Bahasa</h3>
                  <p className="text-muted-foreground mb-4">
                    Menguasai bahasa asing dan mengembangkan kemampuan
                    komunikasi lintas budaya.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Bahasa Inggris Intensif</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Bahasa Mandarin/Arab</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Sastra dan Budaya</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Pertukaran Pelajar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Extracurricular Activities Section */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Kegiatan Ekstrakurikuler
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Berbagai pilihan kegiatan untuk mengembangkan bakat dan minat di
                luar kelas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Laptop,
                  title: "Robotika",
                  description: "Kompetisi robot dan teknologi",
                },
                {
                  icon: Dumbbell,
                  title: "Olahraga",
                  description: "Berbagai cabang olahraga",
                },
                {
                  icon: Music,
                  title: "Seni Musik",
                  description: "Orkestra dan band sekolah",
                },
                {
                  icon: Palette,
                  title: "Seni Rupa",
                  description: "Melukis, patung, dan desain",
                },
                {
                  icon: Trophy,
                  title: "Debat",
                  description: "Kompetisi debat nasional",
                },
                {
                  icon: Users,
                  title: "Pramuka",
                  description: "Kepramukaan dan kepemimpinan",
                },
                {
                  icon: Zap,
                  title: "Coding Club",
                  description: "Pemrograman dan web development",
                },
                {
                  icon: Trees,
                  title: "Lingkungan",
                  description: "Program penghijauan dan konservasi",
                },
              ].map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={index}
                    className="bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-shadow text-center"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{activity.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {activity.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Fasilitas Sekolah
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Fasilitas modern dan lengkap untuk mendukung proses pembelajaran
                yang optimal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Microscope,
                  title: "Laboratorium Sains",
                  description:
                    "Laboratorium Biologi, Kimia, dan Fisika yang dilengkapi dengan peralatan modern dan standar internasional.",
                },
                {
                  icon: Laptop,
                  title: "Laboratorium Komputer",
                  description:
                    "Ruang komputer dengan 60 unit komputer, software terbaru, dan koneksi internet berkecepatan tinggi.",
                },
                {
                  icon: BookOpen,
                  title: "Perpustakaan Digital",
                  description:
                    "Perpustakaan dengan koleksi 10,000+ buku fisik dan akses ke database digital internasional.",
                },
                {
                  icon: Dumbbell,
                  title: "Fasilitas Olahraga",
                  description:
                    "Lapangan basket, voli, badminton, kolam renang, dan gym dengan peralatan lengkap.",
                },
                {
                  icon: Building2,
                  title: "Ruang Kelas Modern",
                  description:
                    "Ruang kelas ber-AC dengan proyektor, papan interaktif, dan desain ergonomis untuk kenyamanan belajar.",
                },
                {
                  icon: Music,
                  title: "Ruang Seni",
                  description:
                    "Studio musik, ruang teater, dan studio seni rupa dengan peralatan profesional.",
                },
              ].map((facility, index) => {
                const Icon = facility.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          {facility.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {facility.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Special Programs Section */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Program Khusus
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Program tambahan untuk pengembangan karakter dan keterampilan
                abad 21
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Program Akselerasi",
                  description:
                    "Program khusus untuk siswa berbakat dengan pembelajaran yang dipercepat dan pengayaan materi.",
                },
                {
                  title: "Program Remedial",
                  description:
                    "Program pendampingan khusus untuk siswa yang membutuhkan bantuan dalam memahami materi pelajaran.",
                },
                {
                  title: "Bimbingan Karir",
                  description:
                    "Konseling dan bimbingan karir untuk membantu siswa memilih jalur pendidikan dan profesi yang tepat.",
                },
                {
                  title: "Program Pertukaran Pelajar",
                  description:
                    "Kesempatan belajar di sekolah mitra internasional untuk memperluas wawasan global siswa.",
                },
                {
                  title: "Pelatihan Kepemimpinan",
                  description:
                    "Program pengembangan kepemimpinan dan soft skills untuk mempersiapkan pemimpin masa depan.",
                },
                {
                  title: "Program Beasiswa",
                  description:
                    "Beasiswa penuh dan parsial untuk siswa berprestasi dan siswa kurang mampu yang berbakat.",
                },
              ].map((program, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-lg mb-3">{program.title}</h3>
                  <p className="text-muted-foreground">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tertarik dengan Program Kami?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Hubungi kami untuk informasi lebih lanjut tentang pendaftaran dan
              program yang tersedia
            </p>
            <a
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-all"
            >
              Hubungi Kami
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
