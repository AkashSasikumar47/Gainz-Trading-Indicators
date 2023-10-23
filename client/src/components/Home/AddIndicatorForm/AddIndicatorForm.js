import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const Label = styled.label`
    font-weight: bold;
    margin-bottom: 5px;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

const TextArea = styled.textarea`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    resize: vertical;
`;

const FileInput = styled.input`
    font-size: 16px;
`;

const Button = styled.button`
    background-color: #0074d9;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
`;

const AddIndicatorForm = () => {
    const [indicatorData, setIndicatorData] = useState({
        name: '',
        description: '',
        howToUse: '',
        githubLink: '',
        image: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setIndicatorData({ ...indicatorData, [name]: value });
    };

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setIndicatorData({ ...indicatorData, image: imageFile });
    };

    const handleAddIndicator = () => {
        if (indicatorData.name && indicatorData.description && indicatorData.howToUse && indicatorData.githubLink) {
            const formData = new FormData();
            formData.append('name', indicatorData.name);
            formData.append('description', indicatorData.description);
            formData.append('howToUse', indicatorData.howToUse);
            formData.append('githubLink', indicatorData.githubLink);
            formData.append('image', indicatorData.image);

            axios.post('http://localhost:3000/indicators', formData)
                .then(() => {
                    console.log('Indicator added successfully');
                    setIndicatorData({
                        name: '',
                        description: '',
                        howToUse: '',
                        githubLink: '',
                        image: null,
                    });
                })
                .catch((error) => {
                    console.error('Error adding indicator:', error);
                });
        } else {
            alert('Please fill in all required fields.');
        };
    }
    return (
        <FormContainer>
            <h2>Add New Indicator</h2>
            <Form>
                <FormField>
                    <Label>Name:</Label>
                    <Input type="text" name="name" value={indicatorData.name} onChange={handleInputChange} />
                </FormField>
                <FormField>
                    <Label>Description:</Label>
                    <TextArea name="description" value={indicatorData.description} onChange={handleInputChange} />
                </FormField>
                <FormField>
                    <Label>How to Use:</Label>
                    <TextArea name="howToUse" value={indicatorData.howToUse} onChange={handleInputChange} />
                </FormField>
                <FormField>
                    <Label>GitHub Link:</Label>
                    <Input type="text" name="githubLink" value={indicatorData.githubLink} onChange={handleInputChange} />
                </FormField>
                <FormField>
                    <Label>Image:</Label>
                    <FileInput type="file" accept="image/*" onChange={handleImageChange} />
                </FormField>
                <Button type="button" onClick={handleAddIndicator}>
                    Add Indicator
                </Button>
            </Form>
        </FormContainer>
    );
};

export default AddIndicatorForm;
