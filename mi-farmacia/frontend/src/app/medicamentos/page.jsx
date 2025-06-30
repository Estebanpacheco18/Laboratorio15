'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getMedicamentos, deleteMedicamento } from '@/lib/apiMedicamentos';

export default function MedicamentosPage() {
  const [medicamentos, setMedicamentos] = useState([]);
  const router = useRouter();

  const fetchMedicamentos = async () => {
    const data = await getMedicamentos();
    setMedicamentos(data);
  };

  useEffect(() => {
    fetchMedicamentos();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('¿Seguro que deseas eliminar este medicamento?')) return;
    await deleteMedicamento(id);
    fetchMedicamentos();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] py-10">
      <div className="w-full max-w-5xl bg-[#181f2b] rounded-2xl shadow-2xl p-8 border border-[#2e374a]">
        <h1 className="text-3xl font-extrabold text-center text-[#00c6ff] mb-8 tracking-wide drop-shadow-lg">Lista de Medicamentos</h1>
        <button
          className="mb-6 px-6 py-2 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-bold rounded-lg shadow-lg hover:scale-105 transition"
          onClick={() => router.push('/medicamentos/new')}
        >
          + Nuevo Medicamento
        </button>
        <div className="overflow-x-auto">
          <table className="w-full bg-[#181f2b] rounded-xl shadow-lg border border-[#2e374a] overflow-hidden">
            <thead className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white">
              <tr>
                <th className="py-3 px-4 text-left">Código</th>
                <th className="py-3 px-4 text-left">Descripción</th>
                <th className="py-3 px-4 text-left">Stock</th>
                <th className="py-3 px-4 text-left">Precio</th>
                <th className="py-3 px-4 text-left">Especialidad</th>
                <th className="py-3 px-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {medicamentos.map((med) => (
                <tr key={med.CodMedicamento} className="hover:bg-[#232b3b] transition">
                  <td className="py-3 px-4">{med.CodMedicamento}</td>
                  <td className="py-3 px-4">{med.descripcionMed}</td>
                  <td className="py-3 px-4">{med.stock}</td>
                  <td className="py-3 px-4">{med.precioVentaUni}</td>
                  <td className="py-3 px-4">{med.Especialidad?.descripcionEsp}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      className="mr-2 px-3 py-1 bg-gradient-to-r from-[#ffe259] to-[#ffa751] text-black rounded shadow hover:scale-105 transition"
                      onClick={() => router.push(`/medicamentos/${med.CodMedicamento}/edit`)}
                    >
                      Editar
                    </button>
                    <button
                      className="px-3 py-1 bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white rounded shadow hover:scale-105 transition"
                      onClick={() => handleDelete(med.CodMedicamento)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}