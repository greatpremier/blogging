import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-display',
  templateUrl: './blog-display.component.html',
  styleUrl: './blog-display.component.css'
})
export class BlogDisplayComponent {
  editorContent = '<i class="fas fa-heart"></i> Hello, world!';
}
