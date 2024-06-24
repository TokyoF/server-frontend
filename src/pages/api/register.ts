import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  const { nombre, apellido, codigoEstudiante, imagenUrl, cursos } = await request.json();

  await fetch("http://localhost:8080/api/v1/alumno", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      apellido,
      codigoEstudiante,
      imagenUrl,
      cursos,
    }),
  });

  return new Response(null, {
    status: 201,
  });
};
