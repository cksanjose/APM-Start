import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {ILocation} from "./location";
import {Injectable} from "angular2/core";
/**
 * Created by sanjoce on 4/28/2016.
 */

@Injectable()
export class LocationService {
    private _locationUrl = 'api/locations/locations.json';

    constructor(private _http: Http) {

    }

    getLocations(): Observable<ILocation[]> {
        return this._http.get(this._locationUrl)
            .map((response: Response) => <ILocation[]> response.json())
            .do(data => console.log("All: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getLocation(id: number): Observable<ILocation> {
        return this.getLocations()
            .map((locations: ILocation[]) => locations.find(l => l.locationId === id));
    }
}