// Drag and drop interfaces

export interface Draggable {
	dragStartHandler(event: DragEvent): void;
	dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
	// To apply the dropEvent
	dragOverHandler(event: DragEvent): void;
	// Finish the drop event
	dropHandler(event: DragEvent): void;
	// To inform the user, whether the drop event has been successfully droped or not.
	dragLeaveHandler(event: DragEvent): void;
}
