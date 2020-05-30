import { NgModule, Component } from "@angular/core";

import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
//import { toPromise } from "rxjs/operators";


@Component({
  selector: "app",
  template: `
  
  <div id="wrapper" class="wrapper">
  <section class="section-space-default bg-light">
  <div class="container">
  <div class="row">
  <div class="col-6">
     <button class="btn btn-primary" (click)="doGET()">Lấy Dữ Liệu</button>
     <button class="btn btn-primary" (click)="doPOST()">Tạo Sự Kiện</button>
     <button class="btn btn-primary" (click)="doDELETE()">Xóa Sự Kiện</button>
  </div>
</div>

<div class="row">Xuất dữ liệu từ Google Sheets: <pre>{{myData | json}}</pre></div>
</div></section>
  <section class="section-space-default bg-light">
     <div class="container zoom-gallery menu-list-wrapper">
        <div class="section-heading title-black color-dark text-center">
           <h2>Conference Schedule</h2>
           <p>Dorem ipsum dolor sit. Incidunt laborum beatae earum nihil odio consequatur</p>
        </div>
        <div class="table-responsive">
           <table class="table table-striped schedule-layout1">
              <tbody class="menu-list">
                 <tr class="menu-item">
                    <th>
                       <div class="day-number">Day - 01</div>
                       <div class="schedule-date">17th Oct</div>
                    </th>
                    <td>
                       <div class="schedule-title">
                          <a href="single-event.html">Introduction Business</a>
                       </div>
                    </td>
                    <td>
                       <div class="schedule-time">
                          <i class="fa fa-clock-o" aria-hidden="true"></i>08:00 - 09:30 AM
                       </div>
                    </td>
                    <td>
                       <ul class="schedule-speaker">
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Daizy Chirs">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker1.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                          <li>
                             <div class="speaker-img-tooltip" data-tips="James Morgan">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker2.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Carolin Rose">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker3.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                       </ul>
                    </td>
                 </tr>
                 <tr class="menu-item">
                    <th>
                       <div class="day-number">Day - 02</div>
                       <div class="schedule-date">19th Oct</div>
                    </th>
                    <td>
                       <div class="schedule-title">
                          <a href="single-event.html">Marketing Strategy</a>
                       </div>
                    </td>
                    <td>
                       <div class="schedule-time">
                          <i class="fa fa-clock-o" aria-hidden="true"></i>09:00 - 10:30 AM
                       </div>
                    </td>
                    <td>
                       <ul class="schedule-speaker">
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Mark Willy">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker4.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Steve John">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker5.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                       </ul>
                    </td>
                 </tr>
                 <tr class="menu-item">
                    <th>
                       <div class="day-number">Day - 03</div>
                       <div class="schedule-date">20th Oct</div>
                    </th>
                    <td>
                       <div class="schedule-title">
                          <a href="single-event.html">Digital Marketing Theory</a>
                       </div>
                    </td>
                    <td>
                       <div class="schedule-time">
                          <i class="fa fa-clock-o" aria-hidden="true"></i>10:30 - 11:30 AM
                       </div>
                    </td>
                    <td>
                       <ul class="schedule-speaker">
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Ayrin Dina">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker6.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Cristian Zozo">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker7.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Lara Quize">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker8.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                       </ul>
                    </td>
                 </tr>
                 <tr class="menu-item">
                    <th>
                       <div class="day-number">Day - 04</div>
                       <div class="schedule-date">24th Oct</div>
                    </th>
                    <td>
                       <div class="schedule-title">
                          <a href="single-event.html">Mass Marketing</a>
                       </div>
                    </td>
                    <td>
                       <div class="schedule-time">
                          <i class="fa fa-clock-o" aria-hidden="true"></i>12:00 - 01:30 PM
                       </div>
                    </td>
                    <td>
                       <ul class="schedule-speaker">
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Daizy Chirs">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker1.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                          <li>
                             <div class="speaker-img-tooltip" data-tips="James Morgan">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker2.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Carolin Rose">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker3.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                       </ul>
                    </td>
                 </tr>
                 <tr class="menu-item">
                    <th>
                       <div class="day-number">Day - 05</div>
                       <div class="schedule-date">25th Oct</div>
                    </th>
                    <td>
                       <div class="schedule-title">
                          <a href="single-event.html">Marketing Workshop</a>
                       </div>
                    </td>
                    <td>
                       <div class="schedule-time">
                          <i class="fa fa-clock-o" aria-hidden="true"></i>02:00 - 03:30 PM
                       </div>
                    </td>
                    <td>
                       <ul class="schedule-speaker">
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Mark Willy">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker4.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Steve John">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker5.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                       </ul>
                    </td>
                 </tr>
                 <tr class="menu-item hidden">
                    <th>
                       <div class="day-number">Day - 01</div>
                       <div class="schedule-date">17th Oct</div>
                    </th>
                    <td>
                       <div class="schedule-title">
                          <a href="single-event.html">Introduction Business</a>
                       </div>
                    </td>
                    <td>
                       <div class="schedule-time">
                          <i class="fa fa-clock-o" aria-hidden="true"></i>08:00 - 09:30 AM
                       </div>
                    </td>
                    <td>
                       <ul class="schedule-speaker">
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Daizy Chirs">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker1.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                          <li>
                             <div class="speaker-img-tooltip" data-tips="James Morgan">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker2.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Carolin Rose">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker3.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                       </ul>
                    </td>
                 </tr>
                 <tr class="menu-item hidden">
                    <th>
                       <div class="day-number">Day - 02</div>
                       <div class="schedule-date">19th Oct</div>
                    </th>
                    <td>
                       <div class="schedule-title">
                          <a href="single-event.html">Marketing Strategy</a>
                       </div>
                    </td>
                    <td>
                       <div class="schedule-time">
                          <i class="fa fa-clock-o" aria-hidden="true"></i>09:00 - 10:30 AM
                       </div>
                    </td>
                    <td>
                       <ul class="schedule-speaker">
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Mark Willy">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker4.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Steve John">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker5.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                       </ul>
                    </td>
                 </tr>
                 <tr class="menu-item hidden">
                    <th>
                       <div class="day-number">Day - 03</div>
                       <div class="schedule-date">20th Oct</div>
                    </th>
                    <td>
                       <div class="schedule-title">
                          <a href="single-event.html">Digital Marketing Theory</a>
                       </div>
                    </td>
                    <td>
                       <div class="schedule-time">
                          <i class="fa fa-clock-o" aria-hidden="true"></i>10:30 - 11:30 AM
                       </div>
                    </td>
                    <td>
                       <ul class="schedule-speaker">
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Ayrin Dina">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker6.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Cristian Zozo">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker7.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Lara Quize">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker8.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                       </ul>
                    </td>
                 </tr>
                 <tr class="menu-item hidden">
                    <th>
                       <div class="day-number">Day - 04</div>
                       <div class="schedule-date">24th Oct</div>
                    </th>
                    <td>
                       <div class="schedule-title">
                          <a href="single-event.html">Mass Marketing</a>
                       </div>
                    </td>
                    <td>
                       <div class="schedule-time">
                          <i class="fa fa-clock-o" aria-hidden="true"></i>12:00 - 01:30 PM
                       </div>
                    </td>
                    <td>
                       <ul class="schedule-speaker">
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Daizy Chirs">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker1.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                          <li>
                             <div class="speaker-img-tooltip" data-tips="James Morgan">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker2.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Carolin Rose">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker3.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                       </ul>
                    </td>
                 </tr>
                 <tr class="menu-item hidden">
                    <th>
                       <div class="day-number">Day - 05</div>
                       <div class="schedule-date">25th Oct</div>
                    </th>
                    <td>
                       <div class="schedule-title">
                          <a href="single-event.html">Marketing Workshop</a>
                       </div>
                    </td>
                    <td>
                       <div class="schedule-time">
                          <i class="fa fa-clock-o" aria-hidden="true"></i>02:00 - 03:30 PM
                       </div>
                    </td>
                    <td>
                       <ul class="schedule-speaker">
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Mark Willy">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker4.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                          <li>
                             <div class="speaker-img-tooltip" data-tips="Steve John">
                                <img src="https://www.radiustheme.com/demo/html/eventalk/img/speaker/speaker5.png" alt="schedule" class="rounded-circle">
                             </div>
                          </li>
                       </ul>
                    </td>
                 </tr>
              </tbody>
           </table>
        </div>
        <div class="row">
           <div class="col-12 text-center">
              <a href="#" title="More Schedule" class="loadmore-one-item btn-fill size-lg border-radius-5 color-yellow margin-t-50">More Schedule</a>
           </div>
        </div>
     </div>
  </section>
  <!-- Schedule Area End Here -->
  <!-- Pricing Plan Area Start Here -->
  <!-- Pricing Plan Area End Here -->
  <!-- Progress Area Start Here -->
  <!-- Progress Area End Here -->
  <!-- Sponsonrs Area Start Here -->
  <!-- Sponsonrs Area End Here -->
  <!-- Blog Area Start Here -->
  <section class="section-space-default-less30 bg-accent">
     <div class="container">
        <div class="section-heading title-black color-dark text-center">
           <h2>Our Latest Blogs</h2>
           <p>Sed condimentum tempus auctor Etiam euismod dapibus odio eu congue.</p>
        </div>
        <div class="row">
           <div class="col-md-4 col-sm-12">
              <div class="blog-layout1">
                 <div class="item-img">
                    <img src="https://www.radiustheme.com/demo/html/eventalk/img/blog/blog1.jpg" alt="blog" class="img-fluid">
                    <div class="item-date">26
                       <span> Oct</span>
                    </div>
                 </div>
                 <div class="item-content">
                    <div class="item-title">
                       <h3 class="title-medium color-dark hover-primary">
                          <a href="single-blog.html">Donec quam felis ultricies</a>
                       </h3>
                    </div>
                    <div class="item-deccription">
                       <p>Eventrem ipsum dolor sit amet sectetuer adipiscing elit. Aenean commo doneerty enean
                          massa toque.
                       </p>
                    </div>
                    <a href="#" title="Read More" class="btn-text">Read More</a>
                 </div>
              </div>
           </div>
           <div class="col-md-4 col-sm-12">
              <div class="blog-layout1">
                 <div class="item-img">
                    <img src="https://www.radiustheme.com/demo/html/eventalk/img/blog/blog2.jpg" alt="blog" class="img-fluid">
                    <div class="item-date">27
                       <span> Aug</span>
                    </div>
                 </div>
                 <div class="item-content">
                    <div class="item-title">
                       <h3 class="title-medium color-dark hover-primary">
                          <a href="single-blog.html">Donec quam felis ultricies</a>
                       </h3>
                    </div>
                    <div class="item-deccription">
                       <p>Eventrem ipsum dolor sit amet sectetuer adipiscing elit. Aenean commo doneerty enean
                          massa toque.
                       </p>
                    </div>
                    <a href="#" title="Read More" class="btn-text">Read More</a>
                 </div>
              </div>
           </div>
           <div class="col-md-4 col-sm-12">
              <div class="blog-layout1">
                 <div class="item-img">
                    <img src="https://www.radiustheme.com/demo/html/eventalk/img/blog/blog3.jpg" alt="blog" class="img-fluid">
                    <div class="item-date">29
                       <span> Nov</span>
                    </div>
                 </div>
                 <div class="item-content">
                    <div class="item-title">
                       <h3 class="title-medium color-dark hover-primary">
                          <a href="single-blog.html">Donec quam felis ultricies</a>
                       </h3>
                    </div>
                    <div class="item-deccription">
                       <p>Eventrem ipsum dolor sit amet sectetuer adipiscing elit. Aenean commo doneerty enean
                          massa toque.
                       </p>
                    </div>
                    <a href="#" title="Read More" class="btn-text">Read More</a>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </section>
 
  <footer>
     <div class="footer-layout1 bg-light">
        <div class="container">
           <div class="row">
              <div class="col-12">
                 <a href="index.html" class="footer-logo">
                 </a>
                 <p>2020 Khoa CNTT Make By LCH
                 </p>
                 <div class="footer-social">
                    <ul>
                       <li>
                          <a href="#" title="facebook">
                          <i class="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                       </li>
                       <li>
                          <a href="#" title="twitter">
                          <i class="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                       </li>
                       <li>
                          <a href="#" title="google-plus">
                          <i class="fa fa-google-plus" aria-hidden="true"></i>
                          </a>
                       </li>
                       <li>
                          <a href="#" title="linkedin">
                          <i class="fa fa-linkedin" aria-hidden="true"></i>
                          </a>
                       </li>
                       <li>
                          <a href="#" title="pinterest">
                          <i class="fa fa-pinterest" aria-hidden="true"></i>
                          </a>
                       </li>
                       <li>
                          <a href="#" title="rss">
                          <i class="fa fa-rss" aria-hidden="true"></i>
                          </a>
                       </li>
                       <li>
                          <a href="#" title="vimeo">
                          <i class="fa fa-vimeo" aria-hidden="true"></i>
                          </a>
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </footer>
  <!-- Footer Area End Here -->
</div>

<a id="scrollUp" href="#top" style="position: fixed; z-index: 2147483647; display: none;">
  <i class="fa fa-angle-up"></i>
  <p>TOP</p>
</a>
`
})
export class AppComponent {
  apiRoot: string = "https://script.google.com/macros/s/AKfycbzp1brXop99zVGaqSehBVQlO0c5s8b-0fKj4UzPUxx01DkoJWuF/exec?request";

