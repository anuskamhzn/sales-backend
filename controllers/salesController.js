import Sale from "../models/Sale.js";

const createSale = async (req, res) => {
  try {
    const { agent_name, sale_amount, deals_no } = req.body;

    if (!agent_name || !sale_amount || !deals_no) {
      return res.status(400).json({
        success: false,
        message: "agent_name, sale_amount, and deals_no are required",
      });
    }

    const sale = await Sale.create({
      agent_name,
      sale_amount,
      deals_no,
    });

    res.status(201).json({
      success: true,
      data: sale,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Sale.aggregate([
      {
        $group: {
          _id: "$agent_name",
          total_sales: { $sum: "$sale_amount" },
          total_deals: { $sum: "$deals_no" },
        },
      },
      {
        $sort: { total_sales: -1 },
      },
      {
        $project: {
          agent_name: "$_id",
          total_sales: 1,
          total_deals: 1,
          _id: 0,
        },
      },
    ]);

    // Add rank using row_number style)
    const rankedLeaderboard = leaderboard.map((entry, index) => ({
      rank: index + 1,
      agent_name: entry.agent_name,
      total_sales: entry.total_sales,
      total_deals: entry.total_deals,
    }));

    res.status(200).json({
      success: true,
      count: rankedLeaderboard.length,
      data: rankedLeaderboard,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export default {
  createSale,
  getLeaderboard
};