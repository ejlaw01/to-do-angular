import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { PiesListComponent } from './pies-list.component';
import { TaskListComponent } from './task-list.component';
import { AppComponent }   from './app.component';
import { EditTaskComponent } from './edit-task.component';
import { NewTaskComponent } from './new-task.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    NewTaskComponent,
    EditTaskComponent,
    TaskListComponent,
    PiesListComponent,
    AppComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
