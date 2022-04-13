import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { AlertsService } from 'src/app/service/alerts.service';
import { PostService } from 'src/app/service/post.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {
  post: Post = new Post();

  idPost: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private alertService: AlertsService
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      this.alertService.showAlertWarning('Sua sessão expirou, por favor faça login novamente!');
      this.router.navigate(['/login']);
    }

    window.scroll(0, 0);

    this.postService.refreshToken();

    this.idPost = this.route.snapshot.params['id'];
    this.findByIdPost(this.idPost);
  }

  findByIdPost(id: number) {
    this.postService.getByIdPost(this.idPost).subscribe((resp: Post) => {
      this.post = resp;
      console.log(this.post.theme);
    });
  }

  delete() {
    this.postService.deletePost(this.idPost).subscribe(() => {
      this.alertService.showAlertSuccess('Postagem deletada com sucesso!');
      this.router.navigate(['/home']);
    });
  }

}
