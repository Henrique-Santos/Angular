import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoComments } from '../photo/photo-comments';

import { Photo } from './../photo/photo';
import { PhotoService } from './../photo/photo.service';

@Component({
    templateUrl: './photo-details.component.html',
    styleUrls: ['photo-details.css']
})
export class PhotoDetailsComponent implements OnInit {

    photo$: Observable<Photo>
    comments$: Observable<PhotoComments[]>

    constructor(
        private route: ActivatedRoute,
        private photoService: PhotoService
    ) { }

    ngOnInit(): void {
        const photoId = this.route.snapshot.params.photoId
        this.photo$ = this.photoService.findById(photoId)
        this.comments$ = this.photoService.getComments(photoId)
    }
}