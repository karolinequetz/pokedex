interface Types {
  type: {
    name: string;
  };
}

interface Sprites {
  other: {
    dream_world: { front_default: string };
  };
}

export interface Status {
  id: string;
  types?: Types[];
  sprites: Sprites;
}

export interface Pokemon {
  name: string;
  url: string;
  status: Status;
}

export interface PokeList {
  results: Pokemon[];
}
