import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { Cloudinary } from 'cloudinary-core';
import {  CloudinaryModule } from '@cloudinary/angular-5.x';

const cloudConfig = {
  cloud_name: 'sdcssd', upload_preset: 'fsfasd'
};

const cloudinaryLib = {
  Cloudinary: Cloudinary
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileUploadModule,
    HttpClientModule,
    CloudinaryModule.forRoot(cloudinaryLib, cloudConfig)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

