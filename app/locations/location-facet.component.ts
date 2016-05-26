import {Component, OnInit} from "angular2/core";
import {LocationService} from "./location.service";
/**
 * Created by sanjoce on 5/26/2016.
 */

@Component({
    templateUrl: 'app/locations/location-facet.component.html'
})

export class LocationFacetComponent implements OnInit {
    constructor(private _locationService: LocationService) {

    }

    ngOnInit():any {
        return undefined;
    }

}