import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { WebService } from './web.service';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { EditorschoicePipe } from './editorschoice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameInfoComponent,
    SearchPipe,
    SortPipe,
    EditorschoicePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    WebService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
