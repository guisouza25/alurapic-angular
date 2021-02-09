import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoDetailComponent } from './photos/photo-detail/photo-detail.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{ 
		path: 'home',
		loadChildren: './home/home.module#HomeModule'
	},
	{ 
		path: 'user/:userName',
		component: PhotoListComponent,
		resolve: {
			photos: PhotoListResolver
		},
		data: {
			title: 'Timeline'
		}
	},
	{ 
		path: 'p/add', 
		component: PhotoFormComponent,
		canActivate: [AuthGuard],
		data: {
			title: 'Photo upload'
		} 
	},
	{ 
		path: 'p/:photoId', 
		component: PhotoDetailComponent,
		data: {
			title: 'Photo detail'
		}
	},
	{	
		path: 'not-found', 
		component: NotFoundComponent,
		data: {
			title: 'Not found'
		}
	},
	{	
		path: 'error', 
		component: GlobalErrorComponent,
		data: {
			title: 'Error'
		}
	},
	{	
		path: '**', 
		redirectTo: 'not-found'
 	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {useHash: true})
	],
	exports: [
		RouterModule //RouterModule vai ficar visivel a quem importar AppRoutingModule
	]
})
export class AppRoutingModule {

}