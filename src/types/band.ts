export type Band = {
  id: number;
  name: string;
  genre: string;
  imageUrl: string;
  members: Member[];
};

export type Member = {
  name: string;
  role: string;
};