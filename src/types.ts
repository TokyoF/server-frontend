export interface Profesor {
    id: number;
    nombre: string;
    apellido: string;
  }
  
  export interface Curso {
    id: number;
    nombre: string;
    profesor: Profesor;
  }
  
  export interface Alumno {
    id: number;
    nombre: string;
    apellido: string;
    codigoEstudiante: string;
    imagenUrl: string;
    cursos: Curso[];
  }
  