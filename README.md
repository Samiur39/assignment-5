# 🚀 DevStack

DevStack is a responsive React web application that allows developers to explore different technologies and build their own personalized development stack. Users can browse technologies, add them to their stack, remove individual technologies, or clear the entire stack.

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Toastify
- React Icons
- JSON data

## ✨ Features

### 1. Explore Technologies

Browse different frontend, backend, database, and development technologies with their descriptions, ratings, difficulty levels, and badges.

### 2. Build Your Own Stack

Add technologies to your personal stack and see the selected technologies displayed in the **Your Stack** section.

### 3. Manage Your Stack

Remove individual technologies or remove all selected technologies at once. Toast notifications provide feedback when technologies are added or removed.

---

# 📚 React Questions & Answers

## i. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React components easier to read and allows us to describe how the UI should look.

## ii. What is the difference between props and state?

Props are data passed from a parent component to a child component. A child component receives props but should not directly change them.

State is data managed inside a component. When state changes, React updates the UI.

In this project, `Technologies` passes `selectedTech` and `setSelectedTech` to `TechnologiesCard` and `YourStack` using props.

## iii. What does the useState hook do, and where did you use it in this project?

`useState` allows a React component to store and update data, which we can use later in different components.

In this project, it is used in `Technologies` to store the selected technologies:

```tsx
const [selectedTech, setSelectedTech] = useState<ITechnology[]>([]);
```

It is also used in `Nav` to control whether the mobile menu is open:

```tsx
const [menuOpen, setMenuOpen] = useState(false);
```

## iv. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component, such as fetching data, working with APIs, or responding to changes in state.

In this project, `useEffect` was not used to load the JSON data. Instead, the project fetches `/data.json` through an asynchronous function and uses React's `use()` hook together with `Suspense` to handle the promise.

The data is then passed to the `Technologies` component as a promise.

## v. Why does every item in a .map() list need a unique key prop?

React uses the `key` to identify each item in a list. It helps React understand which items have changed, been added, or been removed.

Using a unique `id` helps React efficiently update the technology list.

## vi. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition.

In this project, `YourStack` checks whether any technologies have been selected:

```tsx
{selectedTech.length === 0 ? (
    <p>Your stack is empty.</p>
) : (
    selectedTech.map((tech) => (
        // display selected technologies
    ))
)}
```

If no technology is selected, it shows "Your stack is empty." Otherwise, it displays the selected technologies.

## vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props.

In this project, `Technologies` passes the selected technologies and their setter to `TechnologiesCard`:

```tsx
<TechnologiesCard
    technology={technology}
    selectedTech={selectedTech}
    setSelectedTech={setSelectedTech}
/>
```

The child can update the parent's state by calling the setter function received through props. For example:

```tsx
setSelectedTech((prev) => [
    ...prev,
    technology,
]);
```

So the data flow is:

**Parent (`Technologies`) → Child (`TechnologiesCard`)** through props, and the child can update the parent's state through `setSelectedTech()` passed as a prop.
