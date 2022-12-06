import { ISeat } from "../types/ISeat";

const getSeatsMapping = (seats: ISeat[]): ISeat[][] => {
  const numsPerGroup = Math.ceil(seats?.length / 3);
  const seatsMapping = new Array(3)
    .fill("")
    .map((_, i) => seats?.slice(i * numsPerGroup, (i + 1) * numsPerGroup));

  return seatsMapping;
};

export default getSeatsMapping;
