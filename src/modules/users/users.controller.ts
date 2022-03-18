import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

	constructor(private usersService: UsersService){}

	@UseGuards(AuthGuard('jwt'))
	@Get('/me')
	async getUserDetails (@Request() req){
		return await this.usersService.findOneById(req.user.id)
	}
}
