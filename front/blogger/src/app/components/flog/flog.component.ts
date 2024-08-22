import { Component, OnDestroy, OnInit } from '@angular/core';
import { state, style, transition, animate, trigger } from '@angular/animations';
import {AngularEditorConfig} from '@kolkov/angular-editor';

import { ConnService } from '../../services/conn.service';

@Component({
  selector: 'app-flog',
  templateUrl: './flog.component.html',
  styleUrl: './flog.component.css',
  animations: [
    trigger('adjust', [
      state('start', style({
        width: '500px',
        height: '500px'
      })),
      state('end', style({
        width: '250px',
        height: '250px'
      })),
      transition('start => end', [
      ])
    ])
  ]
})
export class FlogComponent implements OnInit, OnDestroy {
  posts: any = [];
  naming = '';
  newPost = {
    title: '',
    content: ''
  }
  showContent: any;

  constructor(private serv: ConnService){
   }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

  createPost(){
    this.serv.postData(this.newPost).subscribe(post => {
      this.posts.push(post);
      this.newPost = { title: '', content: '' }
    })
  }
  save(){
    return this.naming;
  }
  showPosts(){
    this.serv.getPost().subscribe(post => this.showContent = post)
  }

  isLarge: boolean = false;
  resize(){
    this.isLarge =! this.isLarge;
  }

}