import { Billboard as BillboardType } from "@/types"

interface BillboardProps{
    data:BillboardType
}
const Billboard:React.FC<BillboardProps> = ({
    data
}) =>{

    return(
<div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
  <div
    style={{ backgroundImage: `url(${data.imageUrl})` }}
    className="rounded-xl relative h-[400px] w-full overflow-hidden bg-cover bg-center"
  >
    <div className="absolute inset-0 bg-black/25"></div>

    <div className="relative h-full w-full flex flex-col justify-center items-center text-center gap-y-4">
      <div className="font-poppins font-semibold text-2xl sm:text-3xl lg:text-4xl text-white drop-shadow-xl px-4 py-2 bg-white/10 rounded-md backdrop-blur-sm max-w-xs sm:max-w-md">
        {data.label}
      </div>
    </div>
  </div>
</div>


    )
}

export default Billboard;