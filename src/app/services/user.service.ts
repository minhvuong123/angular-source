import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class UserService {
  baseUrl = '';
  rateLimit = 0;

  constructor() {}

  getApiBaseUrl(): string {
    return this.baseUrl
  }

  getRateLimit(): number {
    return this.rateLimit;
  }
}