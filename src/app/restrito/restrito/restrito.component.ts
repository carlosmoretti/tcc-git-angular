import { RoleEnum } from './../../enum/role.enum';
import { AutenticacaoService } from './../../service/autenticacao/autenticacao.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restrito',
  templateUrl: './restrito.component.html',
  styleUrls: ['./restrito.component.css']
})
export class RestritoComponent implements OnInit {

  constructor(private router: Router, private service: AutenticacaoService) { }

  ngOnInit(): void {
    this.service.executaRefreshToken();
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
      { titulo: 'Home', url: 'home', perfis: ['interno', 'responsavel'] },
      { titulo: 'Responsáveis', url: 'responsavel', perfis: ['interno'] },
      { titulo: 'Turmas', url: 'turmas', perfis: ['interno'] },
      { titulo: 'Professores', url: 'interno', perfis: ['interno'] },
      { titulo: 'Agenda', url: 'agenda', perfis: ['interno'] },
      { titulo: 'Aluno', url: 'aluno', perfis: ['interno'] }
    ]

    let usuarioLogado = this.service.getUsuarioLogado().role;
    return menuItem.filter(x => x.perfis.includes(usuarioLogado))
  }
}
