import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";



// TODO : add publishable key 
const stripePromise = loadStripe(import.meta.env.VITE_PYMENT_GETWAY_PK)

const Payment = () => {
    return (
        <div className="mt-40">
                <Elements stripe={stripePromise}>
                    <CheckoutForm/>
                   
                </Elements>
            </div>
    );
};

export default Payment;