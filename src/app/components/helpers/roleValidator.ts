import { User } from "src/app/shared/components/models/user";

export class RoleValidator {
    isAdmin(user:User): boolean {
        return user.role == 'ADMINISTRADOR'
    }
}