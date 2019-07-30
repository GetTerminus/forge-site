// tslint:disable: no-non-null-assertion
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TsCardBorderOptions, TsCardComponent } from '@terminus/ui/card';


@Component({
  selector: 'demo-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements AfterViewInit {
  public supportsInteraction = false;
  public centered = false;
  public flat = false;
  public theme = 'primary';
  public border: TsCardBorderOptions = 'none';

  @ViewChild('transitionCard',  {static: true})
  public transitionCard!: TsCardComponent;

  public ngAfterViewInit() {
    // Default the card to 100px height for demo purposes
    const innerCard = document.getElementById(this.transitionCard.id);
    innerCard.style.height = '100px';
  }

  public changeCardHeight() {
    const innerCard = document.getElementById(this.transitionCard.id);
    innerCard.style.height = (innerCard.style.height === '100px') ? '200px' : '100px';
  }
}
