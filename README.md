# react-lambda

Anonymous functional components for React. How about using hooks inside hooks?

## Example

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

Returns an optionally-keyed React elements that executes `f`.
