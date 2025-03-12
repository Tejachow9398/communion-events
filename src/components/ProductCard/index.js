import './index.css'

const ProductCard = props => {
  const {productData} = props
  const {title, date, startTime, eventType, eventimg} = productData
  let eventTypeclass
  if (eventType === 'DONATION') {
    eventTypeclass = 'Donation'
  } else if (eventType === 'FREE') {
    eventTypeclass = 'free'
  } else {
    eventTypeclass = 'paid'
  }

  return (
    <li className="product-item">
      <img src={eventimg} alt="product" className="thumbnail" />
      <p className={`event-type ${eventTypeclass}`}>{eventType}</p>
      <h1 className="title">{title}</h1>
      <p className="brand">{date}</p>
      <p className="brand">{startTime} IST</p>
      <button type="button" className="shop-now-button">
        Event Details
      </button>
    </li>
  )
}
export default ProductCard
