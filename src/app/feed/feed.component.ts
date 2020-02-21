import { Component, OnInit } from '@angular/core';
import { PaulogitService } from './services/paulogit.service';
import { Gitlist } from './services/model/gitlist';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  gitlist: Gitlist[];

  constructor(private gitserver: PaulogitService) { }

  ngOnInit() {
    this.gitserver.getList().subscribe(
      (gitlist) => {
          this.gitlist = gitlist;
      }
    )
  }
}
