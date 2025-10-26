import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Award, Target, Eye, Users, BookOpen, Zap } from "lucide-react";
import Link from "next/link";

export default function TentangPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-linear-to-br from-primary via-primary to-accent text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              TENTANG SMA DARUL ULUM TEMPEH
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl">
              Membangun generasi pemimpin yang berkarakter, berprestasi, dan
              berdedikasi untuk masa depan bangsa
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Sejarah Sekolah
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  SMA Darul Ulum Tempeh didirikan pada tahun 2000 dengan visi
                  untuk menyediakan pendidikan berkualitas tinggi bagi generasi
                  muda Indonesia. Sejak awal berdirinya, sekolah kami telah
                  berkomitmen untuk mengembangkan potensi siswa secara akademik
                  dan karakter.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Dengan dukungan dari pemerintah, orang tua, dan masyarakat,
                  SMA Darul Ulum Tempeh terus berkembang menjadi salah satu
                  sekolah terkemuka di wilayah ini. Kami telah meluluskan ribuan
                  siswa yang sukses melanjutkan pendidikan ke universitas
                  ternama dan berkontribusi di berbagai bidang.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Hingga saat ini, kami terus berinovasi dalam metode
                  pembelajaran dan pengembangan fasilitas untuk memberikan
                  pengalaman belajar terbaik bagi setiap siswa.
                </p>
              </div>
              <div className="bg-linear-to-br from-primary/10 to-accent/10 rounded-lg p-8 border border-border">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      25+
                    </div>
                    <p className="text-muted-foreground">
                      Tahun Melayani Pendidikan
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      1200+
                    </div>
                    <p className="text-muted-foreground">
                      Siswa Aktif Saat Ini
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      5000+
                    </div>
                    <p className="text-muted-foreground">Alumni Sukses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="bg-background rounded-lg p-8 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="text-primary" size={28} />
                  <h3 className="text-2xl font-bold">Visi</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi sekolah menengah atas yang unggul dalam menghasilkan
                  lulusan berkarakter, berprestasi akademik tinggi, dan siap
                  menghadapi tantangan global dengan nilai-nilai kebangsaan yang
                  kuat.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-background rounded-lg p-8 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-primary" size={28} />
                  <h3 className="text-2xl font-bold">Misi</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Menyelenggarakan pembelajaran yang inovatif dan
                      berkualitas
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Mengembangkan karakter dan kepribadian siswa yang mulia
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Mempersiapkan siswa untuk melanjutkan pendidikan tinggi
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Membina siswa yang peduli terhadap lingkungan dan
                      masyarakat
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nilai-Nilai Kami
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Nilai-nilai ini menjadi fondasi dalam setiap keputusan dan
                tindakan kami
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  title: "Integritas",
                  description:
                    "Jujur, terpercaya, dan bertanggung jawab dalam setiap tindakan",
                },
                {
                  icon: Users,
                  title: "Kolaborasi",
                  description:
                    "Bekerja sama dengan semangat kebersamaan dan saling menghormati",
                },
                {
                  icon: BookOpen,
                  title: "Pembelajaran",
                  description:
                    "Terus belajar dan berkembang untuk mencapai potensi maksimal",
                },
                {
                  icon: Zap,
                  title: "Inovasi",
                  description:
                    "Menciptakan solusi kreatif untuk tantangan pendidikan modern",
                },
                {
                  icon: Target,
                  title: "Keunggulan",
                  description:
                    "Berusaha memberikan yang terbaik dalam setiap aspek pendidikan",
                },
                {
                  icon: Eye,
                  title: "Visi Jangka Panjang",
                  description:
                    "Mempersiapkan siswa untuk masa depan yang cerah dan bermakna",
                },
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prestasi dan Penghargaan
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Pencapaian siswa dan sekolah yang membanggakan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  year: "2024",
                  title: "Juara Olimpiade Sains Nasional",
                  description:
                    "Tim siswa kami meraih medali emas di Olimpiade Sains Nasional kategori Biologi",
                },
                {
                  year: "2023",
                  title: "Akreditasi A",
                  description:
                    "Sekolah mendapatkan akreditasi A dari Badan Akreditasi Nasional Sekolah/Madrasah",
                },
                {
                  year: "2023",
                  title: "Penghargaan Sekolah Adiwiyata",
                  description:
                    "Pengakuan atas komitmen kami dalam pendidikan lingkungan berkelanjutan",
                },
                {
                  year: "2022",
                  title: "Juara Kompetisi Debat Nasional",
                  description:
                    "Tim debat kami memenangkan kompetisi debat tingkat nasional",
                },
                {
                  year: "2022",
                  title: "Penghargaan Guru Berprestasi",
                  description:
                    "Tiga guru kami menerima penghargaan sebagai guru berprestasi tingkat provinsi",
                },
                {
                  year: "2021",
                  title: "Sekolah Ramah Anak",
                  description:
                    "Sertifikasi sebagai sekolah yang ramah dan aman bagi anak-anak",
                },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="text-sm font-bold text-primary mb-2">
                    {achievement.year}
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ingin Bergabung dengan Kami?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Jadilah bagian dari komunitas pelajar yang berprestasi dan
              berkarakter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/program"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-all"
              >
                Lihat Program Kami
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
