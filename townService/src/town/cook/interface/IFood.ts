export interface Food {
  _id: { $oid: string };
  name: string;
  ingredients: string[] | string[][];
  enhancement: string;
  timeLimit: number;
}
