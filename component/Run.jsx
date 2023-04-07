import React, { useEffect, useState } from "react";


const Run = () => {

    const [run, setRun] = useState(false)

    const goon = () => {
        window.scrollTo(0, 0)
    }


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY <= 200) {
                setRun(false)
            } else {
                setRun(true)
            }
        })

    }, [])

    return (
        <div className="scroll" onClick={goon} style={{ opacity: run ? "1" : "0" }}><i className="fa-solid fa-chevron-up"></i></div>
    )
}

export default Run