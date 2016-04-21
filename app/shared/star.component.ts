import {Component, OnChanges, Input, EventEmitter, Output} from "angular2/core";
import {StarEvent} from "./star-event.component";

@Component({
    selector: "ai-star",
    templateUrl: "app/shared/star.component.html",
    styleUrls: ["app/shared/star.component.css"]
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    @Output() ratingClicked: EventEmitter<StarEvent> = new EventEmitter<StarEvent>();

    ngOnChanges(changes:{}):void {
        this.starWidth = this.rating * 86 / 5;
    }

    OnClick(): void {
        var starEvent = new StarEvent();
        starEvent.message = `The rating ${this.rating} was clicked!`;
        starEvent.handle = "rating";
        this.ratingClicked.emit(starEvent);
    }
}