import React, { createContext, useContext, useReducer, useEffect } from 'react';

const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST': {
            const exists = state.items.find(item => item.id === action.payload.id);
            if (exists) return state;
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        }

        case 'REMOVE_FROM_WISHLIST':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };

        case 'LOAD_WISHLIST':
            return {
                ...state,
                items: action.payload,
            };

        default:
            return state;
    }
};

const initialState = {
    items: [],
};

export const WishlistProvider = ({ children }) => {
    const [state, dispatch] = useReducer(wishlistReducer, initialState);

    useEffect(() => {
        const saved = localStorage.getItem('ruhaam_wishlist');
        if (saved) {
            dispatch({ type: 'LOAD_WISHLIST', payload: JSON.parse(saved) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('ruhaam_wishlist', JSON.stringify(state.items));
    }, [state.items]);

    const addToWishlist = (product) => {
        dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    };

    const removeFromWishlist = (id) => {
        dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });
    };

    const isInWishlist = (id) => {
        return state.items.some(item => item.id === id);
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist: state.items,
                addToWishlist,
                removeFromWishlist,
                isInWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};
