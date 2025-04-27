import { Component, inject } from '@angular/core';
import { Tv } from '../../../core/interface/tv';
import { ApiService } from '../../../core/service/api.service';
import { CardComponent } from '../../../shared/components/ui/card/card.component';

@Component({
  selector: 'app-tv',
  imports: [CardComponent],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css',
})
export class TvComponent {
  tvs!: Tv[];
  readonly _apiService = inject(ApiService);
  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this._apiService.getTV().subscribe({
      next: (res) => {
        console.log(res);
        this.tvs = res.results;
        console.log(this.tvs);
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
