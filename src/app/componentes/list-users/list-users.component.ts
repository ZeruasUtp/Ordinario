import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListUsersComponent implements OnInit {
  userId: number = 0;
  listUsers: User [] = []

  loading: boolean = false;

  constructor(private _userService: UserService, private toastr: ToastrService,private route: ActivatedRoute){ }

  ngOnInit(): void {
    

    this.route.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
      if (this.userId) {
        this.getUserById();
      }
    });
  }
  
  getUserById() {
    this.loading = true;
    this._userService.getUserById(this.userId).subscribe((data: User) => {
      if (data) {
        this.listUsers = [data];
      } else {
        this.toastr.error('No se encontró ningún usuario con ese ID');
      }
      this.loading = false;
    }, () => {
      this.toastr.error('No se pudo obtener el usuario con el ID proporcionado.');
      this.loading = false;
    });

  }
}
