import React, { useState, useEffect} from 'react';
import UseEffectFN from './UseEffectFN';
import axios from 'axios'


function AddCarToNode() {
    const [GlobalUrl, setGlobalUrl] = useState('http://localhost:5000');
    const [Model, setModel] = useState('');
    const [Color, setColor] = useState('');
    const [Year, setYear] = useState(0);
    const [Price, setPrice] = useState(0);

    useEffect(() => {
       
    }, []);

    const AddCar = async() => {
        //model=mazda&price=15690&color=black&year=2023
        console.log(Model , Price, Color,Year)
        const res = await axios.get(GlobalUrl + '/addCar?model='+Model+'&price='+Price+'&color='+Color+'&year='+Year);
        console.log(res.data);
        ShowAllcars();
    }

    const ShowAllcars = async() =>{
        const res = await axios.get(GlobalUrl + '/showCars');
        console.log("All Cars : " , res.data);
    }

    return (
        <>
            <div className='row p-5' style={{textAlign:'left'}}>
                <form className='col-5'>
                    <div className="form-group">
                        <label>Add Model</label>
                        <input type="text"  onChange={(e)=>setModel(e.target.value)}  className="form-control" id="model"  placeholder="Enter model" />
                    </div>

                    <div className="form-group">
                        <label>Add Color</label>
                        <input type="text"  onChange={(e)=>setColor(e.target.value)}  className="form-control" id="model"  placeholder="Enter color" />
                    </div>

                    <div className="form-group">
                        <label>Add Year</label>
                        <input type="text"  onChange={(e)=>setYear(e.target.value)}  className="form-control" id="model"  placeholder="Enter year" />
                    </div>

                    <div className="form-group">
                        <label>Add Price</label>
                        <input type="text"  onChange={(e)=>setPrice(e.target.value)}  className="form-control" id="model"  placeholder="Enter price" />
                    </div>
                    


                    <button type="button" className="btn btn-primary" onClick={()=>AddCar()}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddCarToNode