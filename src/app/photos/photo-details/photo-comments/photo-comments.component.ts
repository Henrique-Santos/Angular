import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { PhotoComments } from '../../photo/photo-comments';
import { PhotoService } from './../../photo/photo.service';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html',
    styleUrls: ['photo-comments.css']
})
export class PhotoCommentsComponent implements OnInit {

    @Input() photoId: number
    comments$: Observable<PhotoComments[]>
    commentForm: FormGroup

    constructor(
        private photoService: PhotoService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId)
        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.maxLength(300)]
        })
    }

    save() {
        const comment = this.commentForm.get('comment').value as string
        this.comments$ = this.photoService
            .addComment(this.photoId, comment)
            .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
            .pipe(tap(() => this.commentForm.reset()))
    }

}