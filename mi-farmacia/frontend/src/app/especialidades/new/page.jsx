'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createEspecialidad } from '@/lib/apiEspecialidades';

export default function NuevaEspecialidad() {
  const [descripcionEsp, setDescripcionEsp] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEspecialidad({ descripcionEsp });
    router.push('/especialidades');
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
        <h2 className="text-3xl font-extrabold text-center text-[#00c6ff] mb-8 tracking-wide drop-shadow-lg">Nueva Especialidad</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#b2becd] mb-1 font-semibold">Descripción</label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-[#232b3b] border border-[#00c6ff] text-white focus:outline-none focus:ring-2 focus:ring-[#00c6ff] transition"
              placeholder="Descripción"
              value={descripcionEsp}
              onChange={e => setDescripcionEsp(e.target.value)}
              required
            />
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