import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { Main } from './main.view/main.view.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    Main.ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	 FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
