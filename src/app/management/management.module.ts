import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BadgrCommonModule, COMMON_IMPORTS } from "../common/badgr-common.module";
import { ManagementUsersComponent } from "./management-users.component"
import { ManagementFacultiesEditComponent } from "./management-faculties-edit.component"
import { ManagementFacultiesCreateComponent } from "./management-faculties-create.component"
import { ManagementFacultiesListComponent } from "./management-faculties-list.component"
import { ManagementLTIClientCreateComponent } from "./management-lti-create.component"
import { ManagementLTIClientListComponent } from "./management-lti-list.component"
import { InstitutionApiService } from "./services/institution-api.service"
import { LTIClientApiService } from "./services/lti-client-api.service"
import { UserProfileApiService } from "../common/services/user-profile-api.service";
import { ViewManagementAuthGuard, HasInstitutionScope } from "../auth/auth.gard";

const routes = [
	/* institution */
	{
		path: '',
		redirectTo: 'users',
		pathMatch: 'full',
	},
	{
		path: "users",
		component: ManagementUsersComponent,
		canActivate: [ViewManagementAuthGuard]
	},
	{
		path: "lti",
		component: ManagementLTIClientListComponent,
		canActivate: [ViewManagementAuthGuard]
	},
	{
		path: "lti/create",
		component: ManagementLTIClientCreateComponent,
		canActivate: [ViewManagementAuthGuard]
	},
	{
		path: "faculties/edit/:facultySlug",
		component: ManagementFacultiesEditComponent,
		canActivate: [ViewManagementAuthGuard, 
									HasInstitutionScope]
	},
	{
		path: "faculties/create",
		component: ManagementFacultiesCreateComponent,
		canActivate: [ViewManagementAuthGuard, 
									HasInstitutionScope]
	},
	{
		path: "faculties",
		component: ManagementFacultiesListComponent,
		canActivate: [ViewManagementAuthGuard, 
									HasInstitutionScope]
	},
	{
		path: "**",
		component: ManagementUsersComponent,
		canActivate: [ViewManagementAuthGuard]
	},
];
@NgModule({
	imports: [
		...COMMON_IMPORTS,
		BadgrCommonModule,
	  RouterModule.forChild(routes),
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [
		ManagementUsersComponent,
		ManagementLTIClientListComponent,
		ManagementFacultiesEditComponent,
		ManagementFacultiesCreateComponent,
		ManagementFacultiesListComponent,
		ManagementLTIClientCreateComponent,
	],
	exports: [],
	providers: [
		UserProfileApiService,
		InstitutionApiService,
		LTIClientApiService,	
		ViewManagementAuthGuard,
		HasInstitutionScope,
	]
})
export class ManagementModule {}