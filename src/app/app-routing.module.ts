import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: 'app/modules/reader/reader.module#ReaderModule'
    },
    {
        path: 'editor',
        loadChildren: 'app/modules/editor/editor.module#EditorModule'
    },
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [CommonModule, RouterModule.forRoot(appRoutes)],
    declarations: [RouterModule]
})
export class AppRoutingModule {}
