import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorPostsComponent } from './editor-posts/editor-posts.component';
import { EditorPostComponent } from './editor-post/editor-post.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EditorPostsComponent, EditorPostComponent]
})
export class EditorModuleModule { }
