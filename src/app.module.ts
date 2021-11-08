import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RequestProviderController } from './request.provider/request.provider.controller';
import { RequestProviderFacade } from './request.provider/request.provider.facade';
import { RequestProviderService } from './request.provider/request.provider.service';
import { RequestScopeModule } from 'nj-request-scope';
import { RequestScopeController } from './request.scope/request.scope.controller';
import { RequestScopeFacade } from './request.scope/request.scope.facade';
import { RequestScopeService } from './request.scope/request.scope.service';

@Module({
    imports: [RequestScopeModule],
    controllers: [AppController, RequestProviderController, RequestScopeController],
    providers: [RequestProviderFacade, RequestProviderService, RequestScopeFacade, RequestScopeService],
})
export class AppModule {}
