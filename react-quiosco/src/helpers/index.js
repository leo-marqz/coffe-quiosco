
// Creame un methodo para formatear un dato a moneda
export const formatStringToDollars = (value) => {
    return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });
}

