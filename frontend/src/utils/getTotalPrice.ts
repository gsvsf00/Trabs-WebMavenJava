import { ISelectedSeat } from "../types/ISeat";

const getTotalPrice = (selected?: ISelectedSeat[], currentUserRole?: string): number => {
  const totalPrice = Number(
    selected?.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0)
  );

  if (!totalPrice) return 0;

  const fivePercent = (totalPrice * 1.05).toFixed(2);

  return currentUserRole !== "USER" ? Number(fivePercent) : Number(totalPrice);
};

export default getTotalPrice;
