import React, { useEffect, useState } from 'react'

function Game() {
    const [array, setarray] = useState([]);
    const [value, setvalue] = useState(true);
    const [firstcol, setfirstcol] = useState(false)
    const [seccol, setseccol] = useState(false)
    const [thirdcol, setthirdcol] = useState(false)
    const [firstRow, setfirstRow] = useState(false)
    const [secrow, setsecrow] = useState(false)
    const [thirdrow, setthirdrow] = useState(false)
    const [cross1, setcross1] = useState(false)
    const [cross2, setcross2] = useState(false)
    const [win, setwin] = useState('')
    console.log('win', win)

    useEffect(() => {
        winner();
        console.log(win)
    }, [value])

    function getValue(i) {
        // console.log(array[i])
        if (win == undefined) {
            if (array[i] == undefined) {
                if (value) {
                    array[i] = "x"
                    setvalue(false)
                }
                else {
                    array[i] = "o"
                    setvalue(true)
                }
                setarray(array)
                // console.log('first', i)
            }
        }
    }
    console.log(array)

    function winner() {
        if (array[0] == array[1] && array[0] == array[2]) {
            setwin(array[0]);
            if (array[0] != null) {
                setfirstRow(true)
            }
        }
         if (array[3] == array[4] && array[5] == array[3]) {
            setwin(array[3]) 
            if (array[3] != null) {
                setsecrow(true)
            }
        }
         if (array[6] == array[7] && array[6] == array[8]) {
            setwin(array[6])
            if (array[6] != null) {
                setthirdrow(true)
            }
        }
         if (array[0] == array[3] && array[0] == array[6]) {
            setwin(array[0]) 
            if (array[0] != null) {
                setfirstcol(true)
            }
        }
         if (array[1] == array[4] && array[1] == array[7]) {
            setwin(array[1])
           if (array[1] != null) {
                setseccol(true)
            }
        }
         if (array[2] == array[5] && array[2] == array[8]) {
            setwin(array[2])
          if (array[2] != null) {
                setthirdcol(true)
            }
        }
         if (array[0] == array[4] && array[0] == array[8]) {
            setwin(array[0])
           if (array[0] != null) {
                setcross1(true)
            }
        }
         if (array[2] == array[4] && array[2] == array[6]) {
           setwin(array[2])
            if (array[2] != null) {
                setcross2(true)
            }
        }
    }
    const resetGame = () => {
        setarray([])
        setwin(undefined)
        setfirstRow(false)
        setsecrow(false)
        setthirdrow(false)
        setfirstcol(false)
        setseccol(false)
        setthirdcol(false)
        setcross1(false)
        setcross2(false)
    }
    return (
        <>
            <div className="container border w-25 text-bg-dark position-relative">
                <div className="row">
                    <h1 className="col border h p-5 text-center" onClick={() => getValue(0)}><span className='text-dark  spn'>0</span>{array[0]}</h1>
                    <h1 className="col border h p-5 text-center" onClick={() => getValue(1)}>{array[1]}</h1>
                    <h1 className="col border h p-5 text-center" onClick={() => getValue(2)}>{array[2]}</h1>
                </div>
                <div className="row">
                    <h1 className="col border h p-5 text-center" onClick={() => getValue(3)}><span className='text-dark spn'>0</span>{array[3]}</h1>
                    <h1 className="col border h p-5 text-center" onClick={() => getValue(4)}>{array[4]}</h1>
                    <h1 className="col border h p-5 text-center" onClick={() => getValue(5)}>{array[5]}</h1>
                </div>
                <div className="row">
                    <h1 className="col border h p-5 text-center" onClick={() => getValue(6)}><span className='text-dark spn'>0</span>{array[6]}</h1>
                    <h1 className="col border h p-5 text-center" onClick={() => getValue(7)}>{array[7]}</h1>
                    <h1 className="col border h p-5 text-center" onClick={() => getValue(8)}>{array[8]}</h1>
                </div>
                {
                    value ? <h1>x turn</h1> : <h1>o turn</h1>
                }
            </div>
            <div className="text-center position-absolute win">
                {/* <button onClick={winner} className=''>Result</button> */}
                {win ? <h1 className=''>{win} is winner</h1> : ''}
            </div>
            <div className="text-center" onClick={resetGame}>
                <button className='btn btn-warning'>Reset Game</button>
            </div>

            <div className='position-absolute First-col ' style={{ display: firstcol ? 'block' : 'none' }}></div>
            <div className='position-absolute sec-col ' style={{ display: seccol ? 'block' : 'none' }}></div>
            <div className='position-absolute third-col ' style={{ display: thirdcol ? 'block' : 'none' }}></div>

            <div className='position-absolute first-row ' style={{ display: firstRow ? 'block' : 'none' }}></div>
            <div className='position-absolute sec-row ' style={{ display: secrow ? 'block' : 'none' }}></div>
            <div className='position-absolute third-row ' style={{ display: thirdrow ? 'block' : 'none' }}></div>

            <div className='position-absolute cross1 ' style={{ display: cross1 ? 'block' : 'none' }}></div>
            <div className='position-absolute cross2 ' style={{ display: cross2 ? 'block' : 'none' }}></div>

        </>
    )
}

export default Game