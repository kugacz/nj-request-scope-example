import { Injectable } from '@nestjs/common';
import { RequestScope } from 'nj-request-scope';

@Injectable()
@RequestScope()
export class RequestScopeService {
    private readonly random: number;

    constructor() {
        console.log('RequestScopeService constructor');
        this.random = Math.random();
    }

    getRequestRandom(): number {
        return this.random;
    }
}
