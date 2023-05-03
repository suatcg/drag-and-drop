namespace App {
	// Component Base Class
	export abstract class Component<
		T extends HTMLElement,
		U extends HTMLElement
	> {
		templateElement: HTMLTemplateElement;
		hostElement: T;
		element: U;

		constructor(
			templateId: string,
			hostElementId: string,
			insertAtStart: boolean,
			newElementId?: string
		) {
			this.templateElement = document.getElementById(
				templateId
			)! as HTMLTemplateElement;

			this.hostElement = document.getElementById(hostElementId)! as T;

			const importedNode = document.importNode(
				this.templateElement.content,
				true
			);

			this.element = importedNode.firstElementChild as U;
			if (newElementId) {
				this.element.id = newElementId;
			}

			this.attach(insertAtStart);
		}

		private attach(insertAtBeginning: boolean) {
			this.hostElement.insertAdjacentElement(
				insertAtBeginning ? 'afterbegin' : 'beforeend',
				this.element
			);
		}

		// Force to use the methods when inherited from other class below via abstract methods
		// Beside you can't have private abstract methods , Typescripte does not allow to use private keywords in abstract methods
		abstract configure(): void;
		abstract renderContent(): void;
	}
}
