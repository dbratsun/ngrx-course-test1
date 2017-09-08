import { TestBed, inject } from '@angular/core/testing';

import { LoadRolesEffectService } from './load-roles-effect.service';

describe('LoadRolesEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadRolesEffectService]
    });
  });

  it('should be created', inject([LoadRolesEffectService], (service: LoadRolesEffectService) => {
    expect(service).toBeTruthy();
  }));
});
