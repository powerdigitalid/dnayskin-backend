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
      const lastDigits = digits.toString().length;
      n_zero = Math.max(0, data[data.length - 1].cust_id.length - 1 - lastDigits);
      if (n_zero === 0) {
        customer_id = `${customer_id}${digits}`;
      } else {
        customer_id = `${customer_id}${'0'.repeat(n_zero)}${digits}`;
      }
    } else {
      digits = 1;
      customer_id = `${customer_id}000${digits}`;
    }
    return customer_id;
  } catch (error) {
    console.log(error);
  }
}

module.exports = generateId;
