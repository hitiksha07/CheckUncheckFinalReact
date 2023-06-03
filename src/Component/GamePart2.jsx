import React, { useEffect, useState } from 'react'

function GamePart2() {
  const [array, setarray] = useState([]);
  const [value, setvalue] = useState(true);
  const [win, setwin] = useState('');
  const [firstcol, setfirstcol] = useState(false)
  const [seccol, setseccol] = useState(false)
  const [thirdcol, setthirdcol] = useState(false)
  const [firstRow, setfirstRow] = useState(false)
  const [secrow, setsecrow] = useState(false)
  const [thirdrow, setthirdrow] = useState(false)
  const [cross1, setcross1] = useState(false)
  const [cross2, setcross2] = useState(false)
  console.log(win)
  useEffect(() => {
    winner();
    console.log(win)
  }, [value])

  function getValue(i) {
    // console.log(array[i])

    if (win == '') {
      if (array[i] == undefined) {
        if (value) {
          array[i] = "x"
          setvalue(false)
        }
        else {
          array[i] = "o"
          setvalue(true)
        }
      }
      setarray(array)
    }
  }


  function winner() {
    let newArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < newArray.length; i++) {
      const [a, b, c] = newArray[i];
      if (array[a] != undefined) {
        if (array[a] == array[b] && array[a] == array[c]) {
          let clr = [a, b, c]
          setwin(array[a]);
          console.log('clr2', clr);
          // firstcol===
          if (clr[0] == 0 && clr[1] == 3 && clr[2] == 6) {
            setfirstcol(true)
          }
          // seccol---
          else if (clr[0] == 1 && clr[1] == 4 && clr[2] == 7) {
            setseccol(true)
          }
          // thirdcol---
          else if (clr[0] == 2 && clr[1] == 5 && clr[2] == 8) {
            setthirdcol(true)
          }
          // firstrow---
          else if (clr[0] == 0 && clr[1] ==1 && clr[2] == 2) {
            setfirstRow(true)
          }
          // secrow---
          else if (clr[0] == 3 && clr[1] == 4 && clr[2] ==5) {
            setsecrow(true)
          }
          // thirdrow---
          else if (clr[0] == 6 && clr[1] == 7 && clr[2] ==8) {
            setthirdrow(true)
          }
          // cross1---
          else if (clr[0] == 0 && clr[1] == 4 && clr[2] == 8) {
            setcross1(true)
          }
          // cross2---
          else if (clr[0] == 2 && clr[1] == 4 && clr[2] == 6) {
            setcross2(true)
          }
        }
      }
    }
  }
  const resetGame = () => {
    setarray([])
    setwin('')
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
      <>
        <div className="container border w-25 text-bg-warning position-relative">
          <div className="row">
            <h1 className="col border p-5 text-center" onClick={() => getValue(0)}><span className='text-dark spn'>0</span>{array[0]}</h1>
            <h1 className="col border p-5 text-center" onClick={() => getValue(1)}>{array[1]}</h1>
            <h1 className="col border p-5 text-center" onClick={() => getValue(2)}>{array[2]}</h1>
          </div>
          <div className="row">
            <h1 className="col border p-5 text-center" onClick={() => getValue(3)}><span className='text-dark spn'>0</span>{array[3]}</h1>
            <h1 className="col border p-5 text-center" onClick={() => getValue(4)}>{array[4]}</h1>
            <h1 className="col border p-5 text-center" onClick={() => getValue(5)}>{array[5]}</h1>
          </div>
          <div className="row">
            <h1 className="col border p-5 text-center" onClick={() => getValue(6)}><span className='text-dark spn'>0</span>{array[6]}</h1>
            <h1 className="col border p-5 text-center" onClick={() => getValue(7)}>{array[7]}</h1>
            <h1 className="col border p-5 text-center" onClick={() => getValue(8)}>{array[8]}</h1>
          </div>
          {
            value ? <h1>x turn</h1> : <h1>o turn</h1>
          }
        </div>
        <div className="text-center">
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
        <div className='position-absolute cross2 'style={{ display: cross2 ? 'block' : 'none' }}></div>

      </>
    </>
  )
}

export default GamePart2