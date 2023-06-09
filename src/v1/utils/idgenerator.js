const prisma = require('./prisma');

const generateId = async (str) => {
  try {
    let digits = 0;
    let customer_id = str[0].toUpperCase();
    let n_zero = 0;
    const data = await prisma.customer.findMany({
      where: {
        cust_id: {
          contains: customer_id
        }
      }
    })
    if (data.length > 0) {
      digits = parseInt(data[data.length - 1].cust_id.slice(1)) + 1;
      n_zero = data[data.length - 1].cust_id.split('0').length - 1;
      if (n_zero === 0) {
        customer_id = `${customer_id}${digits}`;
      } else {
        customer_id = `${customer_id}${new Array(n_zero + 1).join('0')}${digits}`;
      }
    } else {
      digits = 1;
      customer_id = `${customer_id}000${digits}`;
    }
    console.log({ digits, customer_id, n_zero, customer_id });
    return customer_id;
  } catch (error) {
    console.log(error);
  }
}

module.exports = generateId;
