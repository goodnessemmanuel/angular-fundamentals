import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template: `
        <div class="form">
            <h1>New Event</h1>
            <hr>
            <div class="col-md-6">
                <h3>[Event creation form goes here!]</h3>
                <br>
                <br>
                <button type="submit" class="btn btn-primary">Save</button>
                <button (click)="cancel()" type="button" class="btn btn-default">Cancel</button>
            </div>
        </div>
    `
})
export class CreateEventComponent{
     isDirty: boolean = true

    constructor(private router: Router){}
    public cancel(){
        this.router.navigate(["/events"])
        console.log("canceled!")
    }

}