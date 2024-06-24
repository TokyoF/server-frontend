interface Alumno {
    nombre: string;
    apellido: string;
    codigoEstudiante: string;
    imagenUrl: string;
    cursos: string[];
  }
  
  const alumnos: Alumno[] = [];
  
  export const isRegistered = async (codigoEstudiante: string): Promise<boolean> => {
    return alumnos.some(alumno => alumno.codigoEstudiante === codigoEstudiante);
  };
  
  export const registerAlumno = async (alumno: Alumno): Promise<void> => {
    alumnos.push(alumno);
  };
  
  export const getAlumnos = async (): Promise<Alumno[]> => {
    return alumnos;
  };
  