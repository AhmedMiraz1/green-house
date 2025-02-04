import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAgreement from "../../hooks/useAgreement";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const[error, setError]=useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const {user}=useAuth()
  const navigate = useNavigate();

  const [cart, refetch] = useAgreement();

  const totalPrice = cart.reduce((total, item) => total + item.rent, 0);
  // console.log(totalPrice);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });
  
      if (error) {
        // console.log("payment error", error);
        setError(error.message);
      } else {
        console.log("payment method", paymentMethod);
        setError("");
      }
      const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
      if (confirmError) {
        // console.log("confirm error");
      } else {
        // console.log("payment intent", paymentIntent);
        if (paymentIntent.status === "succeeded") {
          console.log("transaction id", paymentIntent.id);
          setTransactionId(paymentIntent.id);
          const payment = {
            email: user.email,
            price: totalPrice,
            transactionId: paymentIntent.id,
            date: new Date(), // utc date convert , use moment js
            cartIds: cart.map((item) => item._id),
            // menuItemIds: cart.map((item) => item._id),
            status: "pending",
          };
          const res = await axiosSecure.post("/payments", payment);
        console.log("payment save ", res.data);
        refetch();
        if(res.data?.paymentResult?.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your payment successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/payment-history')
        }

        }}
          
          
      
      
  };
  return (
    <form onSubmit={handelSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn bnt-sm bg-blue-600 text-white mt-6"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600">{error}</p>
        
        {transactionId && (
          <p className="text-green-600"> Your transaction id : {transactionId}</p>
        )}
    </form>
  );
};

export default CheckoutForm;
