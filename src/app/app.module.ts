import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatDialogModule,
  MatRadioModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatTabsModule,
  MatNativeDateModule,
  MatIconModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatTableModule,
  MatListModule,
  MatOptionModule,
  MatSliderModule,
  MatCardModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { NgxPubSubModule } from '@pscoped/ngx-pub-sub';
import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MomentModule } from 'ngx-moment';

/* Components*/
import { CardComponent } from '../components/card/card.component';

/* Services */
import { MapperService } from '../services/mapperService/mapper.service';
import { UserService } from '../services/usersService/user.service';
import { NetworkService } from '../services/network/network.service';

/* Pages*/
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ShortUrlPageComponent } from '../pages/short-url-page/short-url-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomePageComponent,
    ShortUrlPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatTabsModule,
    MatNativeDateModule,
    MatIconModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatTableModule,
    MatListModule,
    MatOptionModule,
    MatSliderModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPubSubModule,
    AppRoutingModule,
    DragDropModule,
    MomentModule
  ],
  providers: [
    MapperService,
    NetworkService,
    UserService
  ],
  exports: [HttpClientModule, NgxPubSubModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
