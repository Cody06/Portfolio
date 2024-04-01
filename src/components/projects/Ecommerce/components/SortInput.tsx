import { Dispatch, SetStateAction } from 'react';

type Props = {
    selectedSortOrder: string;
    setSelectedSortOrder: Dispatch<SetStateAction<string>>;
};

export default function SortInput({ selectedSortOrder, setSelectedSortOrder }: Props) {
    return (
        <div>
            <label htmlFor="sortBy" className="font-bold mr-2">
                Sort by:
            </label>
            <select
                id="sortBy"
                className="px-4 py-2 rounded-lg hover:cursor-pointer"
                value={selectedSortOrder}
                onChange={(e) => setSelectedSortOrder(e.target.value)}
            >
                <option value="relevance">Relevance</option>
                <option value="priceDesc">Price High to Low</option>
                <option value="priceAsc">Price Low to High</option>
                <option value="ratingDesc">Rating</option>
                <option value="newest">Newest</option>
            </select>
        </div>
    );
}
