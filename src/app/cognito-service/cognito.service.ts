import { Injectable } from '@angular/core';
import { CognitoUserPool, CognitoUser, AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js';

@Injectable({
  providedIn: 'root'
})

export class CognitoService {
  private poolData = {
    UserPoolId: 'us-east-1_eZSFmpME2',
    ClientId: '5i0ql0rglc9ju438m486v3cakk'
  };

  private userPool: CognitoUserPool;
  private cognitoUser: CognitoUser | null = null;

  constructor() {
    this.userPool = new CognitoUserPool(this.poolData);
  }

  signIn(username: string, password: string): Promise<CognitoUserSession> {
    const authenticationData = {
      Username: username,
      Password: password
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username: username,
      Pool: this.userPool
    };
    this.cognitoUser = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      this.cognitoUser?.authenticateUser(authenticationDetails, {
        onSuccess: (session: CognitoUserSession) => {
          resolve(session);
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  }

  signOut(): void {
    if (this.cognitoUser) {
      this.cognitoUser.signOut();
    }
  }

  getAccessToken(): string | null {
   const session = this.cognitoUser?.getSignInUserSession();
    return session?.getAccessToken()?.getJwtToken() || null;
  }

  isAuthenticated(): boolean {
    const session = this.cognitoUser?.getSignInUserSession();
    return !!session && session.isValid();
  }
}
