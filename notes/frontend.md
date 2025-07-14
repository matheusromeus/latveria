
build process

bundlers - you can use old and new code

webpack, parcel

dev: "parcel <entrypoint of app/>"

prettier - .prettierrc

.editorconfig - it'll be easier for different files
```
root = true

[*]
end_of_line = lf
insert_final_newline = true
charset = utf-8
indent_size = 2
indent_style = space
```

npm install -D eslint eslint-plugin-import eslint-config-prettier
create a .eslintrc.json

```json
{
	"extends": [
		"eslint:recommended",
		"plugin:import/errors",
		"prettier"
	],
	"rules": {
		"no-console": 1,
	},
	"plugins": ["import"],
	"parserOptions": [
		"ecmaVersion":2018,
		"sourceType":"module"
	],
	"env":{
		"es6": true,
		"browser": true,
		"node": true
	}
}
```

every byte counts to a web dev - so no dead code, or unused stuff


your entrypoint is init.js - that's where your layout.tsx lives. all the "not real code". then you can add the other modules to this.