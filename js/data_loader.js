export async function getData() {
  const res = await fetch('data.json');
  if (!res.ok) throw new Error('No se pudo cargar la data');
  return res.json();
}
