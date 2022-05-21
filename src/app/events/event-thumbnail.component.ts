import { Component } from "@angular/core";


@Component({
    selector: "event-thumbnail",
    template: `
    <div class="well hoverwell thumbnail">
      <h2>{{ event.name }}</h2>
      <div>Price: \${{ event.price }}</div>
      <div>Date: {{ event.date }}</div>
      <div>
        <span>Location: {{ event.location.address }}</span>
        <span> &nbsp; </span>
        <span>{{ event.location.city }}, {{ event.location.country }}</span>
      </div>
    `
})
export class EventThumbnailComponent{
    
    public event = {
    id: 1,
    name: 'Angular Connect',
    price: 569,
    date: '10/09/1988',
    imageURL: '/assets/images/basic-shield.png',
    location: {
      address: 'Kingston Layout',
      city: 'Las Vegas',
      country: 'USA',
    },
  };


}