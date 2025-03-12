import {Component} from 'react'
import { ThreeDots } from "react-loader-spinner";
import Popup from 'reactjs-popup'
import ProductCard from '../ProductCard'
import './index.css'

const products = [
  {
    title: 'Vinayaka Chavithi',
    date: 'Saturday, March 15, 2025',
    startTime: '5:30 AM ',
    eventType: 'DONATION',
    eventimg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmil6iKoliraftuZ3ErGE7Ts-erT_a-Rdyw&s',
    eventcategory: 'Religious',
  },
  {
    title: 'Diwali',
    date: 'Saturday, March 15, 2025',
    startTime: '5:30 AM ',
    eventType: 'FREE',
    eventimg:
      'https://i.natgeofe.com/n/7e33fdf8-c549-4cc6-99c2-a66bf6cad079/GettyImages-1778646120_16x9.jpg?w=1200',
    eventcategory: 'Religious',
  },
  {
    title: 'Sri Rama Navami',
    date: 'Saturday, March 15, 2025',
    startTime: '5:30 AM ',
    eventType: 'DONATION',
    eventimg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZCD_0sjSeudpcBa7dZRI3dmPN1FyBcJvn5w&s',
    eventcategory: 'Religious',
  },
  {
    title: 'Maha Shivratri',
    date: 'Saturday, March 15, 2025',
    startTime: '5:30 AM ',
    eventType: 'PAID',
    eventimg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYSDfni2FqnojFXnXcCzd3y6kvnQF3OkItg&s',
    eventcategory: 'Religious',
  },
]

class AllProductsSection extends Component {
  state = {
    productsList: products,
    isLoading: false,
    text: '',
    type: 'DONATION',
    time: '',
    date: '',
    imgurl: '',
    category: 'Religious',
    error: false,
    success: false,
  }

  onchangetext = event => {
    this.setState({text: event.target.value})
  }

  onchangetime = event => {
    this.setState({time: event.target.value})
  }

  onchangetype = event => {
    this.setState({type: event.target.value})
  }

  onchangeimg = event => {
    this.setState({imgurl: event.target.value})
  }

  onchangecategory = event => {
    this.setState({category: event.target.value})
  }

  onchangedate = event => {
    this.setState({date: event.target.value})
  }

  onchangestate = () => {
    this.setState({success: false})
  }

  onaddEvent = event => {
    event.preventDefault()
    const {text, type, time, imgurl, date, category} = this.state
    console.log(type)
    if (
      text === '' ||
      type === '' ||
      time === '' ||
      imgurl === '' ||
      date === '' ||
      category === ''
    ) {
      this.setState({error: true})
    } else {
      const newevent = {
        title: text,
        date,
        startTime: time,
        eventimg: imgurl,
        eventType: type,
        eventcategory: category,
      }
      this.setState(prev => ({
        productsList: [...prev.productsList, newevent],
        success: true,
        error: false,
        text: '',
        date: '',
        time: '',
        imgurl: '',
        type: 'DONATION',
      }))
    }
  }

  renderProductsList = () => {
    const {productsList, text, time, imgurl, error, success} = this.state
    return (
      <>
        <div className="products-heading-cont">
          <h1 className="products-heading">All Products</h1>
          <Popup
            trigger={
              <button className="add-btn" type="button">
                {' '}
                Add Event{' '}
              </button>
            }
            modal
            nested
          >
            {close => (
              <div className="modal">
                <button className="close" type="button" onClick={close}>
                  &times;
                </button>
                <div className="header"> Event Details </div>
                <form className="content" onSubmit={this.onaddEvent}>
                  <input
                    type="text"
                    placeholder="Title"
                    className="input"
                    value={text}
                    onChange={this.onchangetext}
                  />
                  <label htmlFor="event">Event Type</label>
                  <select
                    id="event"
                    name="events"
                    className="input"
                    onChange={this.onchangetype}
                  >
                    <option value="DONATION">Donation</option>
                    <option value="FREE">Free</option>
                    <option value="PAID">Paid</option>
                  </select>
                  <label htmlFor="eventcategory">Event Type</label>
                  <select
                    id="eventcategory"
                    name="events"
                    className="input"
                    onChange={this.onchangecategory}
                  >
                    <option value="Religious">Religious</option>
                    <option value="Social">Social</option>
                    <option value="Charity">Charity</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Event Time"
                    className="input"
                    onChange={this.onchangetime}
                    value={time}
                  />
                  <input
                    type="date"
                    className="input"
                    onChange={this.onchangedate}
                  />
                  <input
                    type="text"
                    placeholder="Event Image URL"
                    className="input"
                    onChange={this.onchangeimg}
                    value={imgurl}
                  />
                  <button type="submit" className="button">
                    Submit
                  </button>
                  {error && (
                    <p className="error">All the details are required</p>
                  )}
                  {success && (
                    <p className="success">Event Successfully Added</p>
                  )}
                </form>
              </div>
            )}
          </Popup>
        </div>
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <ThreeDots type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return <>{isLoading ? this.renderLoader() : this.renderProductsList()}</>
  }
}

export default AllProductsSection
