import { Injectable } from '@nestjs/common';
import { RequestProviderService } from './request.provider.service';

@Injectable()
export class RequestProviderFacade {
    constructor(private readonly requestProviderService: RequestProviderService) {
        console.log('RequestProviderFacade constructor');
    }

    getRequestData(): string {
        return this.requestProviderService.getRequestData();
    }
}
