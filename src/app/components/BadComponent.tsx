export default async function BadComponent() {
  const data = await getData();
  return (
    <h2>Bad component</h2>
  )
}

async function getData() {
  const res = await fetch('https://api.example.com/bad/endpoint')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
