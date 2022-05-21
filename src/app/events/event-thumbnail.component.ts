import { Component, Input } from "@angular/core";


@Component({
    selector: "event-thumbnail",
    templateUrl: "./event-thumbnail.component.html",
    styles: [`
        .thumbnail{ min-height: 210px }
        .padding-left{ margin-left: 10px; }
        .well div{ color: #bbb }
        .bold{font-weight: bold}
        .green{color: green !important}
    `]
})
export class EventThumbnailComponent{
   @Input() event: any

   public getStartTimeClasses(): any[]{
       if(this.event && this.event.time === '8:00 am')
            return ["bold", "green"];
        return []    
   }
}
