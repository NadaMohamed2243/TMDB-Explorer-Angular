import { JsonPipe } from '@angular/common';
import { Component, Input, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImagePathPipe } from "../../../pipes/image-path.pipe";

@Component({
  selector: 'app-card',
  imports: [RouterLink, ImagePathPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cardData = input<any>()
  fromWho = input<any>()
  // @Input() cardData: any;
}
