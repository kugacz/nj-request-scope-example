import { Inject, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { NJRS_REQUEST } from 'nj-request-scope';

@Injectable()
export class RequestProviderService {
    constructor(@Inject(NJRS_REQUEST) private readonly request: Request) {
        console.log('RequestProviderService constructor');
    }

    getRequestData(): string {
        return `OriginalUrl: ${this.request.originalUrl}<br />User-Agent: ${this.request.header('User-Agent') ?? 'unknown'}`;
    }
}
