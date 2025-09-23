import Header from "./Header"
import Main from "./Main"

export default function App() {
  const apiKey = import.meta.env.VITE_HF_ACCESS_TOKEN;
  console.log(apiKey)
  return (
    <>
      <Header />
      <Main />
    </>
  )
}
