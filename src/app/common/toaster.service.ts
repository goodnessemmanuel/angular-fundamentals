import { Injectable } from "@angular/core";

/*
* The variable toastr is globally available because it has been 
* declared somewhere else in this case in node_modules>toastr.
* and have been registered in angular.json as static import
*/
declare let toastr: any 

@Injectable()
export class ToasterService{
    public success(message: string, title? :string){
        toastr.success(message, title)
    }
    public info(message: string, title? :string){
        toastr.info(message, title)
    }
    public warning(message: string, title? :string){
        toastr.warning(message, title)
    }
    public error(message: string, title? :string){
        toastr.error(message, title)
    }
}