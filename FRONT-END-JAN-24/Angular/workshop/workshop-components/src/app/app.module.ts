import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PostListComponent } from './post-list/post-list.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { HttpClientModule} from '@angular/common/http';
import { CoreModule } from "./core/core.module";
@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        PostListComponent,
        ThemesListComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CoreModule,
    ]
})
export class AppModule { }
