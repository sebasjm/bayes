import React from 'react'

const max = 1000
const half = max / 2

const simple_bayes = ({i, probs_a, b}) => probs_a[i] * probs_b_a[i] / b

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 3,
      probs_a: [0.5, 0.5, 0.5],
      b: 0.5,
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
      <label>probabilidad de <b>I</b> sabiendo <b>B</b></label>
      <input key="4" type="range" min="1" max={max} value={simple_bayes(this.state) * max} readOnly className="slider result" />
      <style jsx>{`

        input[type=range].slider {
          -webkit-appearance: none;
          width: 100%;
          margin: 0px 0;
          display: block;
          height: ${this.state.height / 5}px;
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


        .multi-range, .multi-range * { box-sizing: border-box; padding: 0; margin: 0; }
        .multi-range { 
            position: relative; width: 160px; height: 28px; margin: 16px;
            border: 1px solid #ddd; font-family: monospace;
        }
        .multi-range > hr { position: absolute; width: 100%; top: 50%; }
        .multi-range > input[type=range] {
            width: calc(100% - 16px); 
            position: absolute; bottom: 6px; left: 0;
        }
        .multi-range > input[type=range]:last-of-type { margin-left: 16px; }
        .multi-range > input[type=range]::-webkit-slider-thumb { transform: translateY(-18px); }
        .multi-range > input[type=range]::-webkit-slider-runnable-track { -webkit-appearance: none; height: 0px; }
        .multi-range > input[type=range]::-moz-range-thumb { transform: translateY(-18px); }
        .multi-range > input[type=range]::-moz-range-track { -webkit-appearance: none; height: 0px; }
        .multi-range > input[type=range]::-ms-thumb { transform: translateY(-18px); }
        .multi-range > input[type=range]::-ms-track { -webkit-appearance: none; height: 0px; }
        .multi-range::after { 
            content: attr(data-lbound) ' - ' attr(data-ubound) ' - ' attr(data-abound); 
            position: absolute; top: 0; left: 100%; white-space: nowrap;
            display: block; padding: 0px 4px; margin: -1px 2px;
            height: 26px; width: auto; border: 1px solid #ddd; 
            font-size: 13px; line-height: 26px;
        }
        
      `}</style>
    </div>

  }
}
