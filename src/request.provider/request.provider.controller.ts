import { Controller, Get } from '@nestjs/common';
import { RequestProviderFacade } from './request.provider.facade';

@Controller()
export class RequestProviderController {
    static readonly REQUEST_PROVIDER_PATH = '/requestProvider';

    constructor(private readonly requestProviderFacade: RequestProviderFacade) {
        console.log('RequestProviderController constructor');
    }

    @Get(RequestProviderController.REQUEST_PROVIDER_PATH)
    getRequestData(): string {
        return this.requestProviderFacade.getRequestData();
    }
}
