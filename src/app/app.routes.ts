import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { IndividualPostComponent } from './individual-post/individual-post.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { TypeSearchComponent } from './app-shell/type-search/type-search.component';
export const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'post/:slug',
    component: IndividualPostComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'search/:name/:searchTerm',
    component: TypeSearchComponent
  },
  {
    path:'about',
    component: AboutAuthorComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
