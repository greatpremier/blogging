import { Component } from '@angular/core';
import { ConnService } from './services/conn.service';
import { TestSubService } from './services/test-sub.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogger';
  editorContent = '<i class="fas fa-heart"></i> Hello, world!';

  constructor(private tesing: TestSubService){ }
}
