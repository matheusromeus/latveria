follows MVC architecture

controllers - handle incoming requests
modules - 
services

module brings everything together

controllers call the services and the services do the dirty work (logic).


**a decorator gives extra capabilities to your exisiting functions.**
function + decorator = decorated function
**a decorator is also a function**


root module = where your main.ts is (just like app root level component)
the modules are divided using names. each "name" has its own controller, service and module file. maybe it is to implement file based routing.

put the static routes before the dynamic ones?

dependency injection


providers - classes with the @Injectable decorator