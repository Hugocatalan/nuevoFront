import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab : Experiencia = null;
  constructor(private sExperiencia: SExperienciaService, private activatedRuter : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRuter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert:("No se pudo modificar la Experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRuter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe( data =>{
      this.router.navigate(['']);
    }, err =>{
      alert:("No se pudo modificar la Experiencia");
      this.router.navigate(['']);
    }
    )
  }
}
