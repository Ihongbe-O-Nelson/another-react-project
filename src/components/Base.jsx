import React from 'react'
import reactionIcon from '../assets/assets2/images/icon-reaction.svg'
import memoryIcon from '../assets/assets2/images/icon-memory.svg'
import verbalIcon from '../assets/assets2/images/icon-verbal.svg'
import visualIcon from '../assets/assets2/images/icon-visual.svg'

const Base = () => {
  return (
    <div className="px-[8%] flex flex-col py-[4%] gap-6">
       <p className="text-lg font-bold">Summary</p>

        <div className="flex flex-col gap-3">

            <div className="flex justify-between bg-red-50 h-12 px-3 py-7 items-center rounded-xl">
                <div className="flex gap-3">
                    <img src={reactionIcon} alt="" />
                    <p className="font-bold text-red-400">Reaction</p>
                </div>
                <p className="flex"><p className="font-bold">80</p> / 100</p>
            </div>

            <div className="flex justify-between bg-yellow-50 h-12 px-3 py-7 items-center rounded-xl">
                <div className="flex gap-3">
                    <img src={memoryIcon} alt="" />
                    <p className="font-bold text-yellow-400">Memory</p>
                </div>
                <p className="flex"><p className="font-bold">92</p> / 100</p>
            </div>

            <div className="flex justify-between bg-green-50 h-12 px-3 py-7 items-center rounded-xl"> 
                <div className="flex gap-3">
                    <img src={verbalIcon} alt="" />
                    <p className="font-bold text-green-400">Verbal</p>
                </div>
                <p className="flex"><p className="font-bold">61</p> / 100</p>
            </div> 

            <div className="flex justify-between bg-blue-50 h-12 px-3 py-7 items-center rounded-xl">
                <div className="flex gap-3">
                    <img src={visualIcon} alt="" />
                    <p className="font-bold text-blue-400">Visual</p>
                </div>
                <p className="flex"><p className="font-bold">72</p> / 100</p>
            </div>
        </div>

        <button className="flex justify-center bg-blue-950 h-12 px-3 py-7 items-center rounded-full
         text-white font-bold">
            Continue</button>
    </div>
  )
}

export default Base