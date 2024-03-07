import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MetaModel } from '../../models/meta-model';

@Component({
  selector: 'app-previous-next',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './previous-next.component.html',
  styleUrl: './previous-next.component.css'
})
export class PreviousNextComponent implements OnInit{
  ngOnInit(): void {
    console.log("Meta enviado", this.meta.next_post);
  }
  @Input({required: true}) meta!: MetaModel;

}
