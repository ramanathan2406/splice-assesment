import { Component, OnInit } from '@angular/core';
import { UtilService } from '../sevices/util.service';
import { WebService } from '../sevices/web.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post_list:any
  showLoader: boolean = true
  selector: string = '.container';
  spinnerloader = false;
  isFullListDisplayed: boolean = false;
  //
  noOfItemsToShowInitially: number = 10;
   itemsToLoad: number = 5;
   itemsToShow:any 
  constructor(private web:WebService,private util:UtilService) { }

  ngOnInit(): void {
    this.postlist('')
  }


  postlist(type:any){
    if (type == 'infinite') {
      this.spinnerloader = true;
    }
    this.web.post().subscribe(res=>{
      this.post_list =res
      this.itemsToShow = this.post_list.slice(0, this.noOfItemsToShowInitially);
      this.showLoader = false;
      if (this.noOfItemsToShowInitially <= this.itemsToShow.length && type == 'infinite') {
        this.spinnerloader = true
        this.noOfItemsToShowInitially += this.itemsToLoad;
        this.itemsToShow = this.post_list.slice(0, this.noOfItemsToShowInitially);
      }
      this.spinnerloader = false
    } ,err => {
      this.util.openSnackBar(err.error.message, "dismiss", 3000)
    })
  }

}
