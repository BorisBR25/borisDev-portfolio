import AvatarPortfolio from "@/components/avatar-portfolio"
import ContainerPage from "@/components/container"
import PorfolioBox from "@/components/porfolio-box"
import TransitionPage from "@/components/transition-page"
import { dataPortfolio } from "@/data"

const Portfoliopage = () => {
  return (
    <ContainerPage>
      <TransitionPage/>
      <AvatarPortfolio/>
      <div className="flex flex-col  justify-center h-full">
        <h1 className='text-2xl leading-tight text-center md:text-4xl md:mb-5'>
          Mis últimos <span className=' font-bold text-secondary'> proyectos</span>
        </h1>
        <div className="relative z-10 grid max-w-5xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-2">
          {dataPortfolio.map((data) => (
            <PorfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </ContainerPage>
  )
}

export default Portfoliopage