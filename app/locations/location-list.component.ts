import {OnInit, Component} from "angular2/core";
import {LocationService} from "./location.service";
import {ILocation} from "./location";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {LocationFacetComponent} from "./location-facet.component";
/**
 * Created by sanjoce on 4/28/2016.
 */
 
@Component ({
    templateUrl: `app/locations/location-list.component.html`,
    directives: [LocationFacetComponent, ROUTER_DIRECTIVES]
})   
export class LocationListComponent implements OnInit {
    constructor(private _locationService: LocationService) {

    }

    pageTitle: string = "Locations List";
    locations: ILocation[];
    errorMessage: string;

    ngOnInit():any {
        this._locationService.getLocations()
            .subscribe(
                locations => this.locations = locations,
                error => this.errorMessage = <any>error);
    }

}
