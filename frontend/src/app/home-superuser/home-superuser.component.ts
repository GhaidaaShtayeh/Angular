import { Observable } from 'rxjs';
import { InvoiceService } from './../invoice.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InvoiceClass } from '../Invoice';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-home-superuser',
  templateUrl: './home-superuser.component.html',
  styleUrls: ['./home-superuser.component.css']
})
export class HomeSuperuserComponent implements OnInit {
  posts:any;
  //if it doesn't work try it with 1
  p: number = 0;
  private _http: any;

  constructor(private service:PostService,private http:HttpClient) {}
  headers = new Headers().set('Content-Type','application/json');

  ngOnInit() {
    // to get the post for the first time we call the fuction from OnInit
     this.getPosts(this.p)
  }

  //now this function will get called when you will click the button and pass the page number to api
  getPosts(page:number){
    this.service.getPosts(page)
    .subscribe(response => {
      this.posts = response;
    });
  }

  deleteinvoice(id: number)  {
    const url = 'http://localhost:8085/invoice/deleteInvoice/14';
    console.log(id);
    console.log(url+id);
    this.http.get<any>(url).subscribe(res=> {console.log(res)});
  }
}
