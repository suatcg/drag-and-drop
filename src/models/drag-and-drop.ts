// Drag and drop interfaces

// In general, namespace variables , interfaces, classess... which can be used inside of the namespaces, in this case that is DDInterfaces (App) namespace, yet ,  if we export the elements inside of the interface that we could use out of namespace just like below.

// namespace keyword only available in TypeScript and These namespace acts as a object when it's converted into JS file.

namespace App {
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
}
