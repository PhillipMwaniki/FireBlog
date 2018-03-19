import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReaderPostComponent } from './components/reader-post/reader-post.component';
import { ReaderPostsComponent } from './components/reader-posts/reader-posts.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ReaderPostComponent, ReaderPostsComponent]
})
export class ReaderModule {}
