import { useLoaderData } from "@remix-run/react"

export function clientLoader() {
    return {message:"I'm hello world client loader"}
}


export default function Hello(){
    const loader = useLoaderData<typeof>
    return <h1>Hello World</h1>
}