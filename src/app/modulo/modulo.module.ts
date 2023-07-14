import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormComponent } from './components/form/form.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http' 


@NgModule({
  declarations: [
    HomePageComponent,
    TabelaComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class ModuloModule { }
