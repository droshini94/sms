const Subscription = require("../models/Subscription");

// Get all subscriptions
const getSubscriptions = async (req, res) => {
    try {
        const subscriptions = await Subscription.find()
            .populate("user")
            .populate("plan");

        res.status(200).json(subscriptions);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });
    }
};

// Create Subscription
const createSubscription = async (req, res) => {

    try {

        const { userId, planId, endDate } = req.body;

        const subscription = new Subscription({

            user: userId,
            plan: planId,
            endDate

        });

        await subscription.save();

        res.status(201).json({

            message: "Subscription Created Successfully",
            subscription

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

};

module.exports = {

    getSubscriptions,
    createSubscription

};