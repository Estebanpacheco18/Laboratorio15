'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createMedicamento } from '@/lib/apiMedicamentos';

export default function NuevoMedicamento() {
  const [descripcionMed, setDescripcionMed] = useState('');
  const [stock, setStock] = useState('');
  const [precioVentaUni, setPrecioVentaUni] = useState('');
  const [CodEspec, setCodEspec] = useState('');
  const [especialidades, setEspecialidades] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('http://localhost:3001/api/especialidades')
      .then(res => res.json())
      .then(setEspecialidades);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMedicamento({ descripcionMed, stock, precioVentaUni, CodEspec });
    router.push('/medicamentos');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526]">
      <div className="w-full max-w-md bg-[#181f2b] rounded-2xl shadow-2xl p-10 border border-[#2e374a] relative">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-full p-2 shadow-lg">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#fff" />
            <path d="M8 12h8M12 8v8" stroke="#00c6ff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-center text-[#00c6ff] mb-8 tracking-wide drop-shadow-lg">Nuevo Medicamento</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#b2becd] mb-1 font-semibold">Descripción</label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-[#232b3b] border border-[#00c6ff] text-white focus:outline-none focus:ring-2 focus:ring-[#00c6ff] transition"
              placeholder="Descripción"
              value={descripcionMed}
              onChange={e => setDescripcionMed(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-[#b2becd] mb-1 font-semibold">Stock</label>
              <input
                className="w-full px-4 py-2 rounded-lg bg-[#232b3b] border border-[#00c6ff] text-white focus:outline-none focus:ring-2 focus:ring-[#00c6ff] transition"
                placeholder="Stock"
                type="number"
                value={stock}
                onChange={e => setStock(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-[#b2becd] mb-1 font-semibold">Precio</label>
              <input
                className="w-full px-4 py-2 rounded-lg bg-[#232b3b] border border-[#00c6ff] text-white focus:outline-none focus:ring-2 focus:ring-[#00c6ff] transition"
                placeholder="Precio"
                type="number"
                step="0.01"
                value={precioVentaUni}
                onChange={e => setPrecioVentaUni(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-[#b2becd] mb-1 font-semibold">Especialidad</label>
            <select
              className="w-full px-4 py-2 rounded-lg bg-[#232b3b] border border-[#00c6ff] text-white focus:outline-none focus:ring-2 focus:ring-[#00c6ff] transition"
              value={CodEspec}
              onChange={e => setCodEspec(e.target.value)}
              required
            >
              <option value="">Seleccione Especialidad</option>
              {especialidades.map((esp) => (
                <option key={esp.CodEspec} value={esp.CodEspec}>
                  {esp.descripcionEsp}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-bold rounded-lg shadow-lg hover:scale-105 transition transform"
          >
            Crear
          </button>
        </form>
      </div>
    </div>
  );
}