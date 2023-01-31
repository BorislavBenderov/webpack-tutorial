import './styles.css'
import Photo from './download.jpg'
import { Counter } from './Counter'
export const App = () => {
  return (
    <>
      <h1>
        React TypeScript Webpack Starter Template - {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={Photo} alt="" />
      <Counter />
    </>
  )
}
