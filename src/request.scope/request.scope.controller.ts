import { Controller, Get } from '@nestjs/common';
import { RequestScopeFacade } from './request.scope.facade';

@Controller()
export class RequestScopeController {
    static readonly REQUEST_SCOPE_PATH = '/requestScope';

    constructor(private readonly requestProviderFacade: RequestScopeFacade) {
        console.log('RequestScopeController constructor');
    }

    @Get(RequestScopeController.REQUEST_SCOPE_PATH)
    getRequestRandom(): string {
        return `Pseudo-random number for this request is ${this.requestProviderFacade.getRequestRandom()}`;
    }
}
