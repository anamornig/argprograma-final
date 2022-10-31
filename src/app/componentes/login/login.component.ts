import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLoggedinFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;  

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router){}
    
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoggedinFail = false;
      this.roles = this.tokenService.getAuthorities();
    }

  }


    onLogin(): void {
      this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
      this.authService.login(this.loginUsuario).subscribe(
        data =>{
          this.isLogged = true;
          this.isLoggedinFail = false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUsername(data.nombreUsuario);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.router.navigate([''])
        }, err =>{
          this.isLogged = false;
          this.isLoggedinFail = true;
          this.errMsj = err.error.mensaje;
          console.log(this.errMsj);
        }
      )
    }


  }




  /*
  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) {
    this.form=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      deviceInfo:this.formBuilder.group({
        deviceId: ["17867868768"],
        deviceType: ["DEVIDE_TYPE_ANDROID"],
        notificationToken:["6765767eececc34"]
      })
    })
  }

  ngOnInit(): void {
  }

  get Email()
  {
    return this.form.get('email');
  }
  get Password()
  {return this.form.get('password');}

  onEnviar(event:Event) {
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(['/portfolio'])
    })
  } */


