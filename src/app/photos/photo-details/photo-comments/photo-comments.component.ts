import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoComments } from '../../photo/photo-comments';
import { PhotoService } from './../../photo/photo.service';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {

    @Input() photoId: number

    comments$: Observable<PhotoComments[]>

    constructor(private photoService: PhotoService) { }

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId)
    }


}