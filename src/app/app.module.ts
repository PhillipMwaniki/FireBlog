import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { EditorModule } from './editor-module/editor.module';
import { ReaderModule } from './reader-module/reader.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
    declarations: [AppComponent, PageNotFoundComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'fire-blog' }),
        EditorModule,
        ReaderModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
