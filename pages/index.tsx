import Head from 'next/head'
import useSWR from "swr"

export default function Home() {
  const { data, error, revalidate, isValidating } = useSWR("/api/hello", (url) =>
    fetch(url).then(r => r.json())
  )
  console.log(error)
  return (
    <div>
      <div>{JSON.stringify(data, null, 2) || "(loading..)"}</div>
      <div>{isValidating ? "validating" : "not-validating"}</div>
      <button onClick={() => revalidate()}>revalidatae</button>
    </div>
  )
}
