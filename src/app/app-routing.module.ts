import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ConfigsListComponent} from "./configs-list/configs-list.component";
import {CreateConfigComponent} from "./create-config/create-config.component";
import {ConfigDetailsComponent} from "./config-details/config-details.component";

const routes: Routes = [
  {path: "configs", component: ConfigsListComponent},
  {path: "create-config", component: CreateConfigComponent},
  {path: "config-details/:id", component: ConfigDetailsComponent},
  {path: "", redirectTo: "configs", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
