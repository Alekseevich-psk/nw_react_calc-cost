import './App.css';
import React from "react";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.totalCostElem = this.totalCostElem.bind(this);

        this.state = {
            percent: 30,
            inputValue: null,
            inputPercentValue: null,
            value: [],
            cost: null,
        }
    }

    onHandleClick(e) {
        if (this.inputValue.value === "" || !this.inputValue.value) return;

        this.state.value.push(this.inputValue.value);
        this.inputValue.value = "";

        if (this.inputPercentValue.value !== "" && this.inputPercentValue.value) {
            this.setState({
                percent: this.inputPercentValue.value
            })
        }

        this.setState({
            value: this.state.value
        })
    }

    totalCostElem(el) {
        return Math.round((el * (this.state.percent / 100)) + Number(el));
    }

    onHandleKeyPres(e) {
        if (e.charCode == 13) {
            this.onHandleClick(e);
        }
    }

    removeItem(event, value) {
        console.log(event, value);
    }

    render() {
        return (
            <div className="app">
                <header className="header">
                    <div className="container">
                        <h2>Онлайн калькулятор стоимости</h2>
                    </div>
                </header>
                <section className="main">
                    <div className="container">
                        <div className="main__percent">
                            <label>По умолчанию - 30%</label>
                            <input ref={(input) => this.inputPercentValue = input} className="main__form-control form-control" type="text" placeholder="Введите значение наценки" />
                        </div>
                        <div className="main__enter">
                            <div className="main__input-group input-group">
                                <input ref={(input) => this.inputValue = input} onKeyPress={this.onHandleKeyPres.bind(this)} type="number" className="main__form-control form-control" />
                                <div className="main__input-group-append input-group-append">
                                    <button onClick={this.onHandleClick.bind(this)} className="btn btn-success" type="button">Ввести</button>
                                </div>
                            </div>
                        </div>
                        <div className="main__res">
                            <ul className='pr-2'>

                                {this.state.value.reverse().map((el, index) =>
                                    <li
                                        key={(el + index)}>{el} - <span>{this.totalCostElem(el)}</span>
                                    </li>
                                )}

                            </ul>
                        </div>
                    </div>
                </section>
                <footer className="footer"></footer>
            </div>
        )
    }
}

export default App;
