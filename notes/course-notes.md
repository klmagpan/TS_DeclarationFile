# Type Declaration Files
## Declaration File Basics
### Introduction
- Declaration file declares all of the types that would be used in code
- Are typescript files with a d.ts extension
- Used by the editor to provide code-completion
- Used by the compiler to enforce usage

### Creating declaration Files with Compiler
- Created from tsconfig.json which specifies
	- “Declaration”: true 
- Enter tsc which will create a .js file from .ts
- Declaration file declares any class/instance exported 
- Third-party libraries/types are usually instaleld in the node_modules folder and consumed from there

### Creating Declaration Files w/ JavaScript Projects
- tsconfig.json —> 
	- “Declaration”= true
	- “Allowjs” = true
	- emitDeclarationOnly: true
	- DeclarationDir: “./lib”
- Can also set declarations for private classes

### JSDoc
- When the class is being used, this information is seen as the class description within the .ts file

## Creating Declaration Files Manually
### Different JavaScript Libraries/Modules
- Global objects (ie. Jquery)
built-in objects (ie. Prototype)
- AMD
- CommonJs
	- Instead of using export keyword, would assign an object containing the library to module.exports, which would be run to node.js
	- Use a .cjs extension to tell that it is using commonjs 
	- npm install —save-dev @types/node
	- Declare module ‘file.cjs’
		- Don’t need to export the module because it is explicitly exported
	- Functions needed to be exported
	- Can use quick fixes to import
- UMD 
- ESM

### Creating Declaration Files for a Global Library
- “allowJs” = true;
- Create global.ts file
	- Create JSDoc Description for class
- Global libraries are declared with declare namespace
- With .ts files in other folders
	- Create new folder @types
	- Create another folder string_lib
	- And copy and paste .ts global namespace file
- Or create a reference to the directory
	- <reference path”file/path”>

### Declaration File for Object-Extending Library
- Need to redeclare interface in a d.ts file
	- (Without param)

### Introduction
- Declaration file declares all of the types that would be used in code
- Are typescript files with a d.ts extension
- Used by the editor to provide code-completion
- Used by the compiler to enforce usage

## Publishing Declaration Files
- First compile: tsc
- npm publish –access public
- Can be installed to be used to another project using npm install @...
	- It should be available for use after instantiating it
