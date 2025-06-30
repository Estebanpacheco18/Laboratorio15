const BASE_URL = 'http://localhost:3001/api/medicamentos';

export async function getMedicamentos() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function getMedicamento(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
}

export async function createMedicamento(medicamento) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(medicamento)
  });
  return res.json();
}

export async function updateMedicamento(id, medicamento) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(medicamento)
  });
  return res.json();
}

export async function deleteMedicamento(id) {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
}