export type District = {
  delta: Delta;
  delta21_14: Delta21_14;
  delta7: Delta7;
  meta: Meta;
  total: Total;
};

type Value = {
  confirmed: number;
  deceased: number;
  recovered: number;
  vaccinated1: number;
  vaccinated2: number;
  other: number;
  population?: number;
  tested?: {
    date: string;
  };
};

export type Delta = Partial<Omit<Value, 'tested' | 'other' | 'population'>>;
export type Delta7 = Omit<Value, 'tested' | 'other' | 'population'>;

export type Delta21_14 = Pick<Value, 'confirmed'>;

export type Meta = Pick<Value, 'population' | 'tested'>;

export type Total = Omit<Value, 'tested' | 'population'> & {tested: number};
