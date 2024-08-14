import React, { useState } from 'react';

const AddFoodItemForm = () => {
    const [CategoryName, setCategoryName] = useState('');
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [options, setOptions] = useState([{ size: '', price: '' }]);
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

      

        try {
            const response = await fetch('http://localhost:5000/api/addFoodItem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ CategoryName, name, img, options, description })
            });

            if (!response.ok) {
                throw new Error('Failed to add food item');
            }

            alert('Food item added successfully');
            // Clear form fields after successful submission
            setCategoryName('');
            setName('');
            setImg('');
            setOptions([{ size: '', price: '' }]);
            setDescription('');
        } catch (error) {
            console.error('Error adding food item:', error.message);
            alert('Failed to add food item');
        }
    };

    const handleOptionChange = (index, field, value) => {
        const newOptions = [...options];
        newOptions[index][field] = value;
        setOptions(newOptions);
    };

    const handleAddOption = () => {
        setOptions([...options, { size: '', price: '' }]);
    };

    const handleRemoveOption = (index) => {
        const newOptions = options.filter((_, i) => i !== index);
        setOptions(newOptions);
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
            <h3 className="mb-3">Add Food Item</h3>
            <form onSubmit={handleSubmit} className="w-50">
                <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">Category Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="categoryName"
                        value={CategoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Item Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Image URL:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="img"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Options:</label>
                    {options.map((option, index) => (
                        <div key={index} className="d-flex mb-2">
                            <input
                                type="text"
                                className="form-control me-2"
                                placeholder="Size"
                                value={option.size}
                                onChange={(e) => handleOptionChange(index, 'size', e.target.value)}
                                required
                            />
                            <input
                                type="number"
                                className="form-control me-2"
                                placeholder="Price"
                                value={option.price}
                                onChange={(e) => handleOptionChange(index, 'price', e.target.value)}
                                required
                            />
                            <button type="button" className="btn btn-danger" onClick={() => handleRemoveOption(index)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" className="btn btn-secondary mt-2" onClick={handleAddOption}>Add Option</button>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Food Item</button>
            </form>
        </div>
    );
};

export default AddFoodItemForm;
