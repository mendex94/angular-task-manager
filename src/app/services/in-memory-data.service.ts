import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} | Observable<{}> | Promise<{}> {
    const users = [
      {
        id: 1,
        email: 'test@example.com',
        password: '123456',
        token: 'fake-jwt-token',
      },
    ];

    return { users };
  }
}
