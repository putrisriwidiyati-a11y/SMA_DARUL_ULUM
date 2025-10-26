"use client";

import type React from "react";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Phone, MapPin, Clock, Send, MapPlus } from "lucide-react";
import { useState } from "react";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-linear-to-br from-primary via-primary to-accent text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Hubungi Kami
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl">
              Kami siap menjawab pertanyaan Anda tentang sekolah, program, dan
              pendaftaran
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Address */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Alamat</h3>
                <p className="text-muted-foreground text-sm">
                  Q663+MG6, Suluran, Pandanwangi,
                  <br />
                  Kec. Tempeh, Kabupaten Lumajang, Jawa Timur 67371
                </p>
                <a
                  href="https://maps.app.goo.gl/4LQinywgMprPx9vF6"
                  target="_blank"
                  className="flex gap-2 mt-4 text-blue-500 hover:underline transition-all"
                >
                  <MapPlus className="mr-1" />
                  Pergi ke maps
                </a>
              </div>

              {/* Phone */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Telepon</h3>
                <p className="text-muted-foreground text-sm">
                  <a
                    href="htttps://wa.me/6285732882587"
                    target="_blank"
                    className="text-xl text-blue-400 hover:underline transition-all"
                  >
                    DEWI YULI ASTUTIK
                  </a>
                  <br />
                  <a
                    href="htttps://wa.me/6285856837237"
                    target="_blank"
                    className="text-xl text-blue-400 hover:underline transition-all"
                  >
                    ZAMROTUL HASANAH
                  </a>
                  <br />
                  <span className="text-xs">Senin-Jumat, 07:00-16:00</span>
                </p>
              </div>

              {/* Email */}

              {/* Hours */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Jam Operasional</h3>
                <p className="text-muted-foreground text-sm">
                  Senin-Jumat: 07:00-16:00
                  <br />
                  Sabtu: 08:00-12:00
                  <br />
                  Minggu: Tutup
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Kirim Pesan Kami</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold mb-2"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-bold mb-2"
                      >
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="(021) 1234-5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-bold mb-2"
                    >
                      Subjek
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Pilih subjek</option>
                      <option value="pendaftaran">
                        Pendaftaran Siswa Baru
                      </option>
                      <option value="akademik">Pertanyaan Akademik</option>
                      <option value="beasiswa">Informasi Beasiswa</option>
                      <option value="fasilitas">Informasi Fasilitas</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold mb-2"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Kirim Pesan
                  </button>

                  {submitted && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
                      Terima kasih! Pesan Anda telah dikirim. Kami akan
                      menghubungi Anda segera.
                    </div>
                  )}
                </form>
              </div>

              {/* Map and Additional Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Lokasi Kami</h2>
                <div className="rounded-lg overflow-hidden mb-6 border border-border h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.64579160383!2d113.2037788!3d-8.238326899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6657eaaaaaaab%3A0x4f93f659c975ec77!2sSMA%20Darul%20Ulum%20Tempeh!5e0!3m2!1sen!2sid!4v1761449270960!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <a
                  href="https://maps.app.goo.gl/ZpahkVnb5jRmCu4bA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-bold mb-6"
                >
                  <MapPin size={18} />
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-muted-foreground text-lg">
                Temukan jawaban untuk pertanyaan umum Anda
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "Bagaimana cara mendaftar sebagai siswa baru?",
                  answer:
                    "Anda dapat mendaftar melalui portal online kami atau langsung ke sekolah. Persyaratan meliputi fotokopi ijazah SMP, akta kelahiran, dan kartu keluarga.",
                },
                {
                  question: "Berapa biaya pendaftaran?",
                  answer:
                    "Biaya pendaftaran sebesar Rp 500.000 dan dapat dilakukan hingga 31 Desember setiap tahunnya.",
                },

                {
                  question: "Apa saja fasilitas yang tersedia?",
                  answer:
                    "Kami memiliki laboratorium sains, laboratorium komputer, perpustakaan digital, fasilitas olahraga, dan ruang seni yang lengkap.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 group cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <summary className="font-bold text-lg flex items-center justify-between">
                    {faq.question}
                    <span className="text-primary group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="text-muted-foreground mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
