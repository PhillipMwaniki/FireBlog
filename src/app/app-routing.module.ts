import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: 'app/reader-module/reader.module#ReaderModule'
    },
    {
        path: 'editor',
        loadChildren: 'app/editor-module/editor.module#EditorModule'
    },
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [CommonModule, RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
