is a compiled language. (go build 'file', go run 'file')

if you're trying to run an interpreted language in another computer, it will have to have that language installed, if it's a compiled language, you don't have to have it. like how video games are.

typescript is a transpiled + interpreted language.

statically typed -> define types
strongly typed -> the types define the methods

there's a go runtime, along with the compiled code - this makes it slower than the other natively compiled languages, that is what manages the garbage collection and automated memory mgmt.

---

modules and packages

package - collection of .go files
collection of packages - module

so a project is kinda like a module.

module file - .mod - like package.json

Every Go file has a `package` statement at the top, defining which package it belongs to (e.g., `package main` or `package math`). Packages with a `main` package, when executed, these produce an executable file. These packages must include a `main()` function, which is the entry point of the program. Packages without a `main` package are treated as libraries. They contain reusable code that can be imported by other packages but cannot be executed directly.

---

variables 
- var, const
- or use `:=` 
![[Pasted image 20241026175154.png]]

`const` values must be computed or known in `compile time` unlike in typescript where you can compute it during `run time`.

printf - prints to stdout
SPrintf - returns the formatted string

formatting
- %v - value
- %T - type
- %f - float
- %s - string



---

go mod init <module_name>
go run <main_file.go>

go get - like npm i

go.mod - package.json
go mod tiny

json.stringify() - json.Marshal() - any go ds to a string
json.Unmarshal() -string to data structure

godotenv - dotenv


FIber - Express 


Overflow errors won't be shown in runtime. For eg: if i **compute** a value that is greater than what an int16 or int32 can store during runtime, it'll just wrap around. but in compile time, it'll figure it out.


int8: -127, 128
uint8: 0, 255

even int8 and in16 are considered as different types. 