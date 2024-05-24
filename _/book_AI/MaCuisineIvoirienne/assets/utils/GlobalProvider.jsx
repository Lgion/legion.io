"use client"

import { createContext, useState, useEffect, useRef } from "react";

const GlobalContext = createContext()
export default GlobalContext;

export const GlobalProvider = ({children}) => {

    const atts = (bem,align,modifier) => {
        const render_attsFn = (o) => {
            const atts_calledFn = {}
            Object.keys(o).forEach((item,i) => {
                atts_calledFn[item] = o[item]()
            })
            return atts_calledFn
        }
        , className = () => bem+' '+align+' --'+modifier
        , atts_fn = render_attsFn({
            className
        })
        , blockRef = useRef()
        , atts = {
            ref: blockRef
            , ...atts_fn
        }
        return atts
    }
    const context = {atts}

    return <GlobalContext.Provider value={context}>
        {children}
    </GlobalContext.Provider>
}


