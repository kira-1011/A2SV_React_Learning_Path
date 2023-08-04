# React Hooks demo

## Learning path - useState, useEffect and useRef

This is a readme explaining my learning process on the 3 React hooks stated above.

## useState Hook
- I first tried to tackle the ```useState``` hook. It is used to manage states of functional components.
- I read the React documentation on ```useState``` to grasp the basic idea including its syntax and common use cases.
- then, I went over the React Typescript cheatsheet to understand the type arguments that ```useState``` accepts.
- If we're using React with Typescript it's good to pass type argument to the ```useState``` hook.

## useContext Hook
- I came accross this hook while I was building a todo list app and encountered the ["prop drilling"](https://www.geeksforgeeks.org/what-is-prop-drilling-and-how-to-avoid-it/) problem.

- To avoid this problem, the ```useContext``` hook allow us to use props deep down the component tree declaring it only once at the root component. Every component in the tree can then use any information stored using the hook without the need to pass down the props down the tree.

## useEffect Hook
- This one took much of my time to understand it. It's simply used to run "side effects", which are actions performed with the outside world such as fetching data, and changing document properties directly.

- I went over a couple of articles explaining the concept behing ```useEffect``` however, I still have doubts about it but I would say I grasped the basic idea.

## useRef Hook
- This was the last hook I tried to cover. In simple terms, it is a hook used to grab a DOM element.
- Interesting thing about this hook is it doesn't re-render the component using it when it's manipulated.
- The're also used to hold information that is not used for rendering such as DOM elements and timeout ID's.