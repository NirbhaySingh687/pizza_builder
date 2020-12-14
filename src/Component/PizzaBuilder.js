import React,{Component} from "react"
import {connect} from "react-redux"
import OrderConfirmation from "./OrderConfirmation";
import OrderDetails from "./OrderDetails";
import ToppingSelect from "./ToppingSelect";
import Header from "./Header";

class PizzaBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedToppings: [],
            topping :[],
            basePrice: 20,
            toppingPrice: 150,
            discount: {
                userCode: '',
                applied: false,
                codes: {
                    codepen: 25,
                    css: 20,
                    george: 30,
                    html: 10,
                    javascript: 15,
                    pizza: 40,
                    react: 35
                }
            },
            orderConfirmed: false
        }
    }
    componentDidMount() {
        if(this.props.toppingOptions){
            const toppings = this.props.toppingOptions.toppingOptions
            this.setState({
                topping: [toppings]
            })
        }
    }

    confirmOrderBtnRef = React.createRef();
    closeConfirmationBtnRef = React.createRef();

    handleToppingOptionClick = e => {
        if (e.target.className === 'topping-input') {
            const selectedTopping = e.target.id;
            this.state.selectedToppings.includes(selectedTopping) ?
                this.setState(prevState => ({ selectedToppings: prevState.selectedToppings.filter(topping => topping !== selectedTopping) })) :
                this.setState(prevState => ({ selectedToppings: [...prevState.selectedToppings, selectedTopping] }));
        }
    }

    handleDiscountInput = e => {

        const value = e.target.value.trim().toLowerCase();

        this.setState(prevState => ({ discount: { ...prevState.discount, userCode: value } }));
        if (this.state.discount.applied) {
            this.setState(prevState => ({ discount: { ...prevState.discount, applied: false } }));
        }
    }

    handleDiscountClick = () => this.setState(prevState => ({ discount: { ...prevState.discount, applied: true } }));

    handleOrderSubmit = () => {
        this.setState(prevState => (
            { orderConfirmed: !prevState.orderConfirmed }
        ), () => {
            this.state.orderConfirmed ?
                this.closeConfirmationBtnRef.current.focus() :
                this.confirmOrderBtnRef.current.focus();
        })
    };

    render() {
        const {toppingOptions} = this.props.toppingOptions
        let selectedToppingAmount = 0
        if(this.state.selectedToppings.length >=1){
            this.state.selectedToppings.map(topping=>{
                const findValue = toppingOptions[topping]
                selectedToppingAmount += parseInt(findValue.amount)
            })
        }
        const totalPrice = parseInt(this.state.basePrice) + selectedToppingAmount
        return (
            <React.Fragment>
                <Header />
                <main>
                    <div className='container'>
                        <ToppingSelect
                            toppingOptions={ Object.entries(toppingOptions) }
                            toppingPrice={  selectedToppingAmount.toFixed(2) }
                            handleToppingOptionClick={ this.handleToppingOptionClick } />

                        <OrderDetails
                            selectedToppings={ this.state.selectedToppings }
                            totalPrice={ parseInt(this.state.basePrice) + selectedToppingAmount }
                            discount={ this.state.discount }
                            confirmOrderBtnRef={ this.confirmOrderBtnRef }
                            handleDiscountInput={ this.handleDiscountInput }
                            handleDiscountClick={ this.handleDiscountClick }
                            handleOrderSubmit={ this.handleOrderSubmit }
                        />
                        {
                            this.state.orderConfirmed ?
                                <OrderConfirmation
                                    handleOrderSubmit={ this.handleOrderSubmit }
                                    closeConfirmationBtnRef={ this.closeConfirmationBtnRef }
                                />
                                : null
                        }
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

const mapStateToProps =(state)=>{
   return {
       toppingOptions : state.toppingOption
   }
}

export default connect(mapStateToProps,null,)(PizzaBuilder)
