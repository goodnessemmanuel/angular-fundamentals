import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
})
export class EventThumbnailComponent {
  @Input() event: any;

  public logFoo() {
    console.log('Foo!!!');
  }
}
