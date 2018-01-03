
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { firebase } from '@firebase/app';



@Injectable()
export class AuthService {
  user$: Observable<any>;


  constructor(private afAuth: AngularFireAuth,
    private router: Router) {

    this.user$ = this.afAuth.authState;

  }
  emailLogin(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('login successful ');
        this.router.navigateByUrl('/dashboard');
      }
      )
      .catch( (error) => {
        this.handleError(error);
        this.router.navigateByUrl('');
         }
      );
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const fbAuth = firebase.auth();

    fbAuth.sendPasswordResetEmail(email)
      .catch((error) => this.handleError(error));
  }

  logOut() {
    this.afAuth.auth.signOut().then(() => {
      console.log('logout successful ');
      this.router.navigate(['/']);
    });
  }

  // If error, console log and notify user
  private handleError(error: Error) {
    console.error(error);

  }

}
