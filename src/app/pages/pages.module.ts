import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  BreakPointRegistry, DefaultFlexAlignDirective, FlexAlignStyleBuilder, FlexFillDirective, FlexFillStyleBuilder, FlexLayoutModule, FlexStyleBuilder, LayoutAlignStyleBuilder,
  LayoutStyleBuilder, MediaMarshaller, PrintHook, StylesheetMap, StyleUtils, ɵMatchMedia
} from '@angular/flex-layout';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages.routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailComponent } from './detail/detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';

@NgModule( {
  declarations: [
    HomeComponent,
    DetailComponent,
    PageNotFoundComponent,
    ResultComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    NgxSpinnerModule,
    PagesRoutingModule,
    FlexLayoutModule,
    NgbModule,
    FormsModule
  ],
  exports: [],
  providers: [
    DefaultFlexAlignDirective,
    FlexAlignStyleBuilder,
    FlexFillDirective,
    FlexFillStyleBuilder,
    NgxSpinnerService,
    PrintHook,
    StyleUtils,
    StyleSheet,
    StylesheetMap,
    LayoutAlignStyleBuilder,
    LayoutStyleBuilder,
    FlexStyleBuilder,
    MediaMarshaller,
    ɵMatchMedia,
    BreakPointRegistry
  ],
  schemas: []
} )
export class PagesModule { }
