import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/sevices/util.service';
import { WebService } from 'src/app/sevices/web.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-photos-album',
  templateUrl: './photos-album.component.html',
  styleUrls: ['./photos-album.component.scss']
})
export class PhotosAlbumComponent implements OnInit {
  photos_list: any
  photos = new FormControl();
  showLoader: boolean = true
  selector: string = '.container';
  spinnerloader = false;
  isFullListDisplayed: boolean = false;
  //
  noOfItemsToShowInitially: number = 10;
  itemsToLoad: number = 5;
  itemsToShow: any
  search: string = ''
  searchList: any = []
  CategorySuggestions: BehaviorSubject<any[]> | any = new BehaviorSubject(undefined);
  constructor(private web: WebService, private util: UtilService) { }

  ngOnInit(): void {
    this.photoslist('')
  }

  applyFilter(event: any) {
    this.itemsToShow = this.searchList.filter((e: any) =>
      e.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
  }
  getPhotos() {
    this.web.photoAlbum().subscribe(res => {
      this.photos_list = res
      this.photos.valueChanges.subscribe(data => {
        if (typeof data === 'string' && data.trim() !== '') {
          this.getphotos(data);
        }
      });
      this.getphotos('')
    }, err => {
      this.util.openSnackBar(err.error.message, "dismiss", 3000)
    })
  }


  getphotos(input: any) {
    const filterValue = input.toLowerCase();
    let data = this.photos_list.slice(0, this.noOfItemsToShowInitially);
    this.itemsToShow = data.filter((ele: any) => ele.title.toLowerCase().includes(filterValue));
    this.itemsToShow = this.itemsToShow.length ? this.itemsToShow : [{ title: 'No Data' }];
    return this.CategorySuggestions.next(this.itemsToShow);
  }
  dispCategory() {
    return (val: any) => this.formatMerchant(val);
  }
  formatMerchant(_val: any) {
    if (_val) return `${_val?.title || ""}`;
    return "";
  }

  onSelectionPhotos(event: any) {
    if (event?.option?.value) {
      this.itemsToShow = []
      this.itemsToShow.push({
        "albumId": event?.option?.value.albumId,
        "id": event?.option?.value.id,
        "thumbnailUrl": event?.option?.value.thumbnailUrl,
        "title": event?.option?.value.title,
        "url": event?.option?.value.url,
      })
    }

  }


  photoslist(type: any) {
    if (type == 'infinite') {
      this.spinnerloader = true;
    }
    this.web.photoAlbum().subscribe(res => {
      this.photos_list = res
      this.searchList = res
      this.itemsToShow = this.photos_list.slice(0, this.noOfItemsToShowInitially);
      this.showLoader = false;
      if (this.noOfItemsToShowInitially <= this.itemsToShow.length && type == 'infinite') {
        this.spinnerloader = true
        this.noOfItemsToShowInitially += this.itemsToLoad;
        this.itemsToShow = this.photos_list.slice(0, this.noOfItemsToShowInitially);
      }
      this.spinnerloader = false
      this.getPhotos()
    }, err => {
      this.util.openSnackBar(err.error.message, "dismiss", 3000)
    })
  }

}
