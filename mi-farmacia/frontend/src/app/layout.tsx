import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mi Farmacia",
  description: "Sistema de gestión de farmacia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-white font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="w-full py-6 bg-[#181f2b] border-b border-[#2e374a] shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-4">
              <span className="text-2xl font-bold text-[#00c6ff] tracking-widest drop-shadow-lg">
                Mi Farmacia
              </span>
              <nav className="space-x-6">
                <a href="/medicamentos" className="hover:text-[#00c6ff] transition">Medicamentos</a>
                <a href="/especialidades" className="hover:text-[#00c6ff] transition">Especialidades</a>
              </nav>
            </div>
          </header>
          <main className="flex-1 flex flex-col items-center justify-center">
            {children}
          </main>
          <footer className="w-full py-4 bg-[#181f2b] border-t border-[#2e374a] text-center text-[#b2becd]">
            © {new Date().getFullYear()} Mi Farmacia. Todos los derechos reservados.
          </footer>
        </div>
      </body>
    </html>
  );
}