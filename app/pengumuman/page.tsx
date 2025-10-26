import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Calendar, User, ArrowRight, Bell, Newspaper } from "lucide-react";

export default function PengumumanPage() {
  const announcements = [
    {
      id: 1,
      type: "announcement",
      title: "Pendaftaran Siswa Baru Tahun Ajaran 2025/2026",
      date: "2025-10-20",
      author: "Admin",
      excerpt:
        "Pendaftaran siswa baru untuk tahun ajaran 2025/2026 telah dibuka. Calon siswa dapat mendaftar melalui portal online kami atau langsung ke sekolah.",
      content:
        "Pendaftaran siswa baru untuk tahun ajaran 2025/2026 telah dibuka. Calon siswa dapat mendaftar melalui portal online kami atau langsung ke sekolah. Persyaratan pendaftaran meliputi fotokopi ijazah SMP, akta kelahiran, dan kartu keluarga. Biaya pendaftaran sebesar Rp 500.000 dan dapat dilakukan hingga 31 Desember 2025.",
      featured: true,
    },
    {
      id: 2,
      type: "news",
      title:
        "Siswa SMA Negeri 1 Sukses Raih Medali Emas Olimpiade Sains Nasional",
      date: "2025-10-15",
      author: "Humas",
      excerpt:
        "Tim siswa kami berhasil meraih medali emas di Olimpiade Sains Nasional kategori Biologi yang diselenggarakan di Jakarta.",
      content:
        "Tim siswa kami berhasil meraih medali emas di Olimpiade Sains Nasional kategori Biologi yang diselenggarakan di Jakarta. Prestasi ini merupakan hasil dari kerja keras dan dedikasi siswa serta bimbingan dari guru-guru kami yang luar biasa.",
      featured: true,
    },
    {
      id: 3,
      type: "announcement",
      title: "Libur Semester Ganjil 2025/2026",
      date: "2025-10-10",
      author: "Admin",
      excerpt:
        "Libur semester ganjil akan dimulai pada tanggal 1 Desember 2025 dan berakhir pada tanggal 5 Januari 2026.",
      content:
        "Libur semester ganjil akan dimulai pada tanggal 1 Desember 2025 dan berakhir pada tanggal 5 Januari 2026. Siswa diharapkan menggunakan waktu libur ini untuk istirahat dan belajar mandiri. Sekolah akan ditutup selama periode libur.",
    },
    {
      id: 4,
      type: "news",
      title: "Peluncuran Program Beasiswa Penuh untuk Siswa Berprestasi",
      date: "2025-10-05",
      author: "Humas",
      excerpt:
        "Sekolah meluncurkan program beasiswa penuh untuk siswa berprestasi akademik dan non-akademik. Beasiswa ini mencakup biaya pendidikan dan uang saku bulanan.",
      content:
        "Sekolah meluncurkan program beasiswa penuh untuk siswa berprestasi akademik dan non-akademik. Beasiswa ini mencakup biaya pendidikan dan uang saku bulanan. Pendaftaran beasiswa dibuka hingga 30 November 2025.",
    },
    {
      id: 5,
      type: "announcement",
      title: "Perubahan Jadwal Ujian Akhir Semester",
      date: "2025-09-28",
      author: "Admin",
      excerpt:
        "Jadwal ujian akhir semester telah diubah. Ujian akan dimulai pada tanggal 15 November 2025 dan berakhir pada tanggal 28 November 2025.",
      content:
        "Jadwal ujian akhir semester telah diubah. Ujian akan dimulai pada tanggal 15 November 2025 dan berakhir pada tanggal 28 November 2025. Siswa diminta untuk mempersiapkan diri dengan baik.",
    },
    {
      id: 6,
      type: "news",
      title: "Kunjungan Pelajar dari Sekolah Mitra Internasional",
      date: "2025-09-20",
      author: "Humas",
      excerpt:
        "Sekolah kami menerima kunjungan dari 30 pelajar dari sekolah mitra di Singapura. Mereka akan melakukan pertukaran pelajar selama dua minggu.",
      content:
        "Sekolah kami menerima kunjungan dari 30 pelajar dari sekolah mitra di Singapura. Mereka akan melakukan pertukaran pelajar selama dua minggu. Kegiatan ini bertujuan untuk meningkatkan pemahaman budaya dan bahasa asing.",
    },
  ];

  const featuredNews = announcements.filter((item) => item.featured);
  const otherNews = announcements.filter((item) => !item.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Pengumuman dan Berita
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl">
              Informasi terbaru tentang kegiatan, pengumuman penting, dan
              prestasi sekolah
            </p>
          </div>
        </section>

        {/* Featured News Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Berita Utama
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 h-40 flex items-center justify-center">
                    {item.type === "announcement" ? (
                      <Bell className="text-primary" size={48} />
                    ) : (
                      <Newspaper className="text-primary" size={48} />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          item.type === "announcement"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {item.type === "announcement" ? "Pengumuman" : "Berita"}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(item.date)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <User size={14} />
                        {item.author}
                      </span>
                      <button className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                        Baca Selengkapnya
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All News Section */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Semua Pengumuman dan Berita
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-4">
              {otherNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full ${
                            item.type === "announcement"
                              ? "bg-primary/10 text-primary"
                              : "bg-accent/10 text-accent"
                          }`}
                        >
                          {item.type === "announcement"
                            ? "Pengumuman"
                            : "Berita"}
                        </span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(item.date)}
                        </span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <User size={14} />
                          {item.author}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.excerpt}
                      </p>
                    </div>
                    <button className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all flex-shrink-0">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Kategori Pengumuman
              </h2>
              <p className="text-muted-foreground text-lg">
                Temukan pengumuman berdasarkan kategori yang Anda cari
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Akademik", count: 12 },
                { title: "Kegiatan Sekolah", count: 8 },
                { title: "Beasiswa", count: 5 },
                { title: "Pendaftaran", count: 3 },
              ].map((category, index) => (
                <button
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all text-center group"
                >
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.count} pengumuman
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10 border-y border-border">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Berlangganan Newsletter
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Dapatkan pengumuman dan berita terbaru langsung ke email Anda
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-all"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
