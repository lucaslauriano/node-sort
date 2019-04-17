var bubbleSort = require('../../lib/sort');

class BubbleSortController {
  async post(req, res) {
    const { array } = req.body;
    const result = await bubbleSort(array);

    console.log(result);

    return res.status(200).send({ array: result });
  }
}

module.exports = new BubbleSortController();
