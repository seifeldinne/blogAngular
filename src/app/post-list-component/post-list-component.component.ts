import { Component, OnInit , Input } from '@angular/core';
import { Post } from '../post';
@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
  @Input() 
   post : Post;
  
  constructor() {
 
  }

  ngOnInit() {
  }
  
  isLoveIt(nb :number){
    return nb >0 ;
  }
  isNotLoveIt(nb :number){
    return nb <0 ;
  }
  loveIt(){
    this.post.loveIts++;
    
  }
  dontloveIt(){
   this.post.loveIts--;
  }
}
