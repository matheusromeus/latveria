- how you can type your props

```typescript

1.
const User = (props: {name:string; age:number;}) {
    return(
        <>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
        </>
    )
}

2.
const User = ({name,age}: {name:string; age:number;}) {
    return(
        <>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </>
    )
}

3.
type UserProps = {name:string; age:number;}

const User = ({name,age}: UserProps) {
    return(
        <>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </>
    )
}

4.

interface UserProps {name:string; age:number;}

const User = ({name,age}: UserProps) {
    return(
        <>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </>
    )
}


```

- If there are children for the props,

```typescript

interface UserProps {children:ReactNode}

const User = ({children}: UserProps ) {
    return(
        <>
            {children}
        </>
    )
}

```

- Another way to annotate the component?

```typescript

type UserProps = {name:string; age:number;}

const User:FC<UserProps> = ({name,age}) {
    return(
        <>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </>
    )
}

```

- Typing for Dynamic Routes

```typescript

type UserProps = {params:{id:number}}

const User = ({params: {id}}: UserProps) {
    return(
        <>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </>
    )
}

```

## Reusable Types

- To share types between components.

```typescript

import UserProps from './UserProps';

type AdminProps = UserProps & {params:{id:number}}

const Admin = ({params: {id}, email: string}: AdminProps) {
    return(
        <>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </>
    )
}

```

## With Hooks

- useState

```typescript

import {useState} from 'react';

const Admin = (){
    const [count, setCount] = useState<number>(0);
    return(
        <>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </>
    )
}

```

- events

```typescript
event: FormEvent<HTMLFormElement>
```

## Type Predicates

- Used to further narrow down types, to make it easy for the compiler. So, if you have a button, That button would have a prop. Now, it can be a primary button or a secondary button. So ButtonProps would be a union of primarybuttonprops and secondarybuttonprops. Now there is still confusion whether it is gonna be a primary button or a secondary button, so we write a function namely isPrimary or isSecondary which returns a true or false value depending on whether it's a primary or secondary button. 

```typescript

function isPrimaryButtonProps(props: ButtonProps): props is PrimaryButtonProps {}

```

props is PrimaryButtonProps: This is a type predicate. It means that if the function returns true, TypeScript will know that props is of type PrimaryButtonProps.

This makes it easier for the end user using the BUTTON component. They just have to specify 'primary' or 'secondary'. The rest is handled by the code.
