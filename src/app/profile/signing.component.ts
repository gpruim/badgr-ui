import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { SessionService } from "../common/services/session.service";
import { BaseAuthenticatedRoutableComponent } from "../common/pages/base-authenticated-routable.component";


@Component({
	selector: 'signing',
	template: `
	<main>
		Hello
	</main>
	`
})
export class SigningComponent extends BaseAuthenticatedRoutableComponent implements OnInit {

	constructor(
		router: Router,
		route: ActivatedRoute,
		sessionService: SessionService,
		protected title: Title
	) {
		super(router, route, sessionService);
		title.setTitle("Signing - Badgr");
	}
}