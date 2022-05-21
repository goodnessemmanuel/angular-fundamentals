import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector: "event-thumbnail",
    templateUrl: "./event-thumbnail.component.html"
})
export class EventThumbnailComponent{
   @Input() event: any

   //use this media to send data or events to my parent component
   @Output() thumbnailClickEmitter = new EventEmitter();

   public onClick() {
       let data = {
         fromChild: "Event Thumbnail",
         actionOnChild: "Click",
         toParent: "Event List",
         message: this.event.name
       }
       console.log("Emitting ", data, " from EventThumbnailComponent...")
       this.thumbnailClickEmitter.emit(data)
   }
}