import { ConfiguracaoService } from './../../service/configuracao/configuracao.service';
import { RoleEnum } from './../../enum/role.enum';
import { AutenticacaoService } from './../../service/autenticacao/autenticacao.service';
import { Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-restrito',
  templateUrl: './restrito.component.html',
  styleUrls: ['./restrito.component.css']
})
export class RestritoComponent implements OnInit {

  constructor(private router: Router, private service: AutenticacaoService, private configuracaoService: ConfiguracaoService) { }

  contatoInstituicao!: string;

  ngOnInit(): void {
    this.service.executaRefreshToken();

    this.configuracaoService.getByNome('footer_contato_instituicao')
      .subscribe((e: any) => this.contatoInstituicao = e.valor);
  }

  deslogar() {
    let usuario = this.service.getUsuarioLogado();
    this.service.limparToken();
    this.router.navigate(['/publico', 'auth', usuario.role])
  }

  get usuarioLogado() {
    return this.service.getUsuarioLogado();
  }

  get menus() {
    let menuItem = [
      { titulo: 'Home', url: 'home', perfis: ['interno', 'responsavel'], nivel: 1 },
      { titulo: 'Responsáveis', url: 'responsavel', perfis: ['interno'], nivel: 3 },
      { titulo: 'Turmas', url: 'turmas', perfis: ['interno'], nivel: 2 },
      { titulo: 'Professores', url: 'interno', perfis: ['interno'], nivel: 2 },
      { titulo: 'Agenda', url: 'agenda', perfis: ['interno'], nivel: 1 },
      { titulo: 'Aluno', url: 'aluno', perfis: ['interno'], nivel: 2 },
      { titulo: 'Configuração', url: 'configuracao', perfis: ['interno'], nivel: 3 }
    ]

    let usuarioLogado = this.service.getUsuarioLogado();
    let usuarioLogadoRole = usuarioLogado.role;
    let usuarioLogadoNivel = usuarioLogado.nivel;

    return menuItem.filter(x => x.perfis.includes(usuarioLogadoRole) && usuarioLogadoNivel >= x.nivel);
  }
}
