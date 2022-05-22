import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { userRoutes } from './user.routes';
/**
 * This is a feature module.
 * It is link to the main application via the 
 * routes.ts file located in the root folder
 */
@NgModule({
  imports: [ CommonModule, RouterModule.forChild(userRoutes)],
  declarations: [ UserProfileComponent ],
})
export class UserMondule {}
