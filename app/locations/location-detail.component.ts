import {OnInit, Component} from "angular2/core";
import {LocationService} from "./location.service";
import {Router, RouteParams} from "angular2/router";
import {ILocation} from "./location";
/**
 * Created by sanjoce on 5/26/2016.
 */

@Component({
    templateUrl: `app/locations/location-detail.component.html`
})

export class LocationDetailComponent implements OnInit {
    pageTitle: string = 'Location Detail';
    location: ILocation;
    errorMessage: string;

    constructor(private _locationService: LocationService,
                private _router: Router,
                private _routeParams: RouteParams) {

    }

    ngOnInit():any {
        if (!this.location) {
            let id = +this._routeParams.get('id');
            //this.pageTitle += `: ${id}`;
            this.getLocation(id);
        }
    }

    getLocation(id: number) {
        this._locationService.getLocation(id)
            .subscribe(
                location => this.location = location,
                error => this.errorMessage = <any>error);
    }
    
    onBack(): void {
        this._router.navigate(['Locations']);
    }

}