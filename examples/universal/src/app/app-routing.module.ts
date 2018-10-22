import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';
import { PlainGalleryComponent } from './plain-gallery/plain-gallery.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselIe11Component } from './carousel-ie11/carousel-ie11.component';

const routes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'carousel-ie11', component: CarouselIe11Component },
  { path: 'modal', component: ModalGalleryComponent },
  { path: 'plain', component: PlainGalleryComponent },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
  { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
