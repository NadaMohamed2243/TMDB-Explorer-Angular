import { Component, inject } from '@angular/core';
import { People } from '../../../core/interface/people';
import { ApiService } from '../../../core/service/api.service';
import { CardComponent } from '../../../shared/components/ui/card/card.component';

@Component({
  selector: 'app-people',
  imports: [CardComponent],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css',
})
export class PeopleComponent {
  people!: People[];
  readonly _apiService = inject(ApiService);
  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this._apiService.getPeople().subscribe({
      next: (res) => {
        console.log(res);
        this.people = res.results;
        console.log(this.people);
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
