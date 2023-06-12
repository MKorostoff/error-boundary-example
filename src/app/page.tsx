import { ErrorBoundary } from "react-error-boundary";
import BadComponent from "./components/BadComponent";
import GoodComponent from "./components/GoodComponent";
import BadChild from "./components/BadChild";

export default function Home() {
  return (
    <main>
      {/* This component will render */}
      <GoodComponent name="Good component 1"/>

      {/* This component is broken on purpose */}
      <ErrorBoundary fallback={<h2 className="bad">Something went wrong</h2>}>
        <BadComponent/>
      </ErrorBoundary>

      {/* Even though the previous component had an error, this component renders, because we caught the error in an error boundary */}
      <GoodComponent name="Good component 2"/>

      {/* This is a component that has a broken component inside of it. We can catch the error here, or inside of BadChild */}
      <ErrorBoundary fallback={<h2 className="bad">Something else went wrong</h2>}>
        <BadChild name="Bad child"/>
      </ErrorBoundary>

      {/* This component will render even though  */}
      <GoodComponent name="Good component 3"/>
    </main>
  )
}
