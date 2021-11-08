import { Injectable } from '@nestjs/common';
import { RequestScopeService } from './request.scope.service';

@Injectable()
export class RequestScopeFacade {
    constructor(private readonly requestProviderService: RequestScopeService) {
        console.log('RequestScopeFacade constructor');
    }

    getRequestRandom(): number {
        return this.requestProviderService.getRequestRandom();
    }
}
