import './Listing.css';

interface MainImage {
    url_570xN: string;
}

export interface Item {
    listing_id: number;
    url: string;
    MainImage?: MainImage;
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
    is_digital?: boolean;
    state?: string;
}

interface ListingProps {
    items?: Item[];
}

const formatPrice = (price: string, currencyCode: string): string => {
    const priceNum = parseFloat(price).toFixed(2);

    switch (currencyCode) {
        case 'USD':
            return `$${priceNum}`;
        case 'EUR':
            return `€${priceNum}`;
        case 'GBP':
            return `£${priceNum}`;
        default:
            return `${currencyCode} ${priceNum}`;
    }
};

const truncateTitle = (title: string, maxLength: number = 50): string => {
    if (title.length <= maxLength) {
        return title;
    }
    return title.substring(0, maxLength) + '…';
};

const getStockClass = (quantity: number): string => {
    if (quantity <= 10) {
        return 'stock-low';
    } else if (quantity <= 20) {
        return 'stock-medium';
    }
    return 'stock-high';
};

function Listing({ items = [] }: ListingProps) {
    const activeItems = items.filter(
        (item) => item.state === 'active' && item.MainImage?.url_570xN
    );

    return (
        <div className="product-grid">
            {activeItems.map((item) => (
                <div key={item.listing_id} className="product-card">
                    {item.is_digital && <span className="digital-badge">Digital</span>}
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <img
                            src={item.MainImage?.url_570xN}
                            alt={item.title}
                            className="product-image"
                        />
                    </a>
                    <div className="product-info">
                        <h3 className="product-title">{truncateTitle(item.title)}</h3>
                        <div className="price-container">
                            <div className="product-price">
                                {formatPrice(item.price, item.currency_code)}
                            </div>
                            <span className={`stock-badge ${getStockClass(item.quantity)}`}>
                                {item.quantity} left
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Listing;
