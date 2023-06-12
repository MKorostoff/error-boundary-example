import BadComponent from "./BadComponent"

export default function BadChild(props: { name: string }) {
  return (
    <div>
      <BadComponent/>
      <div>{props.name}</div>
    </div>
  )
}
