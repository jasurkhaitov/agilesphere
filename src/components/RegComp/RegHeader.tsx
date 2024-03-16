import { ReactElement } from "react";
import { boxElement } from "../../assets/constants/Const";

export default function RegHeader() {

    type obj = {
        icon: JSX.Element,
        name: string,
        description: string
    }

  return (
    <header className="bg-BbackgoundColor w-full h-full pt-[100px]">
        <h1 className="text-5xl mt-[50px] font-bold text-blue-400 text-center">One app to replace them all</h1>

        <div className="w-4/5 m-auto mt-[50px] grid grid-cols-3 gap-[30px]">
            {
                boxElement.map((_item: obj) :ReactElement => {
                    return (
                        <div className="p-[25px] border-[0.3px] border-Bgray rounded-xl">
                            <div className="flex items-center mb-3 justify-start gap-4 text-button text-white">
                                {_item.icon}

                                <span>{_item.name}</span>
                            </div>

                            <p className="">{_item.description}</p>
                        </div>
                    )
                })
            }
        </div>
    </header>   
  )
}