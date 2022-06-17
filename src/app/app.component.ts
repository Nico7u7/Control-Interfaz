import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  
  constructor(private WebsocketService: WebSocketService){}

  ngOnInit(){
    this.WebsocketService.listen("test event").subscribe((data) => {
      console.log(data);
    });
  }

}
