import { ServerService } from './../../services/server.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core'; 
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private serverService: ServerService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  saveRecipes(){
     this.serverService.saveRecipes()
      .subscribe((res: Response) => console.log(res))
  }

  getRecipes(){
    this.serverService.getRecipes();
  }

  onLogout(){
    this.authService.logout();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  
  
}
