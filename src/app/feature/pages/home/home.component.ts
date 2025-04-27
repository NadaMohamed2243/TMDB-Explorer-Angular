import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { Media } from '../../../core/interface/media';
import { CardComponent } from '../../../shared/components/ui/card/card.component';

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  allTrending!: Media[];
  readonly _apiService = inject(ApiService);
  ngOnInit(): void {
    this.getAllTrending();
  }

  getAllTrending() {
    this._apiService.getTrending().subscribe({
      next: (res) => {
        console.log(res);
        this.allTrending = res.results;
        console.log(this.allTrending);
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('completed');
      },
    });
  }
}
