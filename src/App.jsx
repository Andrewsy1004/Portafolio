
import { Navbar } from './components'
import { MeteorShower } from './components/MeteorShower'
import { Page } from './Page'

export const App = () => {
  return (
    <div className="overflow-y-scroll relative font-sans  min-h-screen">

      <MeteorShower />

      <div className="relative z-10">
        <Navbar />

        <main className="h-full w-full">
          <div className="flex flex-col gap-20">
            <Page />
          </div>
        </main>


      </div>

    </div>
  )
}
