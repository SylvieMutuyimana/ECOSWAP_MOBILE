export const ReturnItem = ( selectedItem) => {
    console.log('selectedItem: ', selectedItem)
    return (
        <table>
            <tbody>
                {
                    selectedItem ?(
                        <>
                            <tr>
                                <td>Item</td>
                                <td>{selectedItem.name}</td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td>{selectedItem.category}</td>
                            </tr>
                            <tr>
                                <td>Seller</td>
                                <td>{selectedItem.seller}</td>
                            </tr>
                            <tr>
                                <td>Amount</td>
                                <td>{selectedItem.amount}</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>{selectedItem.status}</td>
                            </tr>
                            <tr>
                                <td>Buyer</td>
                                <td>{selectedItem.buyer?selectedItem.buyer:'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                                <td>{selectedItem.added_date}</td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>{selectedItem.description}</td>
                            </tr>
                        </>
                    ):(
                        <tr><td colSpan='2'>
                            Error loading item details
                        </td></tr>
                    )
                }
            </tbody>
        </table>
    );
};