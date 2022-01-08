
import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MediaMatcher } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { SidenavService } from '../sevices/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  showFiller = false;
  show =false;
  toggleActive = true;
  events: string[] = [];
  opened: boolean = true;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  @ViewChild('snav', { static: true }) public sidenav: MatSidenav | any;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route: ActivatedRoute, private http: HttpClient, public dialog: MatDialog, private sidenavService: SidenavService) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

}
