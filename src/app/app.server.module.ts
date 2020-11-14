import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ContentService } from './content.service';
import { ContentServerService } from './content-server.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: ContentService, useClass: ContentServerService}
  ]
})
export class AppServerModule {}
