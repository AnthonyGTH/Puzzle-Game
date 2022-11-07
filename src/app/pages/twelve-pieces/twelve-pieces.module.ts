import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TwelvePiecesPage } from './twelve-pieces.page';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: TwelvePiecesPage
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
  declarations: [TwelvePiecesPage]
})
export class TwelvePiecesPageModule {}
