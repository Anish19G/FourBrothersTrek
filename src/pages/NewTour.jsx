import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Container, Label, Input, FormText, Button } from 'reactstrap';
import '../styles/newtour.css';



const NewTour = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    city: "",
    distance: "",
    address: "",
    price: "",
    maxGroupSize: "",
    desc: "",
    avgRating: "",
    itinerary: "",
    photo: null,
    featured: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add submit logic here
  };

  return (
    <div className="form-container">
      <h2>Create Tour</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group-row">
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Distance:</label>
            <input
              type="number"
              name="distance"
              value={formData.distance}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group-row">
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Country:</label>
            <select 
                name="country" 
                value={formData.country} 
                onChange={handleChange}>
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="France">France</option>
                <option value="Japan">Japan</option>
            </select>
        </div>
        </div>

        <div className="form-group-row">
        <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Max Group Size:</label>
            <input
              type="number"
              name="maxGroupSize"
              value={formData.maxGroupSize}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Average Rating:</label>
            <input
              type="number"
              step="0.1"
              name="avgRating"
              value={formData.avgRating}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>itinerary</label>
          <textarea
            name="itinerary"
            value={formData.itinerary}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Photo:</label>
          <input
            type="file"
            name="photo"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group-row">
            <div className="form-group">
                <label>Tour Category:</label>
                <select 
                    name="tourCategory" 
                    value={formData.tourCategory} 
                    onChange={handleChange}>
                    <option value="">Select Category</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Relaxation">Relaxation</option>
                </select>
            </div>
            <div className="form-group">
                <label>Package:</label>
                <select 
                    name="package" 
                    value={formData.package} 
                    onChange={handleChange}>
                    <option value="">Select Package</option>
                    <option value="Basic">Basic</option>
                    <option value="Standard">Standard</option>
                    <option value="Premium">Premium</option>
                </select>
            </div>
        </div>

        
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />
            Featured
          </label>
        </div>
        <div className="button-group">
          <button type="button" className="back-button">
            Back
          </button>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>


  );
};

export default NewTour;


// const newTour = () => {
//     return <section>
//         <Container>
//             <Row>

//                 <Col lg="12" className="m-auto">
//                     <h2>Add tour</h2>

//                     <div className="new__container justify-content-between">

//                         <Form>
//                             <Row>
//                                 <FormGroup>
//                                     <Label for="exampleAddress">
//                                         title
//                                     </Label>
//                                     <Input
//                                         id="exampleAddress"
//                                         name="address"
//                                         placeholder="1234 Main St"
//                                     />
//                                 </FormGroup>
//                                 <Col md={6}>
//                                     <FormGroup>
//                                         <Label for="exampleEmail">
//                                             title
//                                         </Label>
//                                         <Input
//                                             id="exampleEmail"
//                                             name="email"
//                                             placeholder="with a placeholder"
//                                             type="email"
//                                         />
//                                     </FormGroup>
//                                 </Col>
//                                 <Col md={6}>
//                                     <FormGroup>
//                                         <Label for="examplePassword">
//                                             Password
//                                         </Label>
//                                         <Input
//                                             id="examplePassword"
//                                             name="password"
//                                             placeholder="password placeholder"
//                                             type="password"
//                                         />
//                                     </FormGroup>
//                                 </Col>
//                             </Row>

//                             <Row>
//                                 <Col md={6}>
//                                     <FormGroup>
//                                         <Label for="exampleCity">
//                                             City
//                                         </Label>
//                                         <Input
//                                             id="exampleCity"
//                                             name="city"
//                                         />
//                                     </FormGroup>
//                                 </Col>
//                                 <Col md={4}>
//                                     <FormGroup>
//                                         <Label for="exampleState">
//                                             distance
//                                         </Label>
//                                         <Input
//                                             id="exampleState"
//                                             name="state"
//                                         />
//                                     </FormGroup>
//                                 </Col>
//                                 <Col md={2}>
//                                     <FormGroup>
//                                         <Label for="exampleZip">
//                                             maxGroupSize
//                                         </Label>
//                                         <Input
//                                             id="exampleZip"
//                                             name="zip"
//                                         />
//                                     </FormGroup>
//                                 </Col>
//                             </Row>
//                             <Col md={4}>
//                                 <FormGroup>
//                                     <Label for="exampleState">
//                                         price
//                                     </Label>
//                                     <Input
//                                         id="exampleState"
//                                         name="state"
//                                     />
//                                 </FormGroup>
//                             </Col>
//                             <FormGroup row>
//                                 <Label
//                                     for="exampleText"
//                                 >
//                                     desc
//                                 </Label>
//                                 <Col>
//                                     <Input
//                                         id="exampleText"
//                                         name="desc"
//                                         type="textarea"
//                                     />
//                                 </Col>
//                             </FormGroup>
//                             <FormGroup row>
//                                 <Label
//                                     for="exampleText"
//                                 >
//                                     itinerary
//                                 </Label>
//                                 <Col>
//                                     <Input
//                                         id="exampleText"
//                                         name="desc"
//                                         type="textarea"
//                                     />
//                                 </Col>
//                             </FormGroup>

//                             <FormGroup check>
//                                 <Input
//                                     id="exampleCheck"
//                                     name="check"
//                                     type="checkbox"
//                                 />
//                                 <Label
//                                     check
//                                     for="exampleCheck"
//                                 >
//                                     featured
//                                 </Label>
//                             </FormGroup>
//                             <Button>
//                                 Submit
//                             </Button>
//                         </Form>


//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     </section>
// }

// export default newTour