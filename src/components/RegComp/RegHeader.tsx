import { ReactElement } from "react";
import { boxElement } from "../../assets/constants/Const";

export default function RegHeader() {

    type obj = {
        icon: JSX.Element,
        name: string,
        description: string
    }

  return (
    <header className="bg-BbackgoundColor h-full pt-[100px]">
        <div className="bg-BbackgoundColor">
            <div className="w-full 15xl:w-[1320px] pb-[22px] px-[15px] qsm:px-[30px] 2xl:w-[1450px] m-auto">
                <h1 className="text-3xl hsm:text-4xl hlg:text-5xl hsm:mt-[30px] font-bold text-blue-400 text-center">One app to replace them all!</h1>

                <div className="p-0 sm:px-[50px] md:p-0 m-auto my-[30px] qsm:my-[50px] flex justify-center flex-wrap gap-[30px]">
                    {
                        boxElement.map((_item: obj) :ReactElement => {
                            return (
                                <div className="p-[15px] qsm:p-[25px] md:min-w-[250px] md:max-w-[300px] hlg:min-w-[300px] hlg:max-w-[350px] border-[0.3px] border-BgrayDark rounded-xl duration-150 delay-75 hover:border-white hover:translate-y-[-5px]">
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
            </div>
        </div>
    </header>
  )
}