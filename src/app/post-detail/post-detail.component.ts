import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../sevices/util.service';
import { WebService } from '../sevices/web.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
id:any
single_detail:any
  constructor(private web: WebService, private route: ActivatedRoute, private util: UtilService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      this.id = res.get("id")
      this.postDetail()
    });
  }

  postDetail(){
    this.web.postDetail(this.id).subscribe((res:any) => {
      this.single_detail = res

    })
  }

}
