import { Controller, Get } from '@nestjs/common';
import { RequestProviderController } from './request.provider/request.provider.controller';
import { RequestScopeController } from './request.scope/request.scope.controller';

@Controller()
export class AppController {
    constructor() {
        console.log('AppController constructor');
    }

    @Get()
    getAvailableEndpoints(): string {
        return (
            `Available endpoints:` +
            `<br />Request provider example: <a href="${RequestProviderController.REQUEST_PROVIDER_PATH}?testQueryStringToModify" target="_blank"'>${RequestProviderController.REQUEST_PROVIDER_PATH}?testQueryStringToModify</a>` +
            `<br />Request scope example: <a href="${RequestScopeController.REQUEST_SCOPE_PATH}" target="_blank"'>${RequestScopeController.REQUEST_SCOPE_PATH}</a>`
        );
    }
}
