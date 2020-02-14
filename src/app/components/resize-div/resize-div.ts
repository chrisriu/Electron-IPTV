import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
    selector: '[appResizable]' // Attribute selector
})
export class ResizeDiv implements OnInit {

    @Input() resizableGrabWidth = 3;
    @Input() resizableMinWidth = 10;
    @Input() resizableMaxWidth = 280;

    dragging = false;

    constructor(private element: ElementRef) {

        const self = this;

        const EventListenerMode = { capture: true };

        function preventGlobalMouseEvents() {
            document.body.style['pointer-events'] = 'none';
        }

        function restoreGlobalMouseEvents() {
            document.body.style['pointer-events'] = 'auto';
        }


        const newWidth = (width) => {
            if (width < 181) {
                element.nativeElement.style.width = "82px";
            }
            else {
                element.nativeElement.style.width = "280px";
            }
        }


        const mouseMoveG = (event) => {
            if (!this.dragging) {
                return;
            }
            if ((event.clientX - element.nativeElement.offsetLeft) < 82) {
                newWidth(82);
                event.stopPropagation();
                return;
            } else if ((event.clientX - element.nativeElement.offsetLeft) > 280) {
                newWidth(280);
                event.stopPropagation();
                return;
            } else {
                newWidth(event.clientX - element.nativeElement.offsetLeft)
                event.stopPropagation();
            }

        };

        const dragMoveG = (event) => {
            if (!this.dragging) {
                return;
            }
            const newWidth = Math.max(this.resizableMinWidth, (event.clientX - element.nativeElement.offsetLeft)) + "px";
            element.nativeElement.style.width = (event.clientX - element.nativeElement.offsetLeft) + "px";
            event.stopPropagation();
        };

        const mouseUpG = (event) => {
            if (!this.dragging) {
                return;
            }
            restoreGlobalMouseEvents();
            this.dragging = false;
            event.stopPropagation();
            
        };

        const mouseDown = (event) => {
            if (this.inDragRegion(event)) {
                this.dragging = true;
                preventGlobalMouseEvents();
                event.stopPropagation();
            }
        };


        const mouseMove = (event) => {
            if (this.inDragRegion(event) || this.dragging) {
                element.nativeElement.style.cursor = "col-resize";
            } else {
                element.nativeElement.style.cursor = "default";
            }
        }


        document.addEventListener('mousemove', mouseMoveG, true);
        document.addEventListener('mouseup', mouseUpG, true);
        element.nativeElement.addEventListener('mousedown', mouseDown, true);
        element.nativeElement.addEventListener('mousemove', mouseMove, true);
    }

    ngOnInit(): void {
        this.element.nativeElement.style["border-right"] = this.resizableGrabWidth + "px solid darkgrey";
    }

    inDragRegion(evt) {
        return this.element.nativeElement.clientWidth - evt.clientX + this.element.nativeElement.offsetLeft < this.resizableGrabWidth;
    }
}
