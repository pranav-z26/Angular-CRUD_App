import { Component, OnInit } from '@angular/core';
import { UserM } from './models/user/user.module';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crudapp';
  userarr: any;
  user: UserM = new UserM;
  inptn = "";
  inpta = "";

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.getUser().subscribe(data => {
      this.userarr = data
    });
    // this.ngOnInit()
  }

  addUser() {
    this.userservice.addUser(this.user).subscribe();
    this.user = new UserM;
    this.ngOnInit()
  }
}
