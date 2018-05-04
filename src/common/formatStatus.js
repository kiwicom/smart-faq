// @flow


const formatStatus = (status_string: ?string) => {
  switch(status_string) {
    case 'NEW': return { text: 'New', color: '#171b1e' }
    case 'REFUNDED': return { text: 'Refunded', color: '#171b1e' }
    case 'PENDING': return { text: 'Pending', color: '#ffc345' }
    case 'OPEN': return { text: 'Open', color: '#ffc345' }
    case 'INFO': return { text: 'Info', color: '#ffc345' }
    case 'CONFIRMED': return { text: 'Confirmed', color: '#52cf26' }
    case 'CANCELLED': return { text: 'Cancelled', color: '#171b1e' }
    case 'DELETED': return { text: 'Deleted', color: '#171b1e' }
    case 'CLOSED': return { text: 'Closed', color: '#ffc345' }
    case 'EXPIRED': return { text: 'Expired', color: '#171b1e' }
    default: return { text: 'Expired', color: '#171b1e' }
  }
};

export { formatStatus };
