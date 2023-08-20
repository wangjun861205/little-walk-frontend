import { query } from "./common";

type Breed = {
  id: string;
  name: string;
};

export const fetchBreeds = async (keywords?: string): Promise<Breed[]> => {
  try {
    return await query("/dogs/breeds", { params: { keywords } });
  } catch (err) {
    throw new Error(`Failed to get dog breeds: ${err}`);
  }
};