  constructor(private http: HttpClient) {}
  myData : any;

  doGET() {
    console.log("GET");
    let url = `${this.apiRoot}=getEvent`;
    const httpOptions = {
      params: new HttpParams().set("foo", "moo").set("limit", "25")
    };
    this.http.get(url, httpOptions).subscribe(
      (res: any) => {console.log(res)
        alert("News Success");
        this.myData = res.evID; 
        // Where you find the array res.data or res.data.data
        console.log('res is ', res.evID);
      });
  }

  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/post`;
    const httpOptions = {
      params: new HttpParams().set("foo", "moo").set("limit", "25")
    };
    this.http
      .post(url, { moo: "foo", goo: "loo" }, httpOptions)
      .subscribe(res => console.log(res));
  }


  doDELETE() {
    console.log("DELETE");
    let url = `${this.apiRoot}/delete`;
    const httpOptions = {
      params: new HttpParams().set("foo", "moo").set("limit", "25")
    };
    this.http.delete(url, httpOptions).subscribe(res => console.log(res));
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
    let url = `${this.apiRoot}=getEvent`;
    this.http
      .get(url)
      .toPromise()
      .then(res => console.log(res));
  }

  // doGETAsPromiseError() {
  //   console.log("GET AS PROMISE ERROR");
  //   let url = `${this.apiRoot}=getEvent`;
  //   this.http
  //     .get(url)
  //     .toPromise()
  //     .then(
  //       res => console.log(res),
  //       msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
  //     );
  // }




}

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);