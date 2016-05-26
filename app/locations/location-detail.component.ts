import {OnInit, Component} from "angular2/core";
import {LocationService} from "./location.service";
/**
 * Created by sanjoce on 5/26/2016.
 */

@Component({
    templateUrl: 'app/locations/location-detail.component.html'
})

export class LocationDetailComponent implements OnInit {
    constructor(private _locationService: LocationService) {

    }

    ngOnInit():any {
        return undefined;
    }

}