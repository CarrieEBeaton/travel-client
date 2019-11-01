import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducers } from './app-state/app.reducers';
import { ConnectFormDirective } from './user/form-directive/connect-form.directive';
import { UserEffects } from './user/store/effects/user.effects';
import { UserFormContainerComponent } from './user/user-form-container/user-form-container.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddEditComponent } from './user/user-add-edit/user-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormContainerComponent,
    UserAddEditComponent,
    ConnectFormDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects]),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
