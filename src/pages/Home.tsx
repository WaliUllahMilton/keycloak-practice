import useAuth from "../hooks/useAuth"

function Home() {
  const isLoging = useAuth()
  return (
    <div>
        {
            isLoging ? "private" : "public"

        }
    </div>
  )
}

export default Home