import { TrocasenhaService } from './../../service/trocasenha/trocasenha.service';
import { AutenticacaoService } from './../../service/autenticacao/autenticacao.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent implements OnInit {

  environment = environment;
  emailRedefinicao!: string;
  usuario: any = {};

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private service: AutenticacaoService,
    private modalService: NgbModal,
    private trocasenhaService: TrocasenhaService,
    private toastr: ToastrService) { }

  redirect() {
    this.router.navigate(['/restrito', 'home']);
  }

  ngOnInit(): void {
    if(this.service.getToken() != null)
      this.redirect();
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.trocasenhaService.solicitar(this.emailRedefinicao, this.activatedRoute.snapshot.params.perfil)
        .subscribe(x => {
          this.toastr.success("Solicitação de troca de senha enviada por e-mail.");
        })
    }, (reason) => {
      console.log("NOK");
    });
  }

  autenticar() {
    this.service.autenticar(this.usuario.login, this.usuario.senha, this.activatedRoute.snapshot.params.perfil)
      .subscribe((x: any) => {
        this.service.armazenarToken(x.token);
        this.redirect();
      });
  }

  get modulo() {
    return this.activatedRoute.snapshot.params.perfil;
  }

}
