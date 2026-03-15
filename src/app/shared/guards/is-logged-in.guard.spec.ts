import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { IsLoggedInGuard } from './is-logged-in.guard';
import { AuthService } from '../services/auth.service';

describe('IsLoggedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IsLoggedInGuard,
        { provide: AuthService, useValue: { getUser: () => null } },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } },
      ],
    });
  });

  it('should ...', inject([IsLoggedInGuard], (guard: IsLoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
