import React from 'react'

const max = 1000
const half = max / 2

const bayes_ai_b = ({ai, b_ai, b_aj}) => b_ai * ai / (b_ai * ai + b_aj * (1- ai) ) 
const bayes_b = ({ai, b_ai, b_aj}) => (b_ai * ai + b_aj * (1- ai) ) 

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ai: 0.5,
      b_ai: 0.5,
      b_aj: 0.5,
      height: 0
    }
  }
  componentDidMount() {
    this.setState({
      height: (window || {}).innerHeight || this.state.height
    })
  }
  update(value, prop) {
    this.setState({[prop]: value / max})
  }
  render() {
    return  !!this.state.height && <div>
      <label>probabilidad de que pase <b>I</b> </label>
      <input key="1" type="range" min="1" max={max} defaultValue={half} onChange={(e)=>this.update(e.target.value,"ai")} className="slider"/>
      <label>probablidad de que pase <b>B</b> cuando pasa <b>I</b> </label>
      <input key="2" type="range" min="1" max={max} defaultValue={half} onChange={(e)=>this.update(e.target.value,"b_ai")}  className="slider"/>
      <label>probabilidad de que pase <b>B</b> cuando no pasa <b>I</b></label>
      <input key="3" type="range" min="1" max={max} defaultValue={half} onChange={(e)=>this.update(e.target.value,"b_aj")} className="slider"/>
      <label>probabilidad de <b>B</b></label>
      <input key="5" type="range" min="1" max={max} value={bayes_b(this.state) * max} readOnly className="slider result" />
      <label>probabilidad de <b>I</b> sabiendo <b>B</b></label>
      <input key="4" type="range" min="1" max={max} value={bayes_ai_b(this.state) * max} readOnly className="slider result" />
      <style jsx>{`
        input[type=range].slider {
          -webkit-appearance: none;
          width: 100%;
          margin: 0px 0;
          display: block;
          height: ${this.state.height / 6}px;
        }
        input[type=range].slider:focus {
          outline: none;
        }
        input[type=range].slider::-webkit-slider-runnable-track {
          width: 100%;
          height: ${this.state.height / 10}px;
          cursor: pointer;
          box-shadow: 0.1px 0.1px 0px #005900, 0px 0px 0.1px #007200;
          background: #0000ff;
          border-radius: 0px;
          border: 0px solid #010101;
        }
        input[type=range].slider::-webkit-slider-thumb {
          box-shadow: 0px 0px 0px rgba(0, 0, 62, 0.67), 0px 0px 0px rgba(0, 0, 88, 0.67);
          border: 0.4px solid rgba(0, 30, 0, 0.57);
          height: ${this.state.height / 10}px;
          width: 17px;
          border-radius: 0px;
          background: #ffffff;
          cursor: pointer;
          -webkit-appearance: none;
          margin-top: 0px;
        }
        input[type=range].slider:focus::-webkit-slider-runnable-track {
          background: #8080ff;
        }
        input[type=range].slider.result::-webkit-slider-runnable-track {
          background: red;
        }
        input[type=range].slider.result:focus::-webkit-slider-runnable-track {
          background: #ff8080;
        }
      `}</style>
    </div>

  }
}
