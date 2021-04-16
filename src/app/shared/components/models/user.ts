export type Role = 'ADMINISTRADOR' | 'CONDUCTOR' | 'RECOLECTOR' | 'COORDINADOR' | 'DIGITADOR'

export interface User {
    id?: string;
    email: string;
    password?: string;
    nombres?: string;
    apellidos?: string;
    identificacion?: string;
    role?: Role;
    estado?: string;
    telefono?: string;
    displayName?: string;
    photoURL?: string;
}
