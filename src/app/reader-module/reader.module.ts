import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReaderPostComponent } from './components/reader-post/reader-post.component';
import { ReaderPostsComponent } from './components/reader-posts/reader-posts.component';
import { ReaderRoutingModule } from './reader-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, ReaderRoutingModule],
    declarations: [ReaderPostComponent, ReaderPostsComponent],
    exports: [],
    providers: []
})
export class ReaderModule {}
