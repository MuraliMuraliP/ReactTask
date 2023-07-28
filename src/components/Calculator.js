import './Calculator.css'
const Calculator = (props) => {
    return (
        <>
            <h1>calculator</h1>
            <input  style={{ width: '350px', height: '100px' }} />
            <table style={{margin:'auto'}}>
                <tr>
                    <th> 
                        <button className="button">C</button>
                    </th>
                    <th>
                        <button className="button">&#9003;</button>
                    </th>
                    <th> 
                        <button className="button">%</button>
                    </th>
                    <th>
                         <button className="button">÷</button>
                    </th>
                </tr>
                <tr>
                    <td> <button className="button">7</button>
                    </td>
                    <td> <button className="button">8</button>
                    </td>
                    <td> <button className="button">9</button>
                    </td>
                    <td> <button className="button">&#215;</button>
                    </td>
                </tr>
                <tr>
                    <td> <button className="button">4</button>
                    </td>
                    <td> <button className="button">5</button>
                    </td>
                    <td> <button className="button">6</button>
                    </td>
                    <td> <button className="button">&#8722;</button>
                    </td>
                </tr>
                <tr>
                    <td> <button className="button">1</button>
                    </td>
                    <td> <button className="button">2</button>
                    </td>
                    <td> <button className="button">3</button>
                    </td>
                    <td> <button className="button">&#43;</button>
                    </td>
                </tr>
                <tr>
                    <td> <button className="button">∓</button>
                    </td>
                    <td> <button className="button">0</button>
                    </td>
                    <td> <button className="button">∙</button>
                    </td>
                    <td> <button className="button">=</button>
                    </td>
                </tr>

            </table>
        </>
    )
}
export default Calculator