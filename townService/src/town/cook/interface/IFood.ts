export interface Food {
  _id: { $oid: string };
  name: string;
  ingredients: string[];
  enhancement: string;
  timeLimit: number;
}
