const Category = ({categoryItems}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Item</th>
                    <th>Amount</th>
                    <th>Seller</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                <tr><td colSpan='11'><hr/></td></tr>
            </thead>
            <tbody>
                {categoryItems && categoryItems.length >0?(
                    categoryItems.map((item, index) => (
                        <tr key={item._id} onClick={()=> handleselected(item._id)}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.amount}</td>
                            <td>{item.seller}</td>
                            <td>{item.status}</td>
                            <td>{item.action}</td>
                            <td>
                                <article>see |</article>
                                <aside>edit</aside>
                            </td>
                        </tr>
                    ))
                ):(
                    <tr><td colSpan='5'>
                        No items available
                    </td></tr>
                )}
                
            </tbody>
        </table>
    );
};

export default Category;
