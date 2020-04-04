import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    HeaderComponent,
    PostsComponent
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
