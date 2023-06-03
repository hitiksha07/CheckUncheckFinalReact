
import React, { useEffect, useState } from 'react'
import { addDataYear, deleteDataYear, getDataYear, updateDataYear } from '../Redux/action/dataAction';
import { useDispatch, useSelector } from 'react-redux';

function CheckUnchecked() {
    let main = [
        {
            id: 1,
            yearData: [
                {
                    year: 1990,
                    isChecked: false
                },
                {
                    year: 1991,
                    isChecked: false
                },
                {
                    year: 1992,
                    isChecked: false
                },
                {
                    year: 1993,
                    isChecked: false
                },
                {
                    year: 1994,
                    isChecked: false
                }
            ]
        },
        {
            id: 2,
            yearData: [
                {
                    year: 2000,
                    isChecked: false
                },
                {
                    year: 2001,
                    isChecked: false
                },
                {
                    year: 2002,
                    isChecked: false
                },
                {
                    year: 2003,
                    isChecked: false
                },
                {
                    year: 2004,
                    isChecked: false
                }
            ]
        },
        {
            id: 3,
            yearData: [
                {
                    year: 1857,
                    isChecked: false
                },
                {
                    year: 1855,
                    isChecked: false
                },
                {
                    year: 1899,
                    isChecked: false
                }
            ]
        },
        {
            id: 4,
            yearData: [
                {
                    year: 1932,
                    isChecked: false
                },
                {
                    year: 1956,
                    isChecked: false
                },
                {
                    year: 1960,
                    isChecked: false
                },
                {
                    year: 1965,
                    isChecked: false
                }
            ]
        }
    ];
    const [yearsArray, setyearsArray] = useState([]);
    useEffect(() => {
        setyearsArray([...main]);
        dispatch(getDataYear())
    }, []);

    let user = useSelector(state => state.data.data);

    function checkData(e, i, id) {
        let copy = [...yearsArray];
        let data = copy.find(x => x.id == id)
        if (e.target.name == 'allselect') {
            let check = data.yearData.map(y => {
                y.isChecked = e.target.checked;
                return y
            });
            data.yearData = check;
        }
        else {
            let check = data.yearData.map((y) => {
                if (y.year == e.target.name) {
                    y.isChecked = e.target.checked;
                }
                return y
            });
            console.log('y',check)
            data.yearData = check;
        }
        copy[i] = data;
        setyearsArray([...copy])
    };

    let dispatch = useDispatch()
    let blankobj = {
        id: 0,
        years: []
    }
    const [obj, setobj] = useState({ ...blankobj })
    const [newData, setnewData] = useState([]);


    // ======submit========
    console.log('submit',yearsArray)
    function saveData() {
        let gg = [...yearsArray];
        setyearsArray([...main])

        let data = gg?.map((year, i) => {
            if (year?.yearData.find(x => x.isChecked == true)) {
                return year.id
            }
        })

        let index = data?.filter(x => x != undefined);

        let dat1 = index?.map(x => {
            let d = gg?.find(y => y.id == x);
            let data1 = d?.yearData.filter(x => x.isChecked);
            d.yearData = data1;
            // console.log('data', d);
            let p = user?.find(x => x.id == d.id);
            if (p) {
                dispatch(updateDataYear(d));
            }
            else {
                dispatch(addDataYear(d))
            }
            return d
        })
        // console.log('data1', dat1);
        setnewData([...dat1])
    }
    return (
        <div className='container my-5 py-5 bg-black bg-opacity-10 fs-5'>
            <h5>selected Year</h5>
            {
                user?.map((years, i) => {
                    return <div className='row py-2' key={i}>
                        <div className="col-1">
                            {
                                years?.yearData?.find(x => x.isChecked == true) ?
                                    <h5>{years.id}</h5> : ''
                            }
                        </div>
                        {
                            years?.yearData?.map((y, index) => {
                                return y.isChecked ? <div className="col-auto" key={index}>
                                    <h5>{y.year}</h5>
                                </div> : ''
                            })
                        }
                    </div>
                })
            }

            <div className="container bg-white">
                <div className="row">
                    <div className="col-auto">
                        <h3>Select</h3>
                    </div>
                    <div className="col">
                        <h3>Year</h3>
                    </div>
                </div>
                {
                    yearsArray?.map((years, i) => {
                        return <div className='row py-2' key={i}>
                            <div className="col-1">
                                <input
                                    type="checkbox"
                                    name="allselect"
                                    id=""
                                    onChange={(e) => checkData(e, i, years.id)}
                                    checked={years?.yearData?.filter(x => x.isChecked != true) < 1}
                                />
                            </div>
                            {
                                years?.yearData?.map((y, index) => {
                                    return <div className="col-auto" key={index}>
                                        <input type="checkbox" name={y.year} checked={y.isChecked} onChange={(e) => checkData(e, i, years.id)} id="" />
                                        <label htmlFor="">{y.year} </label>
                                    </div>
                                })
                            }
                        </div>
                    })
                }
            </div>
            <button onClick={saveData} className='btn btn-success mt-5'>Submit</button>
        </div>
    )
}

export default CheckUnchecked