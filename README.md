# react-lambda

Anonymous functional components for React. How about using hooks inside hooks?

## Motivation

I wished there’s a way to use hooks inside a component’s *subtree*.
That means all the state and effects should be localized in that subtree only.
Using it in my current project, it helped me write more cohesive code:

```js
import λ from 'react-lambda'
function AppNav() {
  return <Nav>
    <Nav.Item to="/">Home</Nav.Item>
    <Nav.Item to="/about">About</Nav.Item>
    <Nav.Item to="/contact">Contact</Nav.Item>
    {λ(() => {
      // I want to display a clock here but don’t want the whole AppNav re-rendered.
      const time = useCurrentTime()
      return <Nav.Item>{formatTime(time)}</Nav.Item>
    })}
  </Nav>
}
```

## Another example

<!-- prettier-ignore-start -->

```js
import λ from 'react-lambda'

function App() {
  const [n, setN] = useState(3)
  const more = () => setN(n => n + 1)
  const less = () => setN(n => n - 1)
  return (
    <div className="App">
      <h1>react-lambda demo</h1>
      <p>
        <button onClick={less} disabled={!n}>less</button>
        <button onClick={more}>more</button>
      </p>
      <ol>
        {Array(n)
          .fill()
          .map((_, i) =>
            λ(i, () => {
              // Hooks inside component body, how cool is that!
              const [v, setV] = useState(0)
              const inc = () => setV(v => v + 1)
              return <li>{v} <button onClick={inc}>++</button></li>
            })
          )}
      </ol>
    </div>
  )
}
```

<!-- prettier-ignore-end -->

## API

```js
import λ from 'react-lambda'
```

### λ([key,] f)

Returns an optionally-keyed React element that executes `f`.
