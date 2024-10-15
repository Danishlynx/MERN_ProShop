import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';

// @desc create new order
//@route POST /api/orders
//@access Public

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No Order items');
  } else {
    const order = new Order({
      orderItems: orderItems.map((x) => ({
        ...x,
        product: x._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createOrder = await order.save();
    res.status(201).json(createOrder);
  }
});

// @desc Get logged in user orders
//@route Get /api/orders
//@access Public

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

// @desc Get order by ID
//@route Get /api/orders/:id
//@access Private

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error('Order out not found');
  }
});

// @desc Update order to paid
//@route Get /api/orders/:id/pay
//@access Private

const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send(' update order to be paid');
});

// @desc Update order to delivered
//@route Get /api/orders/:id/pay
//@access Private/admin

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send(' update order to be delivered');
});

// @desc Get all orders
//@route Get /api/orders/:id/pay
//@access Private/admin

const getOrders = asyncHandler(async (req, res) => {
  res.send(' get all orders');
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
