# Technical Interview Q&A: React, JavaScript, Python

> A concise FAQ-style reference for common interview questions.

---

## Table of Contents

1. [React](#react)
2. [JavaScript](#javascript)
3. [Python](#python)

---

## React

### Q1: What is React?
**A:** React is a JavaScript library for building user interfaces, primarily single-page applications. It uses a virtual DOM and component-based architecture.

### Q2: What are React hooks?
**A:** Hooks are functions that let you “hook into” React state and lifecycle features in functional components. Examples: `useState`, `useEffect`, `useContext`.

### Q3: Difference between state and props?
**A:**  
- **State:** Internal, mutable data of a component.  
- **Props:** Data passed from parent to child, read-only.

### Q4: What is the virtual DOM?
**A:** A lightweight copy of the real DOM used by React to efficiently update the UI by diffing changes before rendering.

<!-- Add more React questions here -->

---

## JavaScript

### Q1: What is the difference between `var`, `let`, and `const`?
**A:**  
- `var`: function-scoped, can be redeclared.  
- `let`: block-scoped, cannot be redeclared in the same scope.  
- `const`: block-scoped, cannot be reassigned (for objects, reference cannot change).

### Q2: Explain closures in JavaScript.
**A:** A closure is a function that retains access to variables from its outer scope even after the outer function has executed.

### Q3: Difference between `==` and `===`?
**A:**  
- `==`: equality with type coercion.  
- `===`: strict equality, no type coercion.

### Q4: What is event delegation?
**A:** Attaching a single event listener to a parent element to handle events on its child elements, useful for dynamic content.

<!-- Add more JavaScript questions here -->

---

## Python

### Q1: What are Python’s mutable and immutable data types?
**A:**  
- **Immutable:** int, float, string, tuple, frozenset  
- **Mutable:** list, dict, set, bytearray

### Q2: Difference between `deepcopy` and `shallow copy`?
**A:**  
- **Shallow copy:** Copies the outer object but references inner objects.  
- **Deep copy:** Copies the outer object and recursively copies all nested objects.

### Q3: What are Python decorators?
**A:** Functions that modify the behavior of another function or class without changing its source code, typically using the `@decorator` syntax.

### Q4: Difference between `__init__` and `__new__`?
**A:**  
- `__new__`: Creates a new instance (rarely overridden).  
- `__init__`: Initializes the instance after creation.

<!-- Add more Python questions here -->

---

## Tips

- Use this template to **expand your own Q&A**.  
- Keep answers concise and to the point for easy review.  
- You can use **collapsible sections** in GitHub README for long answers:

<details>
<summary>Click to expand detailed answer</summary>

Longer explanation goes here.

</details>
