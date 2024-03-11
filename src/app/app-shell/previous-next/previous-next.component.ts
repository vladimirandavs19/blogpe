import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MetaModel } from '../../models/meta-model';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-previous-next',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './previous-next.component.html',
  styleUrl: './previous-next.component.css'
})
export class PreviousNextComponent implements OnInit {
  redirigir(slug: string): void {
  Swal.fire('Estamos redirigiendo a la página del post');
  Swal.showLoading();
 this.route.navigate(['/post', slug]).then(()=> window.location.reload()).then(()=> Swal.close());
 
}

  constructor(private route: Router) {

  }

 

  ngOnInit(): void {

  }

  @Input({ required: true }) meta!: MetaModel;
}
