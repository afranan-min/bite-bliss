import React, { useState } from 'react';

const AddCategoryForm = () => {
    const [categoryName, setCategoryName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/addCategory', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ categoryName: categoryName })
            });

            if (!response.ok) {
                throw new Error('Failed to add category');
            }

            alert('Category added successfully');
            setCategoryName(''); // Clear input field after successful submission
        } catch (error) {
            console.error('Error adding category:', error.message);
            alert('Failed to add category');
        }
    };

    // Log categoryName whenever it changes
    console.log('Current categoryName:', categoryName);

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
            <h3 className="mb-3">Add Food Category</h3>
            <form onSubmit={handleSubmit} className="w-50">
                <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">Category Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="categoryName"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Category</button>
            </form>
        </div>
    );
};

export default AddCategoryForm;
