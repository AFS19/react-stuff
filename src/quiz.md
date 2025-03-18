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
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40" alt="My logo" />
        </header>
    )
}

root.render(Header())
```
- When you call a component, you need to use the JSX syntax. So instead of calling ``Header()``, you should call ``<Header />``.