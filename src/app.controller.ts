import { Controller, Get, Param, Query, Redirect } from '@nestjs/common';

@Controller('')
export class AppController {
	@Get()
	appRoot(): string{
		return "App running..."
	}
}
