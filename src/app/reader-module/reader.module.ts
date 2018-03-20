import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReaderPostComponent } from './components/reader-post/reader-post.component';
import { ReaderPostsComponent } from './components/reader-posts/reader-posts.component';

import { FormsModule } from '@angular/forms';
import {ReaderRoutingModule} from './reader-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, ReaderRoutingModule],
    declarations: [ReaderPostComponent, ReaderPostsComponent],
    exports: [],
    providers: []
})
export class ReaderModule {}
