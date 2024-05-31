import { Routes,RouterModule } from '@angular/router';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
export const routes: Routes = [
    {path:'',component: ViewUserComponent},
    {path: 'add',component:AddUserComponent},
    {path :'update/:id',component:UpdateUserComponent}

];
