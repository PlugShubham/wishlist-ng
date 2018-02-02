import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule} from '@angular/material';

@NgModule({
    imports:[
    BrowserModule,    
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule
    ],
    exports:[
        BrowserModule,    
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatToolbarModule,
        MatExpansionModule 
    ]
})

export class MaterialModule{}