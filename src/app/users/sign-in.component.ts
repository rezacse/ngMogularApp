import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserRepositoryService } from '../core/user-repository.service';

@Component({
  styleUrls: ['./sign-in.component.css'],
  templateUrl: './sign-in.component.html'
})
export class SignInComponent {
  credentials: any = {};

  constructor(private router: Router, private userRepository: UserRepositoryService) { }

  signIn(credentials: any) {
    this.userRepository.signIn(credentials)
      .subscribe({
        complete: () => this.router.navigate(['/catalog']),
        error: (err) => { console.error(err, 'Error'); }
      });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}

