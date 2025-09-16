"use client"

import { useRouter } from "next/navigation";
import { useCounterStore, useInputStore } from "./store";
import { useState } from "react";

const Zustandpage = () => {
    const router = useRouter()

    // const {count , decs, inc} = useCounterStore()
    // const count = useCounterStore((state) => state.count); // تکی کال کنه 


    const { setValue, value } = useInputStore()


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }


    return (<div className="p-10 flex flex-col gap-10">

        {/* <button onClick={inc} className="p-2 bg-red-500 text-white rounded-md">
            INC
        </button>

        <button onClick={decs} className="p-2 bg-red-500 text-white rounded-md">
            DECS
        </button>

        <p>{count}</p> */}


        <input placeholder="tadaaa" value={value} onChange={onChange} />

        <button onClick={() => router.push("/products")}>go to</button>


    </div>);
}

export default Zustandpage;