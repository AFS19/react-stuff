1. Where does React put all of the elements I create in JSX when I call ``root.render()``?
    
   - All the elements I render get put inside the div with the id of ``root`` (or whatever other element i might select when calling createRoot)

2. What would show up in my console if I were to run this line of code: ``console.log(<h1>Hello world!</h1>)``

    - An object! Unlike creating an HTML element in vanilla DOM JS, what gets created from the JSX we have in our React code is a plain JS object that React will use to fill in the view.

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
- You can only render 1 parent element at a time. That parent element can have as many children elements as you want.

4. What does it mean for something to be "declarative" instead of "imperative"?

   -   ***Imperative*** means we need to give specific step-by-step instructions on how to accomplish a task.
   - ***Declarative*** means we can write our code to simply "describe" ***what*** should show up on the page and allow the roll (React, e.g.) to handle the details on ***how*** to put those things on the page.

5. What does it mean for something to be "composable"?

    - Composable means that we can take small pieces of code and put them together to make bigger pieces of code. In React, we can take small components and put them together to make bigger components.

   
**--------------------Components------------------------**
1. What is a React Component?
   
   - A React component is a small piece of code that describes a part of the user interface. It can be as simple as a single HTML element or as complex as a whole page.

2. What's wrong with this code:
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
- React components must start with a capital letter. This is how React knows that you're trying to create a component and not just a regular function.

3. What's wrong with this code:
```
function MarkdownHeader() {
    return (
        <header>
            <img src="./react-logo.png" width="40" alt="My logo" />
        </header>
    )
}

root.render(MarkdownHeader())
```
- When you call a component, you need to use the JSX syntax. So instead of calling ``MarkdownHeader()``, you should call ``<MarkdownHeader />``.

**--------------------Props------------------------**
1. What do props helps us accomplish?

    - Props help us pass data from one component to another. This is how we can make our components dynamic and reusable.
   

2. How do you pass a prop into a component?

    - You can pass a prop into a component by adding an attribute to the component when you call it. For example, if you have a component called ``MyComponent`` and you want to pass in a prop called ``name``, you would call it like this: ``<MyComponent name="Bob" />``.
 
3. Can I pass a custom prop (e.g. `blahblahblah={true}`)  to a native DOM element? (e.g. `<div blahblahblah={true} />`) why or why not?

    - No, you can't pass custom props to native DOM elements. React only allows you to pass custom props to your own components. If you want to pass a custom prop to a native DOM element, you'll need to wrap that element in a component.

4. Ho do I receive props in a component?
``` function Navbar() {
   return (
       <header>
           ....
       </header>
   )   
}
```

- You can receive props in a component by adding a parameter to the component function. This parameter will be an object that contains all the props that were passed into the component. For example, if you have a component called ``Navbar`` and you want to receive a prop called ``title``, you would write the component like this:
``` 
function Navbar(props) {
   return (
       <header>
           <h1>{props.title}</h1>
       </header>
 ```

5. What data type  is ``props`` when the component receives it?

    - Props is an object. This object contains all the props that were passed into the component.