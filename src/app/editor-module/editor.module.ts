import { EditorRoutingModule } from './editor-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditorPostsComponent } from './components/editor-posts/editor-posts.component';
import { EditorPostComponent } from './components/editor-post/editor-post.component';

@NgModule({
    imports: [CommonModule, FormsModule, EditorRoutingModule],
    declarations: [EditorPostsComponent, EditorPostComponent],
    exports: [],
    providers: []
})
export class EditorModule {}
