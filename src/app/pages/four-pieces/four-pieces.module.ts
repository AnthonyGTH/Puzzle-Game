import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FourPiecesPage } from './four-pieces.page';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: FourPiecesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DragDropModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FourPiecesPage]
})

export class FourPiecesPageModule {}
