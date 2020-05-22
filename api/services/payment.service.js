
// Set your app credentials
const credentials = {
    apiKey: "71eafb00251877aa6d1889fe3e4e058c5baddc588b6832f0947cf494248b4033",
    username: "Sandbox"
  };
const stripeCreds = {
  publicKey: "pk_test_OpM49UoL82yEzuMpxgX7hxe800A4KpZA1K",
  secretKey:"sk_test_Dl7TW6zsemsMCpW20kmQlkUi00oC82slrH"
}

  // Get payments service
  const AfricasTalking = require('africastalking')(credentials);
  const Stripe = require('stripe')(stripeCreds.secretKey);
  // Initialize the SDK
  const payments = AfricasTalking.PAYMENTS;

  // Initiate the payment

async function mobilePay(payParams){
  const options = {
    //Set the product name
    productName: "Tactive",
    phoneNumber:payParams.phoneNumber,
    currencyCode:payParams.currencyCode,
    amount: payParams.amount,
  };

  try{
    const result = await payments.mobileCheckout(options);
     return {code: 200, message: result};
  } catch (err){
    return {code: 500, message: err};
  }
}

async function mobilePaymentConfirm (transaction_id) {
  try {
    const result = await payments.findTransaction({transactionId : transaction_id});
    console.log(result);
    return {code: 200, message: result};
  }catch (err){
    console.log(err);
    return {code: 500, message: err};
  }
}

async function cardPay (payParams){
  console.log(payParams);
  const options = {
    productName: "Tactive",
    paymentCard: payParams.paymentCard,
    currencyCode:payParams.currencyCode,
    amount: payParams.amount,
    narration: payParams.narration
  }
  try{
    const result = await payments.cardCheckoutCharge(options);
     console.log(result);
     return {code: 200, message: result};
  } catch (err){
    console.log(err);
    return {code: 500, message: err};
  }
}

async function cardPaymentConfirm (confirmParams){
  const options ={
    transactionId: confirmParams.transactionId,
    otp: confirmParams.otp
  }
  try{
    const result = await payments.cardCheckoutValidate(options);
     return {code: 200, message: result};
  } catch (err){
    return {code: 500, message: err};
  }
}

module.exports = {mobilePay,cardPay,mobilePaymentConfirm, cardPaymentConfirm}
