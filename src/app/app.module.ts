import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { EditorModule } from './editor-module/editor.module';
import { ReaderModule } from './reader-module/reader.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, EditorModule, ReaderModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
