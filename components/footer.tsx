import Link from "next/link";
import { MapPin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Pondok Pesantren Darul Ulum
            </h3>
            <p className="text-sm opacity-90">
              Menyediakan pendidikan Islam berkualitas dengan fasilitas modern
              dan program unggulan untuk masa depan cerah.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Menu Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:underline">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:underline">
                  Program
                </Link>
              </li>
              <li>
                <Link href="/pengumuman" className="hover:underline">
                  Pengumuman
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:underline">
                  Galeri
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold mb-4">Program</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/program#ipa" className="hover:underline">
                  IPA
                </Link>
              </li>
              <li>
                <Link href="/program#ips" className="hover:underline">
                  IPS
                </Link>
              </li>
              <li>
                <Link href="/program#bahasa" className="hover:underline">
                  Bahasa
                </Link>
              </li>
              <li>
                <Link
                  href="/program#ekstrakurikuler"
                  className="hover:underline"
                >
                  Ekstrakurikuler
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  Q663+MG6, Suluran, Pandanwangi, Kec. Tempeh, Kabupaten
                  Lumajang, Jawa Timur 67371
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
            <p>&copy; 2025 SMA Darul Ulum. Semua hak dilindungi.</p>
            <div className="flex gap-6 mt-4 md:mt-0 items-center">
              <Link href="#" className="hover:underline">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="hover:underline">
                Syarat Layanan
              </Link>
              <a
                href="https://github.com/putrisriwidiyati-a11y/SMA_DARUL_ULUM.git"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
                title="Lihat source code di GitHub"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
