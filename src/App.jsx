import "./App.css";

const UserStatus = ({ isOnline }) => {
  return isOnline ? <p>User is online</p> : <p>User is offline</p>;
};

const DayOfWeek = ({ isWeekend }) => {
  return isWeekend ? <p>Enjoy your weekend!</p> : <p>Have a great day!</p>;
};

const ShoppingCart = ({ itemCount }) => {
  return itemCount > 0 ? (
    <p>You have {itemCount} items in your cart</p>
  ) : (
    <p>Your cart is empty</p>
  );
};

const DiscountOffer = ({ isPrimeMember }) => {
  return isPrimeMember ? (
    <p>You're eligible for a 20% discount</p>
  ) : (
    <p>Become a prime member for exclusive discounts</p>
  );
};

const ShowError = ({ ShowError }) => {
  return <div>{ShowError && <p>{ShowError}</p>}</div>;
};

export default function App() {
  return (
    <main>
      <UserStatus isOnline={true} />
      <DayOfWeek isWeekend={true} />
      <ShoppingCart itemCount={2} />
      <DiscountOffer isPrimeMember={true} />
      <ShowError ShowError="An error occurred. Please try again later." />
    </main>
  );
}
