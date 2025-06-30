const BASE_URL = 'http://localhost:3001/api/especialidades';

export async function getEspecialidades() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function getEspecialidad(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
}

export async function createEspecialidad(especialidad) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(especialidad)
  });
  return res.json();
}

export async function updateEspecialidad(id, especialidad) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(especialidad)
  });
  return res.json();
}

export async function deleteEspecialidad(id) {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
}