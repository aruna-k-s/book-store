import { Component, OnInit } from '@angular/core';
import Epub, { EpubCFI } from 'epubjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'book-store';
  rendition: any;
  displayed: any;
  book: any;

  ngOnInit(): void {

    let xyz = new EpubCFI();
    this.book = Epub("../assets/epubFiles/igp-twss.epub");
    console.log(this.book,xyz);

    this.rendition = this.book.renderTo(document.getElementById('area'), { width: 600, height: 400 });
    this.displayed = this.rendition.display();
  }

  next(){
    this.rendition.next();
  }
  
}
