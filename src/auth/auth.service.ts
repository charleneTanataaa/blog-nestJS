import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
    ){}

    async register(email: string, password: string){
        const hashed = await bcrypt.hash(password, 10);
        return this.usersService.create(email, hashed);
    }
}
