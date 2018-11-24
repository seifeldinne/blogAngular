import { Component } from '@angular/core';
import { Post } from '../app/post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 posts:Post[] =[];
 constructor(){
   
  const p1=new Post();
   p1.title="Mon Premier Post";
   p1.content="Mon Premier Post creer par personne 1 et post en LinkedIn .....";
   p1.loveIts=0;
   p1.created_at=new Date();
   this.posts.push(p1);
   
   const p2=new Post();
   p2.title="Mon Deuxieme Post";
   p2.content="Mon deuxieme Post creer par personne 1 et post en LinkedIn .....";
   p2.loveIts=0;
   p2.created_at=new Date();
   this.posts.push(p2);
   
   const p3=new Post();
   p3.title="Mon Troisieme Post";
   p3.content="Mon Troisieme Post creer par personne 1 et post en LinkedIn .....";
   p3.loveIts=0; 
   p3.created_at=new Date();
   this.posts.
    push(p3);

   const p4=new Post();
   p4.title="Mon Quatrieme Post";
   p4.content="Mon Quatrieme Post creer par personne 1 et post en LinkedIn ....."; 
   p4.loveIts=0;
   p4.created_at=new Date();
   this.posts.push(p4);
 }
 
 
}
