import React from 'react';

export default class Display extends React.Component {


  render() {
    const { data } = this.props;
    const SportsRow = data.map((item, index) => {
      if (item.category === 'Sporting Goods') {
        return <li key={index}>{`${item.name} | ${item.price}`}</li>
      }
      return null;
    });
    const Electronic = data.map((item, index) => {
      if (item.category === 'Electronics') {
        return <li key={index}>{`${item.name} | ${item.price}`}</li>
      }
      return null;
    });
    return (
      <div style={{border: '2px solid blue'}}>
        <ul style={{ fontSize: '12px' }}>
          <li style={{ listStyle: 'none', fontWeight: 'bold' }}>Name | price</li>
          <li style={{ listStyle: 'none' }}>Sporting Goods</li>
          {SportsRow} 
          <li style={{ listStyle: 'none' }}>Electronics</li> {/** ProducCategoryRow */}
          {Electronic}
        </ul>
      </div>
    )
  }
}