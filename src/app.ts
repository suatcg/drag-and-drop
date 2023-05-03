// Special syntax for TS to import file to another file and this's not supported in JS files.
/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

namespace App {
	new ProjectInput();
	new ProjectList('active');
	new ProjectList('finished');
}
