import React from 'react';
// import Button from 'react-bootstrap/Button'

class stopwatch extends React.Component{
    constructor(){
        super();
        this.state = {
            microSec : '0',
            sec:'0',
            min:'0',
            interval:'',
            isStartButtonDisabled:false,
            lapse:[]
        }
    }

    couterFunction = ()=>{
        let increment = this.state.microSec
        let secInc = this.state.sec;
        let minInc = this.state.min;
        let isdisabled = this.state.isStartButtonDisabled;
        isdisabled = true

        if(increment === 60){
            ++secInc
            increment = '0'
        } 
        if(secInc === 60){
            ++minInc
            secInc = '0'
        }
        this.setState({
            microSec: ++increment,
            sec: secInc,
            min:minInc,
            isStartButtonDisabled: isdisabled 
        })
        
    }
    startTimer= ()=>{
   let  storeInterval =  setInterval(this.couterFunction, 1000)
    this.setState({
        interval:storeInterval
    })    
    }

    clearTimer = () => {
        
        let clone = this.state.interval
        let clear = clearInterval(clone)
        let isdisabled = this.state.isStartButtonDisabled;
        isdisabled = false
        this.setState({
            interval:clear,
            isStartButtonDisabled:isdisabled
        })
    }
    resetTimer = () => {
        let isdisabled = this.state.isStartButtonDisabled;
        isdisabled = false
        let microsec = this.state.microSec
        microsec = '0'
        let sec = this.state.sec
        sec = '0'
        let min = this.state.min
        min = '0'

        let clone = this.state.interval
        let clear = clearInterval(clone)
        this.setState({
            microSec:microsec,
            sec:sec,
            min:min,
            interval:clear,
            isStartButtonDisabled:isdisabled


        })
    }

    lapeseInterval = () =>{ 
       this.setState({
           lapse:[...this.state.lapse, this.state.interval]
       })
    }
    

    render(){
        // let hello ='hee'
        // console.log('hello')
        return <div>
                <div className='row'>
                    <div className='col-md-8 offset-md-2'>
                    <div id="timer" className='text-center'>
                        <span >{this.state.min < 10 ? '0'+this.state.min : this.state.min}</span>
                        <span> : {this.state.sec <10 ? '0'+this.state.sec : this.state.sec}</span>
                        <span> : {this.state.microSec < 10 ? '0' + this.state.microSec : this.state.microSec }</span>
                    </div> 
                    <div className='text-center' id="content">
                        <div className="row justify-content-center" >
                            <div className="col-md-3">
                                <span>Hours</span>
                            </div>
                            <div className="col-md-3"> 
                                <span>Minutes</span>
                            </div>
                            <div className="col-md-3 ">
                                <span>Seconds</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className='text-center mt-5'>
                        <button className="btn btn-success btn-lg mr-3" disabled={this.state.isStartButtonDisabled} onClick={this.startTimer}>Start</button>
                        <button className="btn btn-danger btn-lg mr-3" onClick={this.clearTimer}>Stop</button>
                        <button className="btn btn-info btn-lg" onClick={this.resetTimer}>Reset</button>
                        {/* <button className="btn btn-primary" onClick={this.lapeseInterval}>Lapse</button> */}
                        </div>
                    </div>
                </div>

                    {this.state.lapse.map((value, index )=>
                        <li>{value}</li>                
                    )}

            </div>
    }
}

export default stopwatch; 