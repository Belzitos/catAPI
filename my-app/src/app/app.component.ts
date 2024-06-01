import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

type Gato = {
  id: string;
  url: string;
  width: number;
  height: number;
};

@Component({
  templateUrl: './app.component.html',
  selector: 'app-root',
  styleUrl: './app.component.scss',
  imports: [CommonModule, HttpClientModule],
  standalone: true,
})
export class AppComponent {
  title = 'my-app';
  gatos: Gato[] = [];

  constructor(private http: HttpClient) {}

  buscarImagens() {
    this.http
      .get<Gato[]>('https://api.thecatapi.com/v1/images/search?limit=10')
      .subscribe((dados) => {
        this.gatos = this.gatos.concat(dados);
      });
  }
}
