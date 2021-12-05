import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FireauthService } from 'src/app/backend/services/authentication/fireauth.service';

@Component({
  selector: 'app-back-login',
  templateUrl: './back-login.page.html',
  styleUrls: ['./back-login.page.scss'],
})
export class BackLoginPage implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router,
    private fireAuthService: FireauthService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async mailLogin() {
    const loading = await this.loadingController.create();
    await loading.present();
    console.log(this.loginForm.value);

    this.fireAuthService.singInWithEmail(this.loginForm.value).then(
      (user) => {
        loading.dismiss();
        this.router.navigateByUrl('/back-admin-main', { replaceUrl: true });
      },
      async (err) => {
        loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Login up failed :(',
          message: err.message,
          buttons: ['Try again?'],
        });

        await alert.present();
      }
    );
  }

}
