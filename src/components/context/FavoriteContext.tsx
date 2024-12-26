import React, { createContext, useState, useContext } from "react";

interface Dog {
  id: number;
  name: string;
  breed: string;
  status: string;
  gender: string;
  image: string;
}

interface FavoritesContextType {
  favoriteDogs: Dog[];
  addFavorite: (dog: Dog) => void;
  removeFavorite: (dogId: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteDogs, setFavoriteDogs] = useState<Dog[]>([]);

  const addFavorite = (dog: Dog) => {
    if (!favoriteDogs.some((fav) => fav.id === dog.id)) {
      setFavoriteDogs([...favoriteDogs, dog]);
    }
  };

  const removeFavorite = (dogId: number) => {
    setFavoriteDogs(favoriteDogs.filter((dog) => dog.id !== dogId));
  };

  return (
    <FavoritesContext.Provider value={{ favoriteDogs, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
