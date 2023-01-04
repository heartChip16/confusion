import React, { useState } from 'react'
import { Media } from 'reactstrap'

export default function Menu() {
    const [dishes, setDishes] = useState([
        {
            id: 0,
            name: 'Uthappizza',
            image: './src/assets/images/uthappizza.png',
            category: 'mains',
            label: 'Hot',
            price: '4.99',
            description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
        },
        {
            id: 1,
            name: 'Zucchipakoda',
            image: './src/assets/images/zucchipakoda.png',
            category: 'appetizer',
            label: '',
            price: '1.99',
            description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
        },
        {
            id: 2,
            name: 'Vadonut',
            image: './src/assets/images/vadonut.png',
            category: 'appetizer',
            label: 'New',
            price: '1.99',
            description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
        },
        {
            id: 3,
            name: 'ElaiCheese Cake',
            image: './src/assets/images/elaicheesecake.png',
            category: 'dessert',
            label: '',
            price: '2.99',
            description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
        }
    ]);
    const menu = dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 mt-5" style={{ listStyleType: "none" }}>
                <Media tag="li" className='d-flex align-items-center'>
                    <Media left middle className='flex-shrink-1'>
                        <Media object src={dish.image} alt={dish.name} />
                    </Media>
                    <Media body className="flex-grow-1 ms-5">
                        <Media heading>{dish.name}</Media>
                        <p>{dish.description}</p>
                    </Media>
                </Media>
            </div>
        );
    });
    return (
        <div className='container'>
            <div className='row'>
                <Media list>
                    {menu}
                </Media>
            </div>
        </div>
    );
}
