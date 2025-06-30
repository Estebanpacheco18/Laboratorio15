'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getEspecialidades, deleteEspecialidad } from '@/lib/apiEspecialidades';

export default function EspecialidadesPage() {
  const [especialidades, setEspecialidades] = useState([]);
  const router = useRouter();

  const fetchEspecialidades = async () => {
    const data = await getEspecialidades();
    setEspecialidades(data);
  };

  useEffect(() => {
    fetchEspecialidades();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('¿Seguro que deseas eliminar esta especialidad?')) return;
    await deleteEspecialidad(id);
    fetchEspecialidades();
  };

  return (
    <div>
      <h1>Lista de Especialidades</h1>
      <button
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => router.push('/especialidades/new')}
      >
        + Nueva Especialidad
      </button>
<table className="w-full bg-[#181f2b] rounded-xl shadow-lg border border-[#2e374a] overflow-hidden">
  <thead className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white">
    <tr>
      <th className="py-3 px-4 text-left">Código</th>
      <th className="py-3 px-4 text-left">Descripción</th>
      <th className="py-3 px-4 text-center">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {especialidades.map((esp) => (
      <tr key={esp.CodEspec} className="hover:bg-[#232b3b] transition">
        <td className="py-3 px-4">{esp.CodEspec}</td>
        <td className="py-3 px-4">{esp.descripcionEsp}</td>
        <td className="py-3 px-4 text-center">
          <button
            className="mr-2 px-3 py-1 bg-gradient-to-r from-[#ffe259] to-[#ffa751] text-black rounded shadow hover:scale-105 transition"
            onClick={() => router.push(`/especialidades/${esp.CodEspec}/edit`)}
          >
            Editar
          </button>
          <button
            className="px-3 py-1 bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white rounded shadow hover:scale-105 transition"
            onClick={() => handleDelete(esp.CodEspec)}
          >
            Eliminar
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}